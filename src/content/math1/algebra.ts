export type ConceptBlock = {
  title: string;
  body: string[];
  formulas?: string[];
};

export type WorkedStep = {
  expression: string;
  note: string;
};

export type PracticeStep = {
  prompt: string;
  answers: string[];
  placeholder?: string;
};

export type Lesson = {
  key: string;
  title: string;
  description: string;
  goals: string[];
  concepts: ConceptBlock[];
  example: {
    title: string;
    problem: string;
    steps: WorkedStep[];
  };
  practice: {
    title: string;
    problem: string;
    steps: PracticeStep[];
    hint: string;
  };
  summary: string[];
};

export type AlgebraUnit = {
  key: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export const algebraUnits: AlgebraUnit[] = [
  {
    key: "expansion-factorization",
    title: "式の展開と因数分解",
    description: "展開と因数分解を別々の技能として学び、式を積の形と和の形の間で正確に変形できるようにします。",
    lessons: [
      {
        key: "expansion",
        title: "多項式の展開",
        description: "分配法則を繰り返し使って、2つの多項式の積を展開します。",
        goals: [
          "分配法則を使って、かっこを1段階ずつ外せる。",
          "すべての積を計算してから同類項をまとめられる。",
        ],
        concepts: [
          {
            title: "展開の基本は分配法則",
            body: [
              "いきなり答えを作ろうとせず、まず一方のかっこの各項に、もう一方のかっこ全体を掛けます。",
              "そのあと、残ったかっこにも分配法則を使います。最後に同類項をまとめます。",
            ],
            formulas: ["a(b + c) = ab + ac"],
          },
        ],
        example: {
          title: "例題: (2x + 3)(x − 4) を展開する",
          problem: "(2x + 3)(x − 4)",
          steps: [
            {
              expression: "= 2x(x − 4) + 3(x − 4)",
              note: "2x と 3 のそれぞれに、かっこ (x − 4) 全体を掛けます。",
            },
            {
              expression: "= 2x·x + 2x·(−4) + 3·x + 3·(−4)",
              note: "残っている2つのかっこにも分配法則を使い、すべての積を書き出します。",
            },
            {
              expression: "= 2x² − 8x + 3x − 12",
              note: "2x·x、2x·(−4)、3·x、3·(−4) をそれぞれ計算します。",
            },
            {
              expression: "= 2x² − 5x − 12",
              note: "−8x と +3x は同類項なので、−8x + 3x = −5x とまとめます。",
            },
          ],
        },
        practice: {
          title: "練習: 例題と同じ手順で展開する",
          problem: "(3x + 2)(x − 5)",
          steps: [
            {
              prompt: "まず、一方のかっこを分配してください。",
              answers: ["3x(x-5)+2(x-5)"],
              placeholder: "例: 3x(x−5)+2(x−5)",
            },
            {
              prompt: "すべての積を計算してください。",
              answers: ["3x²-15x+2x-10"],
              placeholder: "3x²−15x+…",
            },
            {
              prompt: "同類項をまとめてください。",
              answers: ["3x²-13x-10"],
              placeholder: "最終結果",
            },
          ],
          hint: "最初に 3x と 2 のそれぞれへ (x − 5) を掛けます。",
        },
        summary: [
          "展開では、まず分配法則でかっこを1段階ずつ外す。",
          "すべての積を計算してから同類項をまとめる。",
        ],
      },
      {
        key: "multiplication-formulas",
        title: "乗法公式：(a + b)²",
        description: "和の二乗の公式を使い、中央の 2ab を含めて正確に展開します。",
        goals: [
          "(a + b)² = a² + 2ab + b² を使える。",
          "a と b に対応する式を読み取り、公式へ1段階ずつ代入できる。",
        ],
        concepts: [
          {
            title: "和の二乗の公式",
            body: [
              "(a + b)² は (a + b)(a + b) を展開した形です。a² と b² の間に、2ab が入ります。",
              "公式へ代入する前に、a と b にどの式が対応するかを先に書きます。",
            ],
            formulas: ["(a + b)² = a² + 2ab + b²"],
          },
        ],
        example: {
          title: "例題: (2x + 3)² を展開する",
          problem: "(2x + 3)²",
          steps: [
            {
              expression: "a = 2x, b = 3",
              note: "(a + b)² の形なので、a に 2x、b に 3 を対応させます。",
            },
            {
              expression: "= (2x)² + 2·(2x)·3 + 3²",
              note: "a² + 2ab + b² に、a = 2x、b = 3 をそのまま代入します。",
            },
            {
              expression: "= 4x² + 12x + 9",
              note: "(2x)² = 4x²、2·(2x)·3 = 12x、3² = 9 をそれぞれ計算します。",
            },
          ],
        },
        practice: {
          title: "練習: 和の二乗の公式を使う",
          problem: "(3x + 4)²",
          steps: [
            {
              prompt: "a と b を書いてください。",
              answers: ["a=3x,b=4", "a=3x，b=4"],
              placeholder: "a=…, b=…",
            },
            {
              prompt: "公式へ代入した式を書いてください。",
              answers: ["(3x)²+2·(3x)·4+4²", "(3x)²+2*(3x)*4+4²"],
              placeholder: "(3x)²+…",
            },
            {
              prompt: "計算結果を書いてください。",
              answers: ["9x²+24x+16"],
              placeholder: "最終結果",
            },
          ],
          hint: "(a + b)² = a² + 2ab + b² の中央の 2ab を忘れずに計算します。",
        },
        summary: [
          "(a + b)² では、a²、2ab、b² の3項を順に作る。",
          "先に a と b を決めてから公式へ代入する。",
        ],
      },
      {
        key: "multiplication-formula-difference-square",
        title: "乗法公式：(a − b)²",
        description: "差の二乗の公式を使い、中央の項の符号に注意して展開します。",
        goals: [
          "(a − b)² = a² − 2ab + b² を使える。",
          "中央の項だけが負になることを確認しながら計算できる。",
        ],
        concepts: [
          {
            title: "差の二乗では中央が −2ab",
            body: [
              "(a − b)² でも最初と最後は a²、b² です。違いは中央が −2ab になることです。",
              "b を負の数として代入するのではなく、b 自体は正の量として読み取り、公式のマイナスを使います。",
            ],
            formulas: ["(a − b)² = a² − 2ab + b²"],
          },
        ],
        example: {
          title: "例題: (3x − 2)² を展開する",
          problem: "(3x − 2)²",
          steps: [
            {
              expression: "a = 3x, b = 2",
              note: "(a − b)² の形なので、a に 3x、b に 2 を対応させます。",
            },
            {
              expression: "= (3x)² − 2·(3x)·2 + 2²",
              note: "a² − 2ab + b² に、そのまま代入します。",
            },
            {
              expression: "= 9x² − 12x + 4",
              note: "各項を計算します。中央だけが負で、最後の 2² は正になります。",
            },
          ],
        },
        practice: {
          title: "練習: 差の二乗の公式を使う",
          problem: "(2x − 5)²",
          steps: [
            {
              prompt: "a と b を書いてください。",
              answers: ["a=2x,b=5", "a=2x，b=5"],
              placeholder: "a=…, b=…",
            },
            {
              prompt: "公式へ代入した式を書いてください。",
              answers: ["(2x)²-2·(2x)·5+5²", "(2x)²-2*(2x)*5+5²"],
              placeholder: "(2x)²−…",
            },
            {
              prompt: "計算結果を書いてください。",
              answers: ["4x²-20x+25"],
              placeholder: "最終結果",
            },
          ],
          hint: "(a − b)² = a² − 2ab + b² を使い、最後の b² は正になることを確認します。",
        },
        summary: [
          "(a − b)² では中央が −2ab になる。",
          "b² は正なので、最後の項までマイナスにしない。",
        ],
      },
      {
        key: "multiplication-formula-sum-difference",
        title: "乗法公式：(a + b)(a − b)",
        description: "和と差の積の公式を使い、中央の項が打ち消し合う展開を扱います。",
        goals: [
          "(a + b)(a − b) = a² − b² を使える。",
          "2つのかっこで共通する a と b を読み取れる。",
        ],
        concepts: [
          {
            title: "和と差の積は二乗の差になる",
            body: [
              "(a + b)(a − b) を展開すると、−ab と +ab が打ち消し合うため a² − b² だけが残ります。",
              "2つのかっこで同じ部分を a、符号だけが反対の部分を b と見ます。",
            ],
            formulas: ["(a + b)(a − b) = a² − b²"],
          },
        ],
        example: {
          title: "例題: (4x + 3)(4x − 3) を展開する",
          problem: "(4x + 3)(4x − 3)",
          steps: [
            {
              expression: "a = 4x, b = 3",
              note: "2つのかっこに共通する 4x を a、符号だけが反対の 3 を b とします。",
            },
            {
              expression: "= (4x)² − 3²",
              note: "a² − b² に、a = 4x、b = 3 を代入します。",
            },
            {
              expression: "= 16x² − 9",
              note: "(4x)² = 16x²、3² = 9 を計算します。中央の x の項はありません。",
            },
          ],
        },
        practice: {
          title: "練習: 和と差の積の公式を使う",
          problem: "(5x + 2)(5x − 2)",
          steps: [
            {
              prompt: "a と b を書いてください。",
              answers: ["a=5x,b=2", "a=5x，b=2"],
              placeholder: "a=…, b=…",
            },
            {
              prompt: "公式へ代入した式を書いてください。",
              answers: ["(5x)²-2²"],
              placeholder: "(5x)²−…",
            },
            {
              prompt: "計算結果を書いてください。",
              answers: ["25x²-4"],
              placeholder: "最終結果",
            },
          ],
          hint: "2つのかっこで共通する 5x を a、+2 と −2 の 2 を b として考えます。",
        },
        summary: [
          "(a + b)(a − b) は a² − b² になる。",
          "同じ部分と符号だけが反対の部分を見つけて a と b を決める。",
        ],
      },
      {
        key: "common-factor",
        title: "共通因数による因数分解",
        description: "すべての項に共通する数や文字を見つけ、かっこの外へくくり出します。",
        goals: [
          "各項に共通する因数を見つけられる。",
          "共通因数でくくった後、展開して検算できる。",
        ],
        concepts: [
          {
            title: "因数分解は展開の逆",
            body: ["ab + ac = a(b + c) のように、すべての項に共通する因数をかっこの外に出します。"],
            formulas: ["ab + ac = a(b + c)"],
          },
        ],
        example: {
          title: "例題: 6x² + 9x を因数分解する",
          problem: "6x² + 9x",
          steps: [
            {
              expression: "6x² = 3x·2x, 9x = 3x·3",
              note: "2つの項に共通して含まれる 3x を見つけます。",
            },
            {
              expression: "= 3x·2x + 3x·3",
              note: "それぞれの項を、共通因数 3x を含む積として書き直します。",
            },
            {
              expression: "= 3x(2x + 3)",
              note: "共通因数 3x をかっこの外へくくり出します。",
            },
          ],
        },
        practice: {
          title: "練習: 共通因数をくくる",
          problem: "8x² − 12x",
          steps: [
            {
              prompt: "共通因数を書いてください。",
              answers: ["4x"],
              placeholder: "共通因数",
            },
            {
              prompt: "各項を共通因数を含む積に直してください。",
              answers: ["4x·2x-4x·3", "4x*2x-4x*3"],
              placeholder: "4x·…−4x·…",
            },
            {
              prompt: "因数分解した結果を書いてください。",
              answers: ["4x(2x-3)"],
              placeholder: "最終結果",
            },
          ],
          hint: "8 と 12 の最大公約数と、両方に含まれる x に注目します。",
        },
        summary: [
          "最初に全項へ共通する数と文字を探す。",
          "因数分解後に展開すると、元の式に戻るか確認できる。",
        ],
      },
      {
        key: "quadratic-factorization",
        title: "x² + px + q の因数分解",
        description: "和が p、積が q になる2数を探して二次式を因数分解します。",
        goals: [
          "和と積の条件から2数を探せる。",
          "x² + px + q を (x + m)(x + n) の形にできる。",
        ],
        concepts: [
          {
            title: "探すのは和と積を満たす2数",
            body: ["m + n = p、mn = q なら、x² + px + q = (x + m)(x + n) です。"],
            formulas: ["m + n = p, mn = q", "x² + px + q = (x + m)(x + n)"],
          },
        ],
        example: {
          title: "例題: x² + 5x + 6 を因数分解する",
          problem: "x² + 5x + 6",
          steps: [
            {
              expression: "積が 6: 1 と 6, 2 と 3",
              note: "まず定数項 6 になる整数の組を列挙します。",
            },
            {
              expression: "2 + 3 = 5",
              note: "その中から、和が x の係数 5 になる組を選びます。",
            },
            {
              expression: "= (x + 2)(x + 3)",
              note: "見つけた 2 と 3 を、それぞれのかっこへ入れます。",
            },
          ],
        },
        practice: {
          title: "練習: 和と積から2数を探す",
          problem: "x² − x − 12",
          steps: [
            {
              prompt: "積が −12 になる整数の組を1つずつ確認し、和が −1 になる2数を書いてください。",
              answers: ["3,-4", "-4,3", "3，-4", "-4，3"],
              placeholder: "例: 3, -4",
            },
            {
              prompt: "因数分解した結果を書いてください。",
              answers: ["(x+3)(x-4)", "(x-4)(x+3)"],
              placeholder: "(x+…)(x+…)",
            },
          ],
          hint: "積が負なので、2数の符号は異なります。",
        },
        summary: [
          "定数項 q の積を作る2数を列挙する。",
          "その中から和が p になる組を選ぶ。",
        ],
      },
      {
        key: "general-quadratic-factorization",
        title: "ax² + bx + c の因数分解",
        description: "x² の係数が1でない二次式を、展開したときの一次の項を確かめながら因数分解します。",
        goals: [
          "ax² と c の因数の組を候補として作れる。",
          "交差して掛かる項の和が bx になる組を選べる。",
        ],
        concepts: [
          {
            title: "展開して一次の項を確認する",
            body: ["(mx + p)(nx + q) を展開すると、一次の項は mqx + npx です。候補を作ったら一次の係数が合うか確認します。"],
            formulas: ["(mx + p)(nx + q) = mnx² + (mq + np)x + pq"],
          },
        ],
        example: {
          title: "例題: 6x² + 7x + 2 を因数分解する",
          problem: "6x² + 7x + 2",
          steps: [
            {
              expression: "6x² = 2x·3x, 2 = 1·2",
              note: "先頭と定数項を作れる因数の組を考えます。",
            },
            {
              expression: "候補: (2x + 1)(3x + 2)",
              note: "候補を1つ作り、交差して掛かる項を確認します。",
            },
            {
              expression: "2x·2 + 1·3x = 4x + 3x = 7x",
              note: "一次の項が元の 7x と一致することを確かめます。",
            },
            {
              expression: "= (2x + 1)(3x + 2)",
              note: "二次、一次、定数のすべてが一致したので、この因数分解で確定します。",
            },
          ],
        },
        practice: {
          title: "練習: 候補を展開して確かめる",
          problem: "6x² + 11x + 3",
          steps: [
            {
              prompt: "6x² と 3 を作る因数を使い、候補を1つ書いてください。",
              answers: ["(3x+1)(2x+3)", "(2x+3)(3x+1)"],
              placeholder: "(…)(…)",
            },
            {
              prompt: "交差して掛かる一次の項の計算を書いてください。",
              answers: ["9x+2x=11x", "2x+9x=11x"],
              placeholder: "…x+…x=11x",
            },
            {
              prompt: "因数分解した結果を書いてください。",
              answers: ["(3x+1)(2x+3)", "(2x+3)(3x+1)"],
              placeholder: "最終結果",
            },
          ],
          hint: "3x と 2x、1 と 3 の組を試し、交差項を計算します。",
        },
        summary: [
          "先頭項と定数項から因数の候補を作る。",
          "候補は必ず展開し、一次の係数が一致するか確認する。",
        ],
      },
    ],
  },
  {
    key: "real-numbers",
    title: "実数",
    description: "有理数・無理数、根号、絶対値、有理化を小さな技能に分けて学びます。",
    lessons: [
      {
        key: "rational-irrational",
        title: "有理数と無理数",
        description: "有限小数・循環小数と無理数を区別し、実数の分類を整理します。",
        goals: ["有理数を分数で表せる数として説明できる。", "代表的な無理数を有理数と区別できる。"],
        concepts: [
          {
            title: "有理数は整数の比で表せる",
            body: ["整数、有限小数、循環小数は有理数です。√2 や π のように分数で正確に表せない数は無理数です。"],
            formulas: ["有理数 = a/b（a, b は整数、b ≠ 0）"],
          },
        ],
        example: {
          title: "例題: 0.375 は有理数か",
          problem: "0.375",
          steps: [
            { expression: "0.375 = 375/1000", note: "有限小数を10の累乗を分母とする分数にします。" },
            { expression: "= 3/8", note: "分子と分母を125で割って約分します。" },
            { expression: "したがって有理数", note: "整数の比 3/8 と表せたので有理数です。" },
          ],
        },
        practice: {
          title: "練習: 数を分類する",
          problem: "√7 は有理数か無理数か",
          steps: [
            { prompt: "√7 が整数になるかを確認してください。", answers: ["ならない", "整数にならない"], placeholder: "なる / ならない" },
            { prompt: "分類を書いてください。", answers: ["無理数"], placeholder: "有理数 / 無理数" },
          ],
          hint: "7 は平方数ではないため、√7 は整数になりません。",
        },
        summary: ["整数・有限小数・循環小数は有理数。", "平方数でない正の整数の平方根は無理数になる。"],
      },
      {
        key: "radicals",
        title: "根号の簡単化",
        description: "平方数を根号の外へ出し、根号を含む数を簡単な形にします。",
        goals: ["根号の中から平方数の因数を見つけられる。", "√(a²b) = a√b を使って簡単化できる。"],
        concepts: [
          {
            title: "平方数を根号の外へ出す",
            body: ["根号の中を『平方数 × 残り』に分けます。平方数の平方根だけを根号の外へ出します。"],
            formulas: ["√(a²b) = a√b（a ≥ 0）"],
          },
        ],
        example: {
          title: "例題: √72 を簡単にする",
          problem: "√72",
          steps: [
            { expression: "72 = 36·2", note: "72 の中に含まれる大きな平方数 36 を見つけます。" },
            { expression: "√72 = √(36·2)", note: "平方数と残りの積として根号の中を書き直します。" },
            { expression: "= √36·√2", note: "積の平方根を分けます。" },
            { expression: "= 6√2", note: "√36 = 6 を根号の外へ出します。" },
          ],
        },
        practice: {
          title: "練習: 平方数を探す",
          problem: "√48 を簡単にする",
          steps: [
            { prompt: "48 を『平方数 × 残り』で表してください。", answers: ["16·3", "16*3"], placeholder: "例: 16·3" },
            { prompt: "根号を分けた式を書いてください。", answers: ["√16·√3", "√16*√3"], placeholder: "√…·√…" },
            { prompt: "簡単にした結果を書いてください。", answers: ["4√3"], placeholder: "最終結果" },
          ],
          hint: "48 に含まれる平方数 16 に注目します。",
        },
        summary: ["根号の中から平方数を探す。", "平方数の平方根だけを根号の外へ出す。"],
      },
      {
        key: "absolute-value",
        title: "絶対値",
        description: "数直線上で0からの距離として絶対値を理解し、正負に応じて計算します。",
        goals: ["絶対値を0からの距離として説明できる。", "数の符号を確認して絶対値を外せる。"],
        concepts: [
          {
            title: "絶対値は0からの距離",
            body: ["距離は負にならないので、正の数の絶対値はそのまま、負の数の絶対値は符号を変えます。"],
            formulas: ["|a| = a（a ≥ 0）", "|a| = −a（a < 0）"],
          },
        ],
        example: {
          title: "例題: |−7| + |3| を計算する",
          problem: "|−7| + |3|",
          steps: [
            { expression: "|−7| = 7", note: "−7 は0から7だけ離れているので、絶対値は7です。" },
            { expression: "|3| = 3", note: "3 は正なので、そのまま3です。" },
            { expression: "7 + 3 = 10", note: "絶対値を外した後に加法を計算します。" },
          ],
        },
        practice: {
          title: "練習: 1つずつ絶対値を外す",
          problem: "|−5| − |−2|",
          steps: [
            { prompt: "|−5| の値を書いてください。", answers: ["5"], placeholder: "数値" },
            { prompt: "|−2| の値を書いてください。", answers: ["2"], placeholder: "数値" },
            { prompt: "全体の計算結果を書いてください。", answers: ["3"], placeholder: "最終結果" },
          ],
          hint: "絶対値を先に1つずつ計算してから、最後に引き算します。",
        },
        summary: ["絶対値は0からの距離なので負にならない。", "複数の絶対値があるときは1つずつ外す。"],
      },
      {
        key: "rationalization",
        title: "分母の有理化",
        description: "分母に根号がある分数で、値を変えずに分母から根号をなくします。",
        goals: ["分子と分母へ同じ数を掛けても値が変わらないことを利用できる。", "単項の根号を含む分母を有理化できる。"],
        concepts: [
          {
            title: "分母と分子に同じ根号を掛ける",
            body: ["√a·√a = a を利用します。分子と分母に同じ数を掛けるので、分数全体の値は変わりません。"],
            formulas: ["1/√a = √a/a"],
          },
        ],
        example: {
          title: "例題: 3/√5 を有理化する",
          problem: "3/√5",
          steps: [
            { expression: "= (3/√5)·(√5/√5)", note: "分子と分母に同じ √5 を掛けます。" },
            { expression: "= 3√5/(√5·√5)", note: "分子と分母をそれぞれ掛けます。" },
            { expression: "= 3√5/5", note: "√5·√5 = 5 なので、分母から根号がなくなります。" },
          ],
        },
        practice: {
          title: "練習: 同じ根号を掛ける",
          problem: "2/√3 を有理化する",
          steps: [
            { prompt: "分子と分母に掛ける分数を書いてください。", answers: ["√3/√3"], placeholder: "√…/√…" },
            { prompt: "掛けた直後の式を書いてください。", answers: ["2√3/(√3·√3)", "2√3/(√3*√3)"], placeholder: "2√3/(…)" },
            { prompt: "有理化した結果を書いてください。", answers: ["2√3/3"], placeholder: "最終結果" },
          ],
          hint: "分母が √3 なので、分子と分母へ √3 を掛けます。",
        },
        summary: ["分母と分子に同じ数を掛けても分数の値は変わらない。", "√a·√a = a を使って分母の根号を消す。"],
      },
    ],
  },
  {
    key: "linear-inequalities",
    title: "一次不等式",
    description: "不等式の性質、解法、文章題を別ページに分け、符号と不等号の向きを丁寧に確認します。",
    lessons: [
      {
        key: "inequality-rules",
        title: "不等式の基本性質",
        description: "両辺への加減乗除で不等号がどう変化するかを理解します。",
        goals: ["両辺へ同じ数を加減しても不等号の向きが変わらないことを使える。", "負の数で掛けたり割ったりすると不等号が反転することを使える。"],
        concepts: [
          {
            title: "負の数で乗除すると向きが逆になる",
            body: ["数直線では負の数を掛けると左右が反転します。そのため、不等号の向きも逆になります。"],
            formulas: ["a < b なら a + c < b + c", "a < b, c < 0 なら ac > bc"],
          },
        ],
        example: {
          title: "例題: −2 < 3 の両辺に −4 を掛ける",
          problem: "−2 < 3",
          steps: [
            { expression: "左辺: (−2)·(−4) = 8", note: "まず左辺を計算します。" },
            { expression: "右辺: 3·(−4) = −12", note: "次に右辺を計算します。" },
            { expression: "8 > −12", note: "負の数を掛けたので、不等号を < から > に反転します。" },
          ],
        },
        practice: {
          title: "練習: 不等号の向きを判断する",
          problem: "5 > 1 の両辺を −2 で割る",
          steps: [
            { prompt: "左辺を計算してください。", answers: ["-5/2", "−5/2", "-2.5", "−2.5"], placeholder: "5÷(−2)" },
            { prompt: "右辺を計算してください。", answers: ["-1/2", "−1/2", "-0.5", "−0.5"], placeholder: "1÷(−2)" },
            { prompt: "不等号を含む結果を書いてください。", answers: ["-5/2<-1/2", "-2.5<-0.5"], placeholder: "… < …" },
          ],
          hint: "負の数で割ると、> は < に反転します。",
        },
        summary: ["加減では不等号の向きは変わらない。", "負の数で乗除すると不等号の向きが反転する。"],
      },
      {
        key: "solving",
        title: "一次不等式を解く",
        description: "移項と係数の処理を1段階ずつ行い、x の範囲を求めます。",
        goals: ["一次不等式を等式と同様に整理できる。", "負の係数で割るときに不等号を反転できる。"],
        concepts: [
          {
            title: "x の項と定数項を分ける",
            body: ["まず x の項を一方へ、定数項を他方へ集めます。最後に x の係数で両辺を割ります。"],
          },
        ],
        example: {
          title: "例題: 3x − 5 < 7 を解く",
          problem: "3x − 5 < 7",
          steps: [
            { expression: "3x − 5 + 5 < 7 + 5", note: "両辺に5を加えて、左辺の −5 を消します。" },
            { expression: "3x < 12", note: "両辺を整理します。" },
            { expression: "3x/3 < 12/3", note: "正の数3で両辺を割るので、不等号の向きは変わりません。" },
            { expression: "x < 4", note: "割り算を計算して解を得ます。" },
          ],
        },
        practice: {
          title: "練習: 負の係数に注意して解く",
          problem: "−2x + 3 ≥ 9",
          steps: [
            { prompt: "両辺から3を引いた式を書いてください。", answers: ["-2x≥6", "−2x≥6"], placeholder: "−2x … 6" },
            { prompt: "両辺を −2 で割る式を書いてください。", answers: ["x≤-3", "x≤−3"], placeholder: "x … −3" },
          ],
          hint: "最後に負の数 −2 で割るため、≥ の向きが反転します。",
        },
        summary: ["まず x の項と定数項を分ける。", "最後に負の係数で割る場合は不等号を反転する。"],
      },
      {
        key: "word-problems",
        title: "一次不等式の文章題",
        description: "文章中の条件を不等式へ置き換え、解が問題の意味に合うかまで確認します。",
        goals: ["未知数を決めて条件を不等式にできる。", "求めた解を文章の条件に戻して解釈できる。"],
        concepts: [
          {
            title: "先に何を x とするか決める",
            body: ["『以上』『以下』『未満』『より大きい』などの語を不等号へ対応させます。整数個数を求める問題では、最後に整数条件も確認します。"],
          },
        ],
        example: {
          title: "例題: 1冊350円のノートを買い、送料500円を含めて3000円以下にする",
          problem: "ノートを最大何冊買えるか",
          steps: [
            { expression: "ノートの冊数を x 冊とする", note: "求めたい量を x と置きます。" },
            { expression: "350x + 500 ≤ 3000", note: "商品代 350x 円と送料500円の合計が3000円以下という条件です。" },
            { expression: "350x ≤ 2500", note: "両辺から500を引きます。" },
            { expression: "x ≤ 2500/350 = 50/7 ≈ 7.14", note: "正の350で割ります。" },
            { expression: "x は整数なので最大7冊", note: "冊数は整数なので、7.14以下の最大の整数7を答えます。" },
          ],
        },
        practice: {
          title: "練習: 条件を式にする",
          problem: "1個120円のお菓子を買い、袋代80円を含めて1000円以下にしたい。最大何個買えるか。",
          steps: [
            { prompt: "個数を x とした不等式を書いてください。", answers: ["120x+80≤1000"], placeholder: "120x+…≤…" },
            { prompt: "定数項を移した式を書いてください。", answers: ["120x≤920"], placeholder: "120x≤…" },
            { prompt: "最大の個数を書いてください。", answers: ["7", "7個"], placeholder: "個数" },
          ],
          hint: "120×8 + 80 と 1000 の大小も最後の確認に使えます。",
        },
        summary: ["未知数を決め、文章の条件を不等式に翻訳する。", "個数などは最後に整数条件と現実的な意味を確認する。"],
      },
    ],
  },
  {
    key: "sets-propositions",
    title: "集合と命題",
    description: "集合の演算、命題、必要十分条件、対偶をそれぞれ独立した小単元として学びます。",
    lessons: [
      {
        key: "set-operations",
        title: "集合の和集合と共通部分",
        description: "2つの集合に対して、少なくとも一方に属する要素と両方に属する要素を整理します。",
        goals: ["和集合 A ∪ B を求められる。", "共通部分 A ∩ B を求められる。"],
        concepts: [
          {
            title: "∪ と ∩ の意味を区別する",
            body: ["A ∪ B は A または B の少なくとも一方に入る要素、A ∩ B は A と B の両方に入る要素です。"],
            formulas: ["A ∪ B: 少なくとも一方", "A ∩ B: 両方"],
          },
        ],
        example: {
          title: "例題: A={1,2,3,4}, B={3,4,5} の共通部分を求める",
          problem: "A = {1,2,3,4}, B = {3,4,5}",
          steps: [
            { expression: "1: A のみ", note: "1 は A にありますが B にはありません。" },
            { expression: "2: A のみ", note: "2 も A にだけあります。" },
            { expression: "3, 4: A と B の両方", note: "3 と4は両方の集合に含まれます。" },
            { expression: "A ∩ B = {3,4}", note: "両方に含まれる要素だけを集めます。" },
          ],
        },
        practice: {
          title: "練習: 和集合を求める",
          problem: "A={1,3,5}, B={2,3,4} の A ∪ B",
          steps: [
            { prompt: "A と B に現れる要素を重複なくすべて書いてください。", answers: ["1,2,3,4,5", "1，2，3，4，5", "{1,2,3,4,5}"], placeholder: "1,2,…" },
          ],
          hint: "和集合では、どちらか一方に入っていれば含めます。3は1回だけ書きます。",
        },
        summary: ["∪ は少なくとも一方に属する要素。", "∩ は両方に属する要素。"],
      },
      {
        key: "propositions-counterexamples",
        title: "命題と反例",
        description: "命題の真偽を判断し、偽であることを示す反例を見つけます。",
        goals: ["真偽が定まる文を命題として扱える。", "命題が偽であることを1つの反例で示せる。"],
        concepts: [
          {
            title: "反例は1つでよい",
            body: ["『すべての〜は…である』という命題を否定するには、条件を満たすのに結論を満たさない例を1つ見つければ十分です。"],
          },
        ],
        example: {
          title: "例題: 『x² > 4 ならば x > 2』は真か",
          problem: "x² > 4 ⇒ x > 2",
          steps: [
            { expression: "x = −3 を考える", note: "結論 x > 2 を満たさなそうな負の数を試します。" },
            { expression: "(−3)² = 9 > 4", note: "x = −3 は条件 x² > 4 を満たします。" },
            { expression: "−3 > 2 は成り立たない", note: "しかし結論は満たしません。" },
            { expression: "よって命題は偽", note: "条件を満たして結論を満たさない反例が見つかりました。" },
          ],
        },
        practice: {
          title: "練習: 反例を探す",
          problem: "『x² ≥ 1 ならば x ≥ 1』の反例を1つ挙げる",
          steps: [
            { prompt: "条件 x² ≥ 1 を満たし、結論 x ≥ 1 を満たさない整数を書いてください。", answers: ["-1", "−1", "-2", "−2", "-3", "−3"], placeholder: "反例" },
          ],
          hint: "負の整数を試し、その二乗を確認します。",
        },
        summary: ["命題が真なら、条件を満たすすべての場合で結論が成り立つ。", "偽を示すには反例が1つあればよい。"],
      },
      {
        key: "necessary-sufficient",
        title: "必要条件と十分条件",
        description: "p ⇒ q と q ⇒ p を別々に確認し、必要・十分・必要十分を判断します。",
        goals: ["p ⇒ q が成り立つときの十分条件・必要条件を説明できる。", "両方向を確認して必要十分条件を判定できる。"],
        concepts: [
          {
            title: "矢印の向きを2回確認する",
            body: ["p ⇒ q が真なら p は q の十分条件、q は p の必要条件です。q ⇒ p も真なら、互いに必要十分条件です。"],
            formulas: ["p ⇒ q: p は q の十分条件", "p ⇒ q: q は p の必要条件"],
          },
        ],
        example: {
          title: "例題: 『x = 2』と『x² = 4』の関係",
          problem: "p: x = 2, q: x² = 4",
          steps: [
            { expression: "p ⇒ q: 2² = 4 なので真", note: "x = 2 なら必ず x² = 4 になります。" },
            { expression: "q ⇒ p: x = −2 でも x² = 4 なので偽", note: "q を満たしても p を満たさない反例があります。" },
            { expression: "p は q の十分条件", note: "p ⇒ q が真なので p は q を保証します。" },
            { expression: "q は p の必要条件", note: "p が成り立つには q が必要ですが、q だけでは p を保証できません。" },
          ],
        },
        practice: {
          title: "練習: 両方向を判定する",
          problem: "p: x = 0, q: x² = 0",
          steps: [
            { prompt: "p ⇒ q は真か偽か。", answers: ["真"], placeholder: "真 / 偽" },
            { prompt: "q ⇒ p は真か偽か。", answers: ["真"], placeholder: "真 / 偽" },
            { prompt: "p と q の関係を書いてください。", answers: ["必要十分条件", "互いに必要十分条件"], placeholder: "必要条件 / 十分条件 / 必要十分条件" },
          ],
          hint: "x² = 0 を満たす実数が0以外にあるか確認します。",
        },
        summary: ["p ⇒ q と q ⇒ p を混同せず別々に確認する。", "両方向が真なら必要十分条件。"],
      },
      {
        key: "contrapositive",
        title: "対偶",
        description: "命題 p ⇒ q の対偶 ¬q ⇒ ¬p を作り、元の命題と真偽が一致することを利用します。",
        goals: ["命題から対偶を正しく作れる。", "直接示しにくい命題を対偶で考えられる。"],
        concepts: [
          {
            title: "対偶は否定して順番を逆にする",
            body: ["p ⇒ q の対偶は ¬q ⇒ ¬p です。元の命題と対偶は必ず同じ真偽になります。"],
            formulas: ["p ⇒ q と ¬q ⇒ ¬p は同値"],
          },
        ],
        example: {
          title: "例題: 『n² が偶数なら n は偶数』を対偶で考える",
          problem: "n² が偶数 ⇒ n が偶数",
          steps: [
            { expression: "結論の否定: n は奇数", note: "『n は偶数』の否定を作ります。" },
            { expression: "条件の否定: n² は奇数", note: "『n² は偶数』の否定を作ります。" },
            { expression: "対偶: n が奇数 ⇒ n² が奇数", note: "否定した2つを逆の順番に並べます。" },
            { expression: "n = 2k + 1 とすると n² = 4k² + 4k + 1", note: "奇数を 2k + 1 と表して二乗します。" },
            { expression: "= 2(2k² + 2k) + 1 なので奇数", note: "2×整数+1 の形なので対偶が真、したがって元の命題も真です。" },
          ],
        },
        practice: {
          title: "練習: 対偶を作る",
          problem: "『x > 3 ならば x > 1』の対偶を書く",
          steps: [
            { prompt: "結論『x > 1』の否定を書いてください。", answers: ["x≤1"], placeholder: "x … 1" },
            { prompt: "条件『x > 3』の否定を書いてください。", answers: ["x≤3"], placeholder: "x … 3" },
            { prompt: "対偶を書いてください。", answers: ["x≤1⇒x≤3", "x≤1ならばx≤3"], placeholder: "… ⇒ …" },
          ],
          hint: "対偶は『結論を否定 → 条件を否定』の順です。",
        },
        summary: ["対偶は結論と条件をそれぞれ否定し、順番を逆にする。", "元の命題と対偶は真偽が一致する。"],
      },
    ],
  },
];

export const getAlgebraUnit = (unitKey: string) =>
  algebraUnits.find((unit) => unit.key === unitKey);

export const getAlgebraLesson = (unitKey: string, lessonKey: string) => {
  const unit = getAlgebraUnit(unitKey);
  const lesson = unit?.lessons.find((item) => item.key === lessonKey);
  return unit && lesson ? { unit, lesson } : undefined;
};

export const algebraLessonPaths = algebraUnits.flatMap((unit) =>
  unit.lessons.map((lesson) => ({ unit: unit.key, lesson: lesson.key })),
);

export const getLessonNeighbors = (unitKey: string, lessonKey: string) => {
  const flattened = algebraUnits.flatMap((unit) =>
    unit.lessons.map((lesson) => ({ unit, lesson })),
  );
  const index = flattened.findIndex(
    ({ unit, lesson }) => unit.key === unitKey && lesson.key === lessonKey,
  );

  return {
    previous: index > 0 ? flattened[index - 1] : undefined,
    next: index >= 0 && index < flattened.length - 1 ? flattened[index + 1] : undefined,
  };
};
