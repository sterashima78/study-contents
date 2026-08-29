export type GeneratedPractice = {
  statement: string[];
  question: string;
  solution: {
    steps: string[];
    answer: string;
  };
};

const pick = <T>(values: readonly T[]) => values[Math.floor(Math.random() * values.length)];

const formatLinear = (coefficient: number, variable: string) => {
  if (coefficient === 0) return "0";
  if (coefficient === 1) return variable;
  if (coefficient === -1) return `−${variable}`;
  return coefficient < 0 ? `−${Math.abs(coefficient)}${variable}` : `${coefficient}${variable}`;
};

const joinTerms = (...terms: string[]) =>
  terms
    .filter((term) => term !== "0")
    .join("+")
    .replaceAll("+−", "−")
    .replaceAll("+-", "−");

const generateBoundedMinimum = (): GeneratedPractice => {
  const upper = pick([3, 4, 5] as const);
  const constant = pick([2, 4, 6, 7] as const);
  const rightValue = upper * upper + constant;

  return {
    statement: [`実数 a に対し、f(x)=x²−2ax+${constant} を 0≤x≤${upper} の範囲で考える。`],
    question: "f(x) の最小値と、そのときの x を a の値によって場合分けして求めよ。",
    solution: {
      steps: [
        `f(x)=(x−a)²−a²+${constant} なので軸は x=a。`,
        `a<0 では x=0 が最小を与え、最小値は ${constant}。`,
        `0≤a≤${upper} では x=a が最小を与え、最小値は ${constant}−a²。`,
        `a>${upper} では x=${upper} が最小を与え、最小値は ${rightValue}−${2 * upper}a。`,
      ],
      answer: `a<0: ${constant}, x=0。0≤a≤${upper}: ${constant}−a², x=a。a>${upper}: ${rightValue}−${2 * upper}a, x=${upper}。`,
    },
  };
};

const generateParabolaTangent = (): GeneratedPractice => {
  const slope = pick([2, 4, 6] as const);
  const offset = pick([1, 2, 3, 5] as const);
  const tangentX = slope / 2;
  const intercept = offset - tangentX * tangentX;
  const tangentY = tangentX * tangentX + offset;
  const interceptText =
    intercept === 0 ? "" : intercept > 0 ? `+${intercept}` : `−${Math.abs(intercept)}`;

  return {
    statement: [`放物線 C: y=x²+${offset} と、傾き ${slope} の直線 l: y=${slope}x+k を考える。`],
    question: "C と l が接するような k と、その接点の座標を求めよ。",
    solution: {
      steps: [
        `x²+${offset}=${slope}x+k より x²−${slope}x+${offset}−k=0。`,
        `接するので D=${slope}²−4(${offset}−k)=0。`,
        `これを解くと k=${intercept}。`,
        `重解は x=${tangentX} で、y=${tangentY}。`,
      ],
      answer: `k=${intercept}、接点は (${tangentX},${tangentY})。直線は y=${slope}x${interceptText}。`,
    },
  };
};

const generateTriangleRectangle = (): GeneratedPractice => {
  const pair = pick([
    { base: 12, height: 6 },
    { base: 16, height: 8 },
    { base: 20, height: 10 },
    { base: 24, height: 12 },
  ] as const);
  const x = pair.height / 2;
  const maxArea = (pair.base * pair.height) / 4;

  return {
    statement: [
      `底辺${pair.base} cm、高さ${pair.height} cmの二等辺三角形に、下辺が底辺上にある長方形を入れる。`,
      `長方形の高さを x cm とし、上の2頂点は三角形の等しい2辺上にある。`,
    ],
    question: "長方形の面積の最大値と、そのときの x を求めよ。",
    solution: {
      steps: [
        `相似より横の長さは ${pair.base}(${pair.height}−x)/${pair.height}=${pair.base}−2x。`,
        `面積 S=x(${pair.base}−2x)=−2x²+${pair.base}x。`,
        `平方完成すると S=−2(x−${x})²+${maxArea}。`,
      ],
      answer: `最大値 ${maxArea} cm²、そのとき x=${x} cm。`,
    },
  };
};

const generateDetermineQuadratic = (): GeneratedPractice => {
  const sampleX = pick([-2, -1, 0, 1, 2] as const);
  const minimum = pick([-3, -2, -1, 0, 1] as const);
  const distance = pick([1, 2, 3] as const);
  const sampleValue = minimum + distance * distance;
  const vertices = [sampleX - distance, sampleX + distance].sort(
    (left, right) => left - right,
  );

  const functions = vertices.map((vertex) => {
    const b = -2 * vertex;
    const c = vertex * vertex + minimum;
    const expression = joinTerms("x²", formatLinear(b, "x"), `${c}`);
    return { vertex, expression };
  });

  return {
    statement: [
      `二次関数 f(x)=x²+bx+c は f(${sampleX})=${sampleValue} を満たし、最小値が ${minimum} である。`,
    ],
    question: "条件を満たす f(x) をすべて求め、それぞれの軸を答えよ。",
    solution: {
      steps: [
        `最小値が ${minimum} なので、頂点形式を f(x)=(x−h)²+${minimum} と置ける。`,
        `f(${sampleX})=${sampleValue} より (${sampleX}−h)²=${distance * distance}。`,
        `したがって h=${vertices[0]} または h=${vertices[1]}。`,
        ...functions.map(
          ({ vertex, expression }) => `h=${vertex} のとき f(x)=${expression}、軸は x=${vertex}。`,
        ),
      ],
      answer: functions
        .map(({ vertex, expression }) => `f(x)=${expression}（軸 x=${vertex}）`)
        .join("、または "),
    },
  };
};

const generators = {
  "bounded-minimum": generateBoundedMinimum,
  "parabola-tangent": generateParabolaTangent,
  "triangle-rectangle": generateTriangleRectangle,
  "determine-quadratic": generateDetermineQuadratic,
} as const;

export type Math1QuadraticGeneratorKey = keyof typeof generators;

export const generateMath1QuadraticPractice = (key: string): GeneratedPractice | null => {
  if (!(key in generators)) return null;
  return generators[key as Math1QuadraticGeneratorKey]();
};
