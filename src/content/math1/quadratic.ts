import type { MathUnit } from "./types";

export const quadraticUnits: MathUnit[] = [
  {
    key: "quadratic-graphs",
    title: "二次関数とグラフ",
    description: "y=ax² の基本形から平行移動、平方完成まで進み、式から放物線の形を読み取ります。",
    lessons: [
      {
        key: "basic-parabola",
        title: "y = ax² のグラフ",
        description: "係数 a の符号と大きさから、放物線の向きと広がりを読み取ります。",
        goals: ["a の符号から上に開くか下に開くか判断できる。", "a の絶対値とグラフの広がりの関係を説明できる。"],
        concepts: [
          {
            title: "原点を頂点とする放物線",
            body: [
              "y=ax² は x と −x で同じ y になるため、y軸について対称です。",
              "a>0 なら上に開き、a<0 なら下に開きます。|a| が大きいほど同じ x に対する |y| が大きくなり、グラフは細く見えます。",
            ],
            formulas: ["y = ax²  (a ≠ 0)"],
          },
        ],
        example: {
          title: "例題: y=2x² の特徴を調べる",
          problem: "a=2 の符号と値からグラフを考える。",
          steps: [
            { expression: "a = 2 > 0", note: "正なので放物線は上に開きます。" },
            { expression: "頂点: (0,0)", note: "y=ax² の基本形は原点が頂点です。" },
            { expression: "x=±1 のとき y=2", note: "左右対称な点 (1,2),(-1,2) を通ります。" },
          ],
        },
        practice: {
          title: "練習: y=−3x² の特徴",
          problem: "y=−3x² について答えます。",
          steps: [
            { prompt: "上に開く・下に開くのどちらですか。", answers: ["下に開く"] },
            { prompt: "頂点を書いてください。", answers: ["(0,0)", "0,0"] },
            { prompt: "x=2 のとき y を求めてください。", answers: ["-12", "−12"] },
          ],
          hint: "a<0 なら下に開きます。y=−3·2² を計算します。",
        },
        summary: ["y=ax² は y軸対称で、頂点は原点。", "a の符号が開く向き、|a| が広がりを決める。"],
      },
      {
        key: "vertex-form",
        title: "y = a(x − p)² + q のグラフ",
        description: "基本放物線を平行移動した形から、頂点と軸を直接読み取ります。",
        goals: ["頂点 (p,q) と軸 x=p を式から読める。", "y=ax² からの平行移動としてグラフを説明できる。"],
        concepts: [
          {
            title: "かっこの中は符号を逆に読む",
            body: [
              "y=a(x−p)²+q は y=ax² を右に p、上に q だけ平行移動した形です。",
              "(x−p)² が0になる x=p のとき、y=q になるので頂点は (p,q) です。",
            ],
            formulas: ["y = a(x − p)² + q  →  頂点 (p,q), 軸 x=p"],
          },
        ],
        example: {
          title: "例題: y=2(x−3)²−5 の頂点と軸",
          problem: "式の形から読み取る。",
          steps: [
            { expression: "p=3, q=−5", note: "x−3 と末尾の −5 を読み取ります。" },
            { expression: "頂点 (3,−5)", note: "頂点は (p,q) です。" },
            { expression: "軸 x=3", note: "放物線は頂点を通る縦の直線について対称です。" },
          ],
        },
        practice: {
          title: "練習: 頂点と軸を読み取る",
          problem: "y=−(x+2)²+4 とします。",
          steps: [
            { prompt: "p を求めてください。", answers: ["-2", "−2"] },
            { prompt: "頂点を書いてください。", answers: ["(-2,4)", "(−2,4)", "-2,4", "−2,4"] },
            { prompt: "軸を書いてください。", answers: ["x=-2", "x=−2"] },
          ],
          hint: "x+2 は x−(−2) と見ます。",
        },
        summary: ["y=a(x−p)²+q の頂点は (p,q)、軸は x=p。", "かっこの中の符号をそのまま頂点の x 座標にしない。"],
      },
      {
        key: "completing-square",
        title: "平方完成",
        description: "ax²+bx+c を a(x−p)²+q の形へ変形し、頂点を読み取れるようにします。",
        goals: ["x²+bx の部分を完全平方にできる。", "一般形から頂点形式へ途中式を追って変形できる。"],
        concepts: [
          {
            title: "x の係数の半分を使う",
            body: ["x²+bx では、b/2 を使って (x+b/2)² を作ります。追加した平方分は同じ式の中で引いて値を保ちます。"],
            formulas: ["x² + bx = (x + b/2)² − (b/2)²"],
          },
        ],
        example: {
          title: "例題: y=x²−6x+5 を平方完成する",
          problem: "x²−6x+5 を (x−p)²+q に直す。",
          steps: [
            { expression: "x² − 6x + 5", note: "x の係数 −6 の半分は −3 です。" },
            { expression: "= (x−3)² − 9 + 5", note: "(x−3)²=x²−6x+9 なので、余分な9を引きます。" },
            { expression: "= (x−3)² − 4", note: "定数項を整理します。" },
            { expression: "頂点 (3,−4)", note: "頂点形式から読み取れます。" },
          ],
        },
        practice: {
          title: "練習: x²+4x−1 を平方完成する",
          problem: "x²+4x−1 を変形します。",
          steps: [
            { prompt: "完全平方のかっこを書いてください。", answers: ["(x+2)²", "(x+2)^2"] },
            { prompt: "平方完成した式を書いてください。", answers: ["(x+2)²-5", "(x+2)^2-5"] },
            { prompt: "頂点を書いてください。", answers: ["(-2,-5)", "(−2,−5)", "-2,-5", "−2,−5"] },
          ],
          hint: "4の半分は2です。(x+2)²=x²+4x+4 を使います。",
        },
        summary: ["x の係数の半分を使って完全平方を作る。", "加えた定数を同時に引き、式の値を変えない。"],
      },
    ],
  },
  {
    key: "quadratic-extrema",
    title: "最大・最小",
    description: "頂点と定義域を使って二次関数の最大値・最小値を求め、文章題にも利用します。",
    lessons: [
      {
        key: "quadratic-extrema-all-real",
        title: "定義域が実数全体の最大・最小",
        description: "頂点形式から放物線の最も高い点・低い点を読み取ります。",
        goals: ["a の符号から最大・最小のどちらをもつか判断できる。", "頂点の y 座標を最大値・最小値として読める。"],
        concepts: [
          {
            title: "頂点が極値を与える",
            body: ["y=a(x−p)²+q では (x−p)²≥0 です。a>0 なら a(x−p)²≥0 なので y≥q、a<0 なら y≤q です。"],
            formulas: ["a>0: 最小値 q (x=p)", "a<0: 最大値 q (x=p)"] },
        ],
        example: {
          title: "例題: y=2(x−1)²−3 の最小値",
          problem: "x はすべての実数を動く。",
          steps: [
            { expression: "(x−1)² ≥ 0", note: "平方は必ず0以上です。" },
            { expression: "2(x−1)² ≥ 0", note: "2は正なので不等号の向きは変わりません。" },
            { expression: "y ≥ −3", note: "両辺から3を引いた形です。" },
            { expression: "x=1 のとき最小値 −3", note: "平方が0になる頂点で等号が成立します。" },
          ],
        },
        practice: {
          title: "練習: 下に開く放物線の最大値",
          problem: "y=−3(x+2)²+7、xは実数全体です。",
          steps: [
            { prompt: "最大・最小のどちらがありますか。", answers: ["最大", "最大値"] },
            { prompt: "その値を求めてください。", answers: ["7"] },
            { prompt: "そのときの x を求めてください。", answers: ["-2", "−2"] },
          ],
          hint: "−3(x+2)²≤0 なので y≤7 です。",
        },
        summary: ["定義域が実数全体なら頂点で最大または最小になる。", "a>0 は最小、a<0 は最大。"],
      },
      {
        key: "quadratic-extrema-interval",
        title: "定義域が区間の最大・最小",
        description: "頂点が区間内にあるかを確認し、端点と頂点の値を比較します。",
        goals: ["頂点が定義域に含まれるか判断できる。", "端点と頂点の候補を比較して最大・最小を決められる。"],
        concepts: [
          { title: "候補は頂点と端点", body: ["区間に制限があると、頂点が範囲外の場合があります。まず軸 x=p と定義域の位置関係を見ます。", "頂点が範囲内なら頂点と両端、範囲外なら両端の値を比較します。"] },
        ],
        example: {
          title: "例題: y=(x−1)²−2、−1≤x≤3",
          problem: "最大値と最小値を求める。",
          steps: [
            { expression: "頂点 x=1 は区間内", note: "−1≤1≤3 なので頂点を候補に含めます。" },
            { expression: "y(1)=−2", note: "頂点で最小候補です。" },
            { expression: "y(−1)=2, y(3)=2", note: "両端の値を計算します。" },
            { expression: "最小値 −2、最大値 2", note: "3つの候補を比較します。" },
          ],
        },
        practice: {
          title: "練習: 頂点と端点を比べる",
          problem: "y=−(x−2)²+5、0≤x≤3 とします。",
          steps: [
            { prompt: "頂点の y の値を求めてください。", answers: ["5"] },
            { prompt: "x=0 のときの y を求めてください。", answers: ["1"] },
            { prompt: "最大値と最小値を『最大,最小』の順に書いてください。", answers: ["5,1", "5，1"] },
          ],
          hint: "x=3 のとき y=4 も候補です。5,1,4 を比べます。",
        },
        summary: ["定義域が区間なら、頂点の位置を最初に確認する。", "最大・最小は端点と範囲内の頂点を比較して決める。"],
      },
      {
        key: "quadratic-extrema-application",
        title: "二次関数の最大・最小の文章題",
        description: "数量を x で表し、二次関数を作って最適な値を求めます。",
        goals: ["文章から二次関数と定義域を作れる。", "最大・最小の結果を問題の意味に戻して答えられる。"],
        concepts: [
          { title: "式より先に変数と範囲を決める", body: ["長さや個数を x と置いたら、負にならないなど現実の条件から定義域を決めます。", "作った二次関数を平方完成し、数学上の最大・最小が実際の範囲でも使えるか確認します。"] },
        ],
        example: {
          title: "例題: 周の長さ20の長方形の最大面積",
          problem: "一辺を x、もう一辺を 10−x とする。",
          steps: [
            { expression: "0 < x < 10", note: "2辺が正になる範囲です。" },
            { expression: "S=x(10−x)=−x²+10x", note: "面積を二次関数で表します。" },
            { expression: "=−(x−5)²+25", note: "平方完成します。" },
            { expression: "x=5 のとき最大面積25", note: "頂点が定義域内なので最大値25です。" },
          ],
        },
        practice: {
          title: "練習: 和が12の2数の積を最大にする",
          problem: "正の2数を x と 12−x とします。",
          steps: [
            { prompt: "積 P を x の式で書いてください。", answers: ["x(12-x)", "-x²+12x", "−x²+12x"] },
            { prompt: "平方完成した式を書いてください。", answers: ["-(x-6)²+36", "−(x−6)²+36"] },
            { prompt: "積の最大値を求めてください。", answers: ["36"] },
          ],
          hint: "P=−x²+12x=−(x−6)²+36 です。",
        },
        summary: ["文章題では変数の定義域を必ず書く。", "最大・最小を求めた後、元の数量として意味のある答えか確認する。"],
      },
    ],
  },
  {
    key: "quadratic-equations-graphs",
    title: "二次方程式とグラフ",
    description: "二次方程式の解と放物線のx軸との交点を結び付け、解の公式と判別式を扱います。",
    lessons: [
      {
        key: "quadratic-roots-graph",
        title: "二次方程式の解とx軸との交点",
        description: "f(x)=0 の解が y=f(x) と x軸の交点の x 座標になることを理解します。",
        goals: ["二次方程式の解とグラフの交点を対応付けられる。", "因数分解した式から交点を求められる。"],
        concepts: [
          { title: "x軸上では y=0", body: ["y=f(x) のグラフがx軸と交わる点では y=0 です。したがって f(x)=0 を解けば交点の x 座標が分かります。"], formulas: ["f(x)=0 の解 ⇔ y=f(x) と x軸の交点の x 座標"] },
        ],
        example: {
          title: "例題: y=x²−5x+6 と x軸の交点",
          problem: "x²−5x+6=0 を解く。",
          steps: [
            { expression: "x²−5x+6=0", note: "x軸との交点なので y=0 とします。" },
            { expression: "(x−2)(x−3)=0", note: "左辺を因数分解します。" },
            { expression: "x=2,3", note: "積が0なのでどちらかの因数が0です。" },
            { expression: "交点 (2,0),(3,0)", note: "解を x 座標へ戻します。" },
          ],
        },
        practice: {
          title: "練習: x軸との交点を求める",
          problem: "y=x²+x−6 とします。",
          steps: [
            { prompt: "y=0 とした方程式を因数分解してください。", answers: ["(x+3)(x-2)=0", "(x-2)(x+3)=0"] },
            { prompt: "2つの x 座標を書いてください。", answers: ["-3,2", "−3,2", "2,-3", "2,−3"] },
          ],
          hint: "x²+x−6=(x+3)(x−2) です。",
        },
        summary: ["x軸との交点では y=0。", "二次方程式の実数解の個数は、x軸との交点の個数と一致する。"],
      },
      {
        key: "quadratic-formula",
        title: "二次方程式の解の公式",
        description: "ax²+bx+c=0 を平方完成し、解の公式を導いて利用します。",
        goals: ["解の公式を平方完成から導ける。", "因数分解しにくい二次方程式を解の公式で解ける。"],
        concepts: [
          { title: "一般の二次方程式を平方完成する", body: ["a≠0 とし、まず a で割って x² の係数を1にしてから平方完成します。"], formulas: ["x = (−b ± √(b² − 4ac)) / (2a)"] },
        ],
        example: {
          title: "例題: 2x²−3x−1=0 を解く",
          problem: "a=2,b=−3,c=−1 を解の公式へ代入する。",
          steps: [
            { expression: "x = (3 ± √((−3)²−4·2·(−1)))/(2·2)", note: "−b=3 であることに注意します。" },
            { expression: "= (3 ± √17)/4", note: "根号の中を 9+8=17 と計算します。" },
          ],
        },
        practice: {
          title: "練習: 解の公式を使う",
          problem: "x²−4x−1=0 を解きます。",
          steps: [
            { prompt: "根号の中 b²−4ac を求めてください。", answers: ["20"] },
            { prompt: "解を求めてください。", answers: ["2±√5", "2+√5,2-√5", "2−√5,2+√5"] },
          ],
          hint: "x=(4±√20)/2=(4±2√5)/2 です。",
        },
        summary: ["解の公式は平方完成を一般の係数で行った結果。", "b の符号と 2a の分母を特に確認する。"],
      },
      {
        key: "discriminant",
        title: "判別式と実数解の個数",
        description: "解の公式の根号の中に注目し、グラフとx軸の位置関係を判断します。",
        goals: ["D=b²−4ac の符号から実数解の個数を判断できる。", "解の個数をx軸との交点の個数として説明できる。"],
        concepts: [
          { title: "平方根の中が実数解を決める", body: ["解の公式では √D が現れます。D>0なら異なる2実数解、D=0なら重解1つ、D<0なら実数解なしです。"], formulas: ["D = b² − 4ac", "D>0: 2実数解, D=0: 重解, D<0: 実数解なし"] },
        ],
        example: {
          title: "例題: x²−4x+5=0 の実数解の個数",
          problem: "D を計算して判断する。",
          steps: [
            { expression: "D=(−4)²−4·1·5", note: "a=1,b=−4,c=5 を代入します。" },
            { expression: "=16−20=−4", note: "D<0 です。" },
            { expression: "実数解なし", note: "グラフはx軸と交わりません。" },
          ],
        },
        practice: {
          title: "練習: 判別式で交点数を判断する",
          problem: "2x²+4x+2=0 とします。",
          steps: [
            { prompt: "D を求めてください。", answers: ["0"] },
            { prompt: "実数解の個数を答えてください。", answers: ["1", "1個", "重解"] },
          ],
          hint: "D=4²−4·2·2=0 です。",
        },
        summary: ["判別式は解の公式の根号の中 b²−4ac。", "D の符号は放物線とx軸の交点数に対応する。"],
      },
    ],
  },
  {
    key: "quadratic-inequalities",
    title: "二次不等式",
    description: "二次関数のグラフの符号を読み、二次不等式の解を区間として求めます。",
    lessons: [
      {
        key: "quadratic-inequality-two-roots",
        title: "2つの実数解をもつ二次不等式",
        description: "x軸との2交点を境に、放物線が上か下かを読んで解を決めます。",
        goals: ["二次方程式の2解を境界として求められる。", "a の符号から正負になる区間を判断できる。"],
        concepts: [
          { title: "まず =0 の境界を求める", body: ["f(x)>0 や f(x)<0 を考えるとき、先に f(x)=0 の解を求めます。", "a>0 の放物線なら2根の外側で正、内側で負です。a<0 なら逆になります。"] },
        ],
        example: {
          title: "例題: x²−5x+6<0 を解く",
          problem: "境界の2根を求め、グラフの下側を読む。",
          steps: [
            { expression: "x²−5x+6=(x−2)(x−3)", note: "まず =0 の解を求めます。" },
            { expression: "境界: x=2,3", note: "x軸との交点です。" },
            { expression: "a=1>0 なので2と3の間で y<0", note: "上に開く放物線は2交点の間でx軸より下です。" },
            { expression: "2<x<3", note: "不等号が < なので境界は含みません。" },
          ],
        },
        practice: {
          title: "練習: 上に開く放物線の正の範囲",
          problem: "x²+x−6≥0 を解きます。",
          steps: [
            { prompt: "境界となる2つの解を書いてください。", answers: ["-3,2", "−3,2", "2,-3", "2,−3"] },
            { prompt: "不等式の解を書いてください。", answers: ["x≤-3,x≥2", "x≤−3,x≥2", "x≤-3またはx≥2", "x≤−3またはx≥2"] },
          ],
          hint: "上に開くので0以上になるのは2根の外側です。≥ なので根も含みます。",
        },
        summary: ["二次不等式は =0 の解を境界としてグラフの符号を読む。", "上に開く場合は外側が正、内側が負。"],
      },
      {
        key: "quadratic-inequality-special-cases",
        title: "重解・実数解なしの場合の二次不等式",
        description: "x軸に接する場合と交わらない場合を、平方の形や判別式から判断します。",
        goals: ["重解のとき符号が根の両側で変わらないことを説明できる。", "実数解がない場合に式全体の符号を判断できる。"],
        concepts: [
          { title: "交点がないと符号は変わらない", body: ["放物線がx軸と交わらなければ、連続したグラフはずっとx軸の同じ側にあります。", "a>0 で D<0 なら常に正、a<0 で D<0 なら常に負です。重解では接点だけ0になります。"] },
        ],
        example: {
          title: "例題: x²−4x+4≥0 を解く",
          problem: "(x−2)²≥0 と見る。",
          steps: [
            { expression: "x²−4x+4=(x−2)²", note: "完全平方に因数分解できます。" },
            { expression: "(x−2)² ≥ 0", note: "平方はすべての実数で0以上です。" },
            { expression: "解: すべての実数", note: "x=2では0、それ以外では正です。" },
          ],
        },
        practice: {
          title: "練習: 常に正の二次式",
          problem: "x²+2x+5>0 を解きます。",
          steps: [
            { prompt: "平方完成してください。", answers: ["(x+1)²+4", "(x+1)^2+4"] },
            { prompt: "不等式の解を答えてください。", answers: ["すべての実数", "全実数"] },
          ],
          hint: "(x+1)²+4 は最小でも4なので常に正です。",
        },
        summary: ["重解では接するだけなので符号は根の前後で変わらない。", "実数解なしなら a の符号から二次式全体の符号を判断できる。"],
      },
      {
        key: "quadratic-inequality-application",
        title: "二次不等式の文章題",
        description: "条件を二次不等式に表し、解の区間を実際の数量の範囲へ戻します。",
        goals: ["文章の条件を積や面積の二次不等式にできる。", "数学上の解と現実の定義域の共通部分を答えられる。"],
        concepts: [
          { title: "最後に定義域と交わす", body: ["文章題では x が長さや個数を表すため、二次不等式の解をそのまま答えられないことがあります。", "最初に定義域を書き、最後に不等式の解との共通部分を取ります。"] },
        ],
        example: {
          title: "例題: x(10−x)≥21 を満たす長さ",
          problem: "0<x<10 の範囲で解く。",
          steps: [
            { expression: "x(10−x) ≥ 21", note: "面積などの条件をそのまま式にします。" },
            { expression: "x²−10x+21 ≤ 0", note: "左辺を上に開く二次式へ整理します。" },
            { expression: "(x−3)(x−7) ≤ 0", note: "境界は x=3,7 です。" },
            { expression: "3≤x≤7", note: "2根の間が0以下で、定義域にも含まれます。" },
          ],
        },
        practice: {
          title: "練習: 積が32以上になる範囲",
          problem: "0<x<12 で x(12−x)≥32 を解きます。",
          steps: [
            { prompt: "整理した二次不等式を書いてください。", answers: ["x²-12x+32≤0", "x²−12x+32≤0"] },
            { prompt: "因数分解してください。", answers: ["(x-4)(x-8)≤0", "(x−4)(x−8)≤0"] },
            { prompt: "x の範囲を求めてください。", answers: ["4≤x≤8"] },
          ],
          hint: "x²−12x+32=(x−4)(x−8) です。",
        },
        summary: ["文章の条件を二次不等式へ翻訳する。", "解いた後に、長さ・個数などの定義域と共通部分を取る。"],
      },
    ],
  },
];
