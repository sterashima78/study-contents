import type { AlgebraUnit } from "../math1/algebra";

export const limitUnits: AlgebraUnit[] = [
  {
    key: "sequences-series",
    title: "数列の極限と無限級数",
    description: "数列の収束・発散を見分け、等比数列の極限を基礎に無限級数の和を求めます。",
    lessons: [
      {
        key: "sequence-limits",
        title: "数列の収束と発散",
        description: "nを限りなく大きくしたときに数列の項が近づく値を読み取ります。",
        goals: ["数列の極限を記号で表せる。", "収束・発散・正負の無限大を区別できる。"],
        concepts: [
          {
            title: "極限は『ずっと先の項』の振る舞いを見る",
            body: [
              "nを大きくしたとき aₙ が一定の値 α にいくらでも近づくなら、数列 {aₙ} は α に収束するといいます。",
              "一定値に近づかず、値が限りなく大きくなる場合や振動し続ける場合は発散として扱います。",
            ],
            formulas: ["lim[n→∞] aₙ = α"],
          },
        ],
        example: {
          title: "例題: aₙ = 2 + 3/n の極限",
          problem: "aₙ = 2 + 3/n",
          steps: [
            { expression: "lim[n→∞] 3/n = 0", note: "nが大きくなるほど3/nは0に近づきます。" },
            { expression: "lim[n→∞] aₙ = 2 + 0", note: "定数2と極限0を足します。" },
            { expression: "= 2", note: "したがって数列は2に収束します。" },
          ],
        },
        practice: {
          title: "練習: 同じ考え方で極限を求める",
          problem: "aₙ = 5 − 4/n",
          steps: [
            { prompt: "n→∞ のとき 4/n は何に近づきますか。", answers: ["0"] },
            { prompt: "aₙ の極限を求めてください。", answers: ["5"] },
          ],
          hint: "1/nはnを大きくすると0に近づきます。",
        },
        summary: ["数列の極限はn→∞での項の振る舞いを表す。", "有限値に近づけば収束し、それ以外は発散を考える。"],
      },
      {
        key: "geometric-sequence-limits",
        title: "等比数列 rⁿ の極限",
        description: "公比rの大きさによって rⁿ の極限がどう変わるかを整理します。",
        goals: ["|r|<1 のとき rⁿ→0 を使える。", "rの範囲から収束・発散を判断できる。"],
        concepts: [
          {
            title: "公比の絶対値が1より小さいかを見る",
            body: [
              "|r|<1なら掛けるたびに絶対値が小さくなるため、rⁿは0に近づきます。",
              "r>1では正の無限大へ、r=1では1のまま、r≤−1では一般に有限値へ収束しません。",
            ],
            formulas: ["|r| < 1 ⇒ lim[n→∞] rⁿ = 0"],
          },
        ],
        example: {
          title: "例題: (−1/2)ⁿ の極限",
          problem: "lim[n→∞] (−1/2)ⁿ",
          steps: [
            { expression: "r = −1/2", note: "公比を確認します。" },
            { expression: "|r| = 1/2 < 1", note: "絶対値が1より小さいので項の大きさは0へ近づきます。" },
            { expression: "lim[n→∞] (−1/2)ⁿ = 0", note: "符号は交互でも絶対値が0へ近づくため極限は0です。" },
          ],
        },
        practice: {
          title: "練習: 公比から極限を判断する",
          problem: "lim[n→∞] (3/4)ⁿ",
          steps: [
            { prompt: "公比の絶対値を書いてください。", answers: ["3/4", "0.75"] },
            { prompt: "極限を求めてください。", answers: ["0"] },
          ],
          hint: "3/4は1より小さい正の数です。",
        },
        summary: ["|r|<1ならrⁿは0へ収束する。", "等比型の数列ではまず公比の絶対値を確認する。"],
      },
      {
        key: "infinite-series",
        title: "無限級数と無限等比級数",
        description: "部分和の極限として無限級数を捉え、無限等比級数の和を求めます。",
        goals: ["無限級数の収束を部分和で説明できる。", "|r|<1 の無限等比級数の和を求められる。"],
        concepts: [
          {
            title: "無限個を直接足さず、部分和の極限を見る",
            body: [
              "第n項までの和Sₙを作り、n→∞でSₙが有限値に近づくとき、その値を無限級数の和とします。",
              "初項a、公比rの無限等比級数は|r|<1のときだけ収束します。",
            ],
            formulas: ["a + ar + ar² + … = a/(1 − r)  (|r| < 1)"],
          },
        ],
        example: {
          title: "例題: 3 + 3/2 + 3/4 + … の和",
          problem: "3 + 3/2 + 3/4 + …",
          steps: [
            { expression: "a = 3, r = 1/2", note: "初項と公比を読み取ります。" },
            { expression: "|r| = 1/2 < 1", note: "収束条件を満たします。" },
            { expression: "S = 3/(1 − 1/2) = 6", note: "無限等比級数の和の公式へ代入します。" },
          ],
        },
        practice: {
          title: "練習: 無限等比級数の和",
          problem: "4 + 2 + 1 + …",
          steps: [
            { prompt: "初項aと公比rを a,r の形で書いてください。", answers: ["4,1/2", "4,0.5"] },
            { prompt: "無限級数の和を求めてください。", answers: ["8"] },
          ],
          hint: "初項4、公比1/2です。",
        },
        summary: ["無限級数は部分和Sₙの極限で定義する。", "無限等比級数は|r|<1のときa/(1−r)へ収束する。"],
      },
    ],
  },
  {
    key: "functions-limits",
    title: "関数とその極限",
    description: "分数関数・無理関数、合成関数・逆関数を確認し、関数の極限と連続性につなげます。",
    lessons: [
      {
        key: "rational-radical-functions",
        title: "分数関数と無理関数",
        description: "定義域とグラフの特徴を押さえ、極限を考える前提を整えます。",
        goals: ["分数関数の漸近線を読み取れる。", "無理関数の定義域を求められる。"],
        concepts: [
          {
            title: "式が許されるxの範囲を最初に確認する",
            body: [
              "分数関数では分母が0になる値を除き、無理関数では平方根の中が0以上になる範囲を考えます。",
              "y=a/(x−p)+q のグラフは x=p と y=q を漸近線にもつ双曲線です。",
            ],
            formulas: ["y = a/(x − p) + q ⇒ 漸近線 x = p, y = q"],
          },
        ],
        example: {
          title: "例題: y = 2/(x−1)+3 の漸近線",
          problem: "y = 2/(x − 1) + 3",
          steps: [
            { expression: "x − 1 = 0 ⇒ x = 1", note: "分母が0になる直線が縦の漸近線です。" },
            { expression: "x→±∞ で 2/(x−1)→0", note: "分数部分は0へ近づきます。" },
            { expression: "漸近線: x = 1, y = 3", note: "横方向ではy=3へ近づきます。" },
          ],
        },
        practice: {
          title: "練習: 漸近線を読む",
          problem: "y = −3/(x+2) + 4",
          steps: [
            { prompt: "縦の漸近線を x=… の形で答えてください。", answers: ["x=-2", "x=−2"] },
            { prompt: "横の漸近線を y=… の形で答えてください。", answers: ["y=4"] },
          ],
          hint: "x+2=0 と、分数部分が0へ近づくときを見ます。",
        },
        summary: ["分数関数は分母0の値を定義域から除く。", "無理関数は根号内の条件を確認し、グラフの端点を意識する。"],
      },
      {
        key: "composite-inverse-functions",
        title: "合成関数と逆関数",
        description: "関数を順番に適用する合成と、入出力を逆にたどる逆関数を扱います。",
        goals: ["合成関数(f∘g)(x)を計算できる。", "簡単な関数の逆関数を求められる。"],
        concepts: [
          {
            title: "合成は内側から、逆関数はxとyを交換する",
            body: [
              "(f∘g)(x)は、まずg(x)を計算し、その結果をfへ入力します。",
              "逆関数は y=f(x) でxとyを交換し、yについて解いて求めます。定義域と値域の対応にも注意します。",
            ],
            formulas: ["(f ∘ g)(x) = f(g(x)),  f⁻¹(f(x)) = x"],
          },
        ],
        example: {
          title: "例題: f(x)=2x+1, g(x)=x² の合成",
          problem: "(f ∘ g)(x)",
          steps: [
            { expression: "g(x) = x²", note: "内側のgを先に計算します。" },
            { expression: "f(g(x)) = f(x²)", note: "g(x)をfの入力にします。" },
            { expression: "= 2x² + 1", note: "fのxをx²で置き換えます。" },
          ],
        },
        practice: {
          title: "練習: 合成関数",
          problem: "f(x)=3x−2, g(x)=x+4 のとき (f∘g)(x)",
          steps: [
            { prompt: "f(g(x))へ代入した式を書いてください。", answers: ["3(x+4)-2", "3(x+4)−2"] },
            { prompt: "整理した式を書いてください。", answers: ["3x+10"] },
          ],
          hint: "まずg(x)=x+4をfのxへ入れます。",
        },
        summary: ["合成関数は内側の関数から順に計算する。", "逆関数は入出力を交換し、元の関数と互いに打ち消し合う。"],
      },
      {
        key: "function-limits-continuity",
        title: "関数の極限と連続性",
        description: "xがある値へ近づくときの関数値を調べ、連続であるための条件を確認します。",
        goals: ["0/0型の簡単な極限を式変形して求められる。", "関数が点で連続か判定できる。"],
        concepts: [
          {
            title: "代入できないときは式の形を変える",
            body: [
              "極限はx=aそのものの値ではなく、aへ近づく途中の関数値を見る考え方です。",
              "lim[x→a]f(x)=f(a)が成り立つとき、fはx=aで連続です。0/0型では因数分解や有理化で共通因子を取り除きます。",
            ],
            formulas: ["fがx=aで連続 ⇔ lim[x→a] f(x) = f(a)"],
          },
        ],
        example: {
          title: "例題: (x²−4)/(x−2) の x→2 の極限",
          problem: "lim[x→2] (x² − 4)/(x − 2)",
          steps: [
            { expression: "x² − 4 = (x−2)(x+2)", note: "分子を因数分解します。" },
            { expression: "(x²−4)/(x−2) = x+2  (x≠2)", note: "極限を考える途中ではx≠2なので共通因子を約分できます。" },
            { expression: "lim[x→2] (x+2) = 4", note: "変形後はx=2を代入できます。" },
          ],
        },
        practice: {
          title: "練習: 0/0型の極限",
          problem: "lim[x→3] (x² − 9)/(x − 3)",
          steps: [
            { prompt: "分子を因数分解してください。", answers: ["(x-3)(x+3)", "(x−3)(x+3)"] },
            { prompt: "約分後の式を書いてください。", answers: ["x+3"] },
            { prompt: "極限値を求めてください。", answers: ["6"] },
          ],
          hint: "x²−9は平方差です。",
        },
        summary: ["極限では点そのものより近づく過程を見る。", "連続性は極限値と関数値が一致することを表す。"],
      },
    ],
  },
];
