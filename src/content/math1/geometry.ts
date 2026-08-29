import type { MathUnit } from "./types";

export const geometryUnits: MathUnit[] = [
  {
    key: "trigonometric-ratios",
    title: "三角比",
    description: "直角三角形の辺の比から sin・cos・tan を定義し、特別な角や鈍角まで扱います。",
    lessons: [
      {
        key: "right-triangle-trig",
        title: "直角三角形の sin・cos・tan",
        description: "角に対する向かい側・となり側・斜辺を見分け、3つの三角比を求めます。",
        goals: ["角を基準に3辺の役割を見分けられる。", "辺の長さから sin・cos・tan を求められる。"],
        concepts: [
          {
            title: "三角比は辺の長さの比",
            body: [
              "直角三角形で鋭角 θ を1つ決めると、斜辺、θ の向かい側の辺、θ にとなり合う辺が決まります。",
              "同じ角 θ をもつ直角三角形は相似なので、大きさが変わってもこれらの辺の比は同じです。",
            ],
            formulas: [
              "sin θ = 向かい側 / 斜辺",
              "cos θ = となり側 / 斜辺",
              "tan θ = 向かい側 / となり側",
            ],
          },
        ],
        example: {
          title: "例題: 3-4-5 の直角三角形で三角比を求める",
          problem: "斜辺5、角 θ の向かい側3、となり側4のとき、sin θ、cos θ、tan θ を求める。",
          steps: [
            { expression: "sin θ = 3/5", note: "sin は向かい側 ÷ 斜辺です。" },
            { expression: "cos θ = 4/5", note: "cos はとなり側 ÷ 斜辺です。" },
            { expression: "tan θ = 3/4", note: "tan は向かい側 ÷ となり側です。" },
          ],
        },
        practice: {
          title: "練習: 5-12-13 の直角三角形",
          problem: "斜辺13、角 θ の向かい側5、となり側12です。",
          steps: [
            { prompt: "sin θ を求めてください。", answers: ["5/13"] },
            { prompt: "cos θ を求めてください。", answers: ["12/13"] },
            { prompt: "tan θ を求めてください。", answers: ["5/12"] },
          ],
          hint: "分母が斜辺になるのは sin と cos です。tan は斜辺を使いません。",
        },
        summary: [
          "sin は向かい側/斜辺、cos はとなり側/斜辺、tan は向かい側/となり側。",
          "どの角を基準にするかで『向かい側』『となり側』が変わる。",
        ],
      },
      {
        key: "special-angle-trig",
        title: "30°・45°・60°の三角比",
        description: "正三角形と直角二等辺三角形から、よく使う角の三角比を作ります。",
        goals: ["30°・45°・60°の三角比を図から再構成できる。", "特別な角の値を計算に使える。"],
        concepts: [
          {
            title: "2つの基本図形から値を作る",
            body: [
              "45°は辺の比が 1:1:√2 の直角二等辺三角形を使います。",
              "30°と60°は一辺2の正三角形を半分にして、辺の比 1:√3:2 の直角三角形を使います。",
            ],
            formulas: [
              "sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3",
              "sin 45° = cos 45° = 1/√2, tan 45° = 1",
              "sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3",
            ],
          },
        ],
        example: {
          title: "例題: sin 60° と tan 30° を求める",
          problem: "辺の比 1:√3:2 を使う。",
          steps: [
            { expression: "sin 60° = √3/2", note: "60°の向かい側が √3、斜辺が2です。" },
            { expression: "tan 30° = 1/√3", note: "30°の向かい側が1、となり側が √3 です。" },
            { expression: "= √3/3", note: "必要なら分母を有理化できます。" },
          ],
        },
        practice: {
          title: "練習: 特別な角の値を使う",
          problem: "30°・45°・60°の基本図形を思い出して答えます。",
          steps: [
            { prompt: "cos 60° を求めてください。", answers: ["1/2"] },
            { prompt: "sin 45° を求めてください。", answers: ["1/√2", "√2/2"] },
            { prompt: "tan 60° を求めてください。", answers: ["√3"] },
          ],
          hint: "45°は 1:1:√2、30°・60°は 1:√3:2 の三角形を使います。",
        },
        summary: [
          "特別な角の値は、2つの基本三角形から作り直せる。",
          "丸暗記ではなく、辺の比と三角比の定義を組み合わせる。",
        ],
      },
      {
        key: "obtuse-angle-trig",
        title: "鈍角の三角比",
        description: "0°から180°まで角を広げ、sin・cos・tan の符号を理解します。",
        goals: [
          "第2象限で sin は正、cos と tan は負になることを説明できる。",
          "180°−θ の三角比を鋭角 θ の値から求められる。",
        ],
        concepts: [
          {
            title: "単位円で符号を見る",
            body: [
              "角 θ の終辺と単位円の交点を (x,y) とすると cos θ=x、sin θ=y とみなせます。",
              "90°<θ<180°では x<0、y>0 なので cos は負、sin は正、tan=sin/cos は負です。",
            ],
            formulas: ["sin(180° − θ) = sin θ", "cos(180° − θ) = −cos θ", "tan(180° − θ) = −tan θ"],
          },
        ],
        example: {
          title: "例題: 120°の三角比を求める",
          problem: "120° = 180° − 60° を使う。",
          steps: [
            { expression: "sin 120° = sin 60° = √3/2", note: "sin は第2象限でも正です。" },
            { expression: "cos 120° = −cos 60° = −1/2", note: "cos は第2象限で負です。" },
            { expression: "tan 120° = −tan 60° = −√3", note: "tan も第2象限で負です。" },
          ],
        },
        practice: {
          title: "練習: 150°の三角比",
          problem: "150° = 180° − 30° と考えます。",
          steps: [
            { prompt: "sin 150° を求めてください。", answers: ["1/2"] },
            { prompt: "cos 150° を求めてください。", answers: ["-√3/2", "−√3/2"] },
            {
              prompt: "tan 150° を求めてください。",
              answers: ["-1/√3", "−1/√3", "-√3/3", "−√3/3"],
            },
          ],
          hint: "第2象限では sin だけが正です。",
        },
        summary: [
          "90°<θ<180°では sin>0、cos<0、tan<0。",
          "180°−θ に直すと、鋭角の特別な値を利用できる。",
        ],
      },
    ],
  },
  {
    key: "trigonometric-relations",
    title: "三角比の相互関係",
    description: "sin・cos・tan の間にある関係を導き、1つの値から残りを求めます。",
    lessons: [
      {
        key: "tan-from-sin-cos",
        title: "tan θ = sin θ / cos θ",
        description: "三角比の定義を割り算して、tan と sin・cos の関係を導きます。",
        goals: ["tan θ=sin θ/cos θ を定義から導ける。", "sin と cos から tan を求められる。"],
        concepts: [
          {
            title: "共通する斜辺を消す",
            body: [
              "sin と cos はどちらも斜辺を分母にもつため、sin÷cos を計算すると斜辺が消えます。",
            ],
            formulas: ["tan θ = sin θ / cos θ"],
          },
        ],
        example: {
          title: "例題: sin θ=3/5、cos θ=4/5 から tan θ を求める",
          problem: "tan θ = sin θ / cos θ を使う。",
          steps: [
            { expression: "tan θ = (3/5)/(4/5)", note: "sin と cos をそのまま代入します。" },
            { expression: "= (3/5)·(5/4)", note: "分数の割り算を逆数の掛け算にします。" },
            { expression: "= 3/4", note: "5が約分されます。" },
          ],
        },
        practice: {
          title: "練習: sin と cos から tan を作る",
          problem: "sin θ=5/13、cos θ=12/13 とします。",
          steps: [
            {
              prompt: "tan θ を割り算の形で書いてください。",
              answers: ["(5/13)/(12/13)", "5/13÷12/13"],
            },
            { prompt: "tan θ を求めてください。", answers: ["5/12"] },
          ],
          hint: "tan=sin/cos なので、分母どうしの13が消えます。",
        },
        summary: [
          "tan θ は sin θ を cos θ で割ったもの。",
          "3つの三角比を別々の暗記事項にせず、定義から関係を作れる。",
        ],
      },
      {
        key: "pythagorean-trig",
        title: "sin² θ + cos² θ = 1",
        description: "三平方の定理を辺の比で割り、三角比の基本関係を導きます。",
        goals: [
          "sin²θ+cos²θ=1 を三平方の定理から導ける。",
          "sin または cos の値から残りを求められる。",
        ],
        concepts: [
          {
            title: "三平方の定理を斜辺²で割る",
            body: [
              "向かい側を a、となり側を b、斜辺を c とすると a²+b²=c² です。両辺を c² で割ると三角比の式になります。",
            ],
            formulas: ["sin² θ + cos² θ = 1"],
          },
        ],
        example: {
          title: "例題: sin θ=3/5 のとき cos θ を求める",
          problem: "0°<θ<90° とする。",
          steps: [
            { expression: "(3/5)² + cos² θ = 1", note: "sin²+cos²=1 に代入します。" },
            { expression: "cos² θ = 1 − 9/25 = 16/25", note: "cos² θ だけを残します。" },
            { expression: "cos θ = 4/5", note: "鋭角なので cos θ>0 を選びます。" },
          ],
        },
        practice: {
          title: "練習: cos から sin を求める",
          problem: "0°<θ<90°、cos θ=5/13 とします。",
          steps: [
            { prompt: "sin² θ を求めてください。", answers: ["144/169"] },
            { prompt: "sin θ を求めてください。", answers: ["12/13"] },
          ],
          hint: "sin² θ=1−25/169 です。鋭角なので正の平方根を取ります。",
        },
        summary: [
          "sin²θ+cos²θ=1 は三平方の定理から得られる。",
          "平方根を取るときは角の範囲から符号を決める。",
        ],
      },
      {
        key: "trig-from-one-ratio",
        title: "1つの三角比から残りを求める",
        description: "角の範囲と相互関係を組み合わせ、sin・cos・tan をそろえます。",
        goals: [
          "角の範囲から三角比の符号を決められる。",
          "基本関係を順に使って残りの三角比を求められる。",
        ],
        concepts: [
          {
            title: "平方の式では符号が消える",
            body: [
              "sin²+cos²=1 から平方根を取ると ± が生じます。最後に角の範囲を見て正負を決めます。",
              "tan は sin/cos で求めると符号も自動的に確認できます。",
            ],
          },
        ],
        example: {
          title: "例題: cos θ=−3/5、90°<θ<180°",
          problem: "sin θ と tan θ を求める。",
          steps: [
            { expression: "sin² θ = 1 − 9/25 = 16/25", note: "sin²+cos²=1 を使います。" },
            { expression: "sin θ = 4/5", note: "第2象限では sin が正なので +4/5 です。" },
            { expression: "tan θ = (4/5)/(−3/5) = −4/3", note: "tan=sin/cos を使います。" },
          ],
        },
        practice: {
          title: "練習: 第2象限で残りを求める",
          problem: "sin θ=5/13、90°<θ<180° とします。",
          steps: [
            { prompt: "cos θ を求めてください。", answers: ["-12/13", "−12/13"] },
            { prompt: "tan θ を求めてください。", answers: ["-5/12", "−5/12"] },
          ],
          hint: "第2象限では cos と tan が負です。",
        },
        summary: [
          "平方根を取った後の符号は角の範囲で決める。",
          "sin と cos がそろったら tan=sin/cos を使う。",
        ],
      },
    ],
  },
  {
    key: "sine-cosine-laws",
    title: "正弦定理・余弦定理",
    description: "三角形の辺と角を結ぶ2つの定理を導き、条件に応じて使い分けます。",
    lessons: [
      {
        key: "sine-law",
        title: "正弦定理",
        description: "高さを2通りに表すことで、辺と向かい合う角の正弦の関係を導きます。",
        goals: [
          "a/sin A=b/sin B=c/sin C を説明できる。",
          "1組の辺と角から別の辺や角を求められる。",
        ],
        concepts: [
          {
            title: "辺は向かい合う角の sin と対応する",
            body: [
              "三角形ABCで、辺a,b,cはそれぞれ角A,B,Cの向かい側です。対応を崩さず比例式を立てます。",
            ],
            formulas: ["a/sin A = b/sin B = c/sin C"],
          },
        ],
        example: {
          title: "例題: A=30°、B=45°、a=4 のとき b を求める",
          problem: "a/sin A=b/sin B を使う。",
          steps: [
            { expression: "4/sin 30° = b/sin 45°", note: "a とA、b とBを対応させます。" },
            { expression: "4/(1/2) = b/(√2/2)", note: "特別な角の値を代入します。" },
            { expression: "b = 4√2", note: "比例式を解きます。" },
          ],
        },
        practice: {
          title: "練習: 正弦定理で辺を求める",
          problem: "A=30°、B=60°、a=6 のとき b を求めます。",
          steps: [
            {
              prompt: "比例式を書いてください。",
              answers: ["6/(1/2)=b/(√3/2)", "6/sin30=b/sin60"],
            },
            { prompt: "b を求めてください。", answers: ["6√3"] },
          ],
          hint: "b=6·sin60°/sin30° として計算できます。",
        },
        summary: [
          "正弦定理では、辺とその向かい合う角を必ず組にする。",
          "『辺と向かいの角』の組が1つ分かっていると使いやすい。",
        ],
      },
      {
        key: "cosine-law",
        title: "余弦定理",
        description: "高さと射影を使って三平方の定理を整理し、3辺と1角の関係を導きます。",
        goals: [
          "a²=b²+c²−2bc cos A を図から説明できる。",
          "2辺とその間の角から残りの辺を求められる。",
        ],
        concepts: [
          {
            title: "三平方の定理を一般の三角形へ広げる",
            body: [
              "角Aが90°なら cos A=0 なので、余弦定理は a²=b²+c² となり三平方の定理に一致します。",
            ],
            formulas: ["a² = b² + c² − 2bc cos A"],
          },
        ],
        example: {
          title: "例題: b=5、c=7、A=60° のとき a を求める",
          problem: "a²=b²+c²−2bc cos A を使う。",
          steps: [
            { expression: "a² = 5² + 7² − 2·5·7·cos 60°", note: "Aをはさむ2辺が b,c です。" },
            { expression: "= 25 + 49 − 70·(1/2)", note: "cos60°=1/2 を代入します。" },
            { expression: "= 39", note: "右辺を整理します。" },
            { expression: "a = √39", note: "辺の長さなので正の平方根を取ります。" },
          ],
        },
        practice: {
          title: "練習: 2辺とその間の角から残りの辺を求める",
          problem: "b=3、c=5、A=60° とします。",
          steps: [
            { prompt: "a² を求めてください。", answers: ["19"] },
            { prompt: "a を求めてください。", answers: ["√19"] },
          ],
          hint: "a²=9+25−2·3·5·1/2 です。",
        },
        summary: [
          "余弦定理は2辺とその間の角から残りの辺を求めるときに使える。",
          "90°では三平方の定理に戻る。",
        ],
      },
      {
        key: "law-selection",
        title: "正弦定理と余弦定理の使い分け",
        description: "与えられた辺と角の組から、どちらの定理を使うと未知量へ届くか判断します。",
        goals: ["問題の条件から使う定理を選べる。", "既知量と未知量の対応を式に整理できる。"],
        concepts: [
          {
            title: "正弦定理は向かい合う組、余弦定理は3辺と1角",
            body: [
              "辺と向かいの角の組が1つあり、別の辺または角を求めたいなら正弦定理を候補にします。",
              "2辺とその間の角、または3辺が分かっているなら余弦定理を候補にします。",
            ],
          },
        ],
        example: {
          title: "例題: 条件から定理を選ぶ",
          problem: "a=5、b=7、C=60° のとき c を求める。",
          steps: [
            { expression: "既知: 2辺 a,b とその間の角 C", note: "C をはさむ辺が a,b です。" },
            { expression: "使う定理: 余弦定理", note: "2辺とその間の角から第3辺を求める形です。" },
            { expression: "c² = a² + b² − 2ab cos C", note: "未知の c が左辺になる式を選びます。" },
          ],
        },
        practice: {
          title: "練習: 使う定理を判断する",
          problem: "それぞれ最初に使う定理を答えます。",
          steps: [
            { prompt: "A=30°、B=45°、a=6 から b を求めるときは？", answers: ["正弦定理"] },
            { prompt: "a=4、b=6、C=120° から c を求めるときは？", answers: ["余弦定理"] },
          ],
          hint: "向かい合う辺と角の既知の組があるかを先に見ます。",
        },
        summary: [
          "既知量の配置を図に書くと定理を選びやすい。",
          "定理名を暗記するだけでなく、未知量を含む式が作れるか確認する。",
        ],
      },
    ],
  },
  {
    key: "figure-measurement",
    title: "図形の計量",
    description: "三角比と定理を面積、三角形の決定、測量の問題へ利用します。",
    lessons: [
      {
        key: "triangle-area",
        title: "三角比を使う三角形の面積",
        description: "高さを b sin A と表して、2辺とその間の角から面積を求めます。",
        goals: ["S=1/2 bc sin A を底辺×高さから導ける。", "2辺とその間の角から面積を求められる。"],
        concepts: [
          {
            title: "高さを sin で表す",
            body: ["辺cを底辺にすると、辺bの底辺に垂直な成分が高さ b sin A になります。"],
            formulas: ["S = (1/2)bc sin A"],
          },
        ],
        example: {
          title: "例題: 2辺6,8、間の角30°の三角形の面積",
          problem: "S=1/2·6·8·sin30° を計算する。",
          steps: [
            { expression: "S = (1/2)·6·8·sin 30°", note: "2辺とその間の角を公式へ入れます。" },
            { expression: "= 24·(1/2)", note: "sin30°=1/2 です。" },
            { expression: "= 12", note: "面積は12です。" },
          ],
        },
        practice: {
          title: "練習: 2辺と間の角から面積を求める",
          problem: "2辺が4と6、その間の角が60°です。",
          steps: [
            { prompt: "面積の式を書いてください。", answers: ["1/2*4*6*√3/2", "1/2·4·6·√3/2"] },
            { prompt: "面積を求めてください。", answers: ["6√3"] },
          ],
          hint: "sin60°=√3/2 を使います。",
        },
        summary: ["三角形の面積公式は底辺×高さ÷2から導ける。", "選んだ角をはさむ2辺を掛ける。"],
      },
      {
        key: "solve-triangle",
        title: "三角形の辺と角を順に求める",
        description: "正弦定理・余弦定理と内角の和を組み合わせ、未知の辺と角を求めます。",
        goals: ["最初に求めやすい未知量を選べる。", "複数の定理を順に使って三角形を解ける。"],
        concepts: [
          {
            title: "一度に全部求めようとしない",
            body: [
              "まず既知量だけで使える定理を選び、未知量を1つ増やします。その結果を次の式へ使います。",
              "角が2つ分かれば、最後の角は A+B+C=180° で求められます。",
            ],
          },
        ],
        example: {
          title: "例題: A=30°、B=60°、a=4 の三角形",
          problem: "C と b を求める。",
          steps: [
            { expression: "C = 180° − 30° − 60° = 90°", note: "内角の和から C を先に求めます。" },
            {
              expression: "4/sin30° = b/sin60°",
              note: "a,A の組が分かっているので正弦定理を使います。",
            },
            { expression: "b = 4√3", note: "特別な角の値を代入して解きます。" },
          ],
        },
        practice: {
          title: "練習: 角を補ってから正弦定理を使う",
          problem: "A=45°、B=90°、a=5 のとき C と b を求めます。",
          steps: [
            { prompt: "C を求めてください。", answers: ["45", "45°"] },
            { prompt: "b を求めてください。", answers: ["5√2"] },
          ],
          hint: "C=45°です。5/sin45°=b/sin90° を使います。",
        },
        summary: [
          "既知量だけで作れる式から未知量を1つずつ増やす。",
          "内角の和、正弦定理、余弦定理を必要に応じてつなぐ。",
        ],
      },
      {
        key: "height-distance",
        title: "高さ・距離を三角比で測る",
        description: "直接測りにくい高さや距離を直角三角形に置き換え、tan や sin で求めます。",
        goals: ["実際の状況から直角三角形を作れる。", "既知の辺と角から適切な三角比を選べる。"],
        concepts: [
          {
            title: "測量では図を単純化する",
            body: [
              "水平距離と仰角が分かる高さの問題では、水平距離がとなり側、高さが向かい側になるため tan が直接使えます。",
              "観測点の高さがある場合は、最後にその高さを足します。",
            ],
          },
        ],
        example: {
          title: "例題: 建物まで20m、仰角45°",
          problem: "目の高さを無視して建物の高さを求める。",
          steps: [
            { expression: "tan45° = 高さ/20", note: "向かい側/となり側なので tan を使います。" },
            { expression: "1 = 高さ/20", note: "tan45°=1 を代入します。" },
            { expression: "高さ = 20m", note: "両辺に20を掛けます。" },
          ],
        },
        practice: {
          title: "練習: 仰角60°から高さを求める",
          problem: "塔までの水平距離が10m、塔の頂点への仰角が60°です。目の高さは無視します。",
          steps: [
            { prompt: "使う三角比を答えてください。", answers: ["tan", "tan60", "tan60°"] },
            { prompt: "塔の高さを求めてください。", answers: ["10√3", "10√3m"] },
          ],
          hint: "tan60°=高さ/10 です。",
        },
        summary: [
          "状況を直角三角形へ置き換える。",
          "求めたい辺と既知の辺がどの組かを見て sin・cos・tan を選ぶ。",
        ],
      },
    ],
  },
];
