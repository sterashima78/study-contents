import type { MathUnit } from "../math1/types";

export const geometryPropertyUnits: MathUnit[] = [
  {
    key: "triangle-properties",
    title: "三角形の性質",
    description: "辺の比や三角形の中心に注目し、図形の中に成り立つ関係を説明します。",
    lessons: [
      {
        key: "angle-bisector",
        title: "角の二等分線と辺の比",
        description: "角の二等分線が向かい側の辺を、隣り合う辺の長さの比に分ける性質を使います。",
        goals: ["角の二等分線定理を図と対応付けられる。", "辺の比から未知の長さを求められる。"],
        concepts: [
          {
            title: "二等分した角の両側の辺の比を見る",
            body: [
              "△ABCで∠Aの二等分線がBCとDで交わるとき、BDとDCの比はABとACの比に等しくなります。",
              "どの角を二等分しているかを先に確認し、その角をはさむ2辺と向かい側の2部分を対応させます。",
            ],
            formulas: ["BD : DC = AB : AC"],
          },
        ],
        example: {
          title: "例題: 二等分線で分けられた辺",
          problem: "△ABCでADが∠Aの二等分線。AB=6, AC=9, BC=10。BDを求める。",
          steps: [
            { expression: "BD : DC = 6 : 9 = 2 : 3", note: "角の二等分線定理で向かい側の辺の比を作ります。" },
            { expression: "BC = BD + DC = 10", note: "BC全体は比2:3の5等分に対応します。" },
            { expression: "BD = 10 × 2/5 = 4", note: "2に対応する部分なので4です。" },
          ],
        },
        practice: {
          title: "練習: 比から長さを求める",
          problem: "△ABCでADが∠Aの二等分線。AB=4, AC=6, BC=15。BDを求める。",
          steps: [
            { prompt: "BD:DC を書いてください。", answers: ["4:6", "2:3"] },
            { prompt: "BCを比の合計で分ける式を書いてください。", answers: ["15*2/5", "15×2/5", "6"] },
            { prompt: "BDを書いてください。", answers: ["6"] },
          ],
          hint: "AB:AC = 2:3 なので、BC=15を2:3に分けます。",
        },
        summary: ["角の二等分線は向かい側の辺を隣接2辺の比に分ける。", "比の合計と辺全体の長さを使って各部分を求める。"],
      },
      {
        key: "triangle-centers",
        title: "三角形の外心・内心・重心",
        description: "垂直二等分線、角の二等分線、中線の交点が持つ意味を整理します。",
        goals: ["外心・内心・重心を作る線を区別できる。", "各中心の幾何的な意味を説明できる。"],
        concepts: [
          {
            title: "どの線の交点かで中心を見分ける",
            body: [
              "外心は3辺の垂直二等分線の交点で、3頂点から等距離です。",
              "内心は3つの角の二等分線の交点で、3辺から等距離です。重心は3本の中線の交点で、中線を頂点側から2:1に分けます。",
            ],
            formulas: ["重心Gでは AG : GD = 2 : 1"],
          },
        ],
        example: {
          title: "例題: 重心が中線を分ける",
          problem: "△ABCの中線AD上に重心Gがあり、AD=12。AGを求める。",
          steps: [
            { expression: "AG : GD = 2 : 1", note: "重心は中線を頂点側から2:1に分けます。" },
            { expression: "ADは3等分に対応", note: "2+1=3なので中線全体を3つ分として考えます。" },
            { expression: "AG = 12 × 2/3 = 8", note: "頂点側の2つ分なので8です。" },
          ],
        },
        practice: {
          title: "練習: 重心の比を使う",
          problem: "中線AD=18、重心をGとする。GDを求める。",
          steps: [
            { prompt: "AG:GD を書いてください。", answers: ["2:1"] },
            { prompt: "GDに対応する割合を書いてください。", answers: ["1/3"] },
            { prompt: "GDを書いてください。", answers: ["6"] },
          ],
          hint: "GDは中線全体の3分の1です。",
        },
        summary: ["外心は頂点から等距離、内心は辺から等距離。", "重心は3中線の交点で中線を2:1に分ける。"],
      },
      {
        key: "ceva-menelaus",
        title: "チェバの定理とメネラウスの定理",
        description: "三角形の辺上の比を掛け、3本の線の交点や3点の一直線性を判定します。",
        goals: ["チェバとメネラウスの使い分けを説明できる。", "辺の比の積から未知の比を求められる。"],
        concepts: [
          {
            title: "共点ならチェバ、一直線ならメネラウス",
            body: [
              "三角形の3頂点から引いた3本の線が1点で交わる条件を調べるときはチェバの定理を使います。",
              "3辺またはその延長上の3点が一直線上にある条件を調べるときはメネラウスの定理を使います。",
            ],
            formulas: [
              "チェバ: (BD/DC)(CE/EA)(AF/FB) = 1",
              "メネラウス: (BD/DC)(CE/EA)(AF/FB) = 1（長さの比で扱う形）",
            ],
          },
        ],
        example: {
          title: "例題: チェバの定理で未知の比を求める",
          problem: "AD, BE, CFが1点で交わる。BD/DC=2/3, CE/EA=3/4, AF/FB=x。xを求める。",
          steps: [
            { expression: "(2/3)(3/4)x = 1", note: "3本が共点なのでチェバの定理を使います。" },
            { expression: "(1/2)x = 1", note: "既知の比を先に掛けます。" },
            { expression: "x = 2", note: "両辺を1/2で割ると2です。" },
          ],
        },
        practice: {
          title: "練習: 比の積を1にする",
          problem: "AD, BE, CFが1点で交わる。BD/DC=1/2, CE/EA=4/3, AF/FB=x。xを求める。",
          steps: [
            { prompt: "チェバの式を書いてください。", answers: ["1/2*4/3*x=1", "(1/2)(4/3)x=1"] },
            { prompt: "xの係数を書いてください。", answers: ["2/3"] },
            { prompt: "xを書いてください。", answers: ["3/2", "1.5"] },
          ],
          hint: "(1/2)×(4/3)=2/3です。",
        },
        summary: ["3本の線が共点ならチェバ、3点が一直線ならメネラウス。", "対応する3つの辺の比の積が1になる形を使う。"],
      },
    ],
  },
  {
    key: "circle-properties",
    title: "円の性質",
    description: "円周角、接線、弦の交点などに現れる角度と長さの関係を利用します。",
    lessons: [
      {
        key: "inscribed-angle",
        title: "円周角の性質",
        description: "同じ弧に対する円周角や、直径に対する円周角の性質を使います。",
        goals: ["同じ弧に対する円周角が等しいことを使える。", "直径に対する円周角が90°になることを使える。"],
        concepts: [
          {
            title: "見る弧が同じなら円周角も同じ",
            body: [
              "円周上の点P,Qから同じ弧ABを見ると、∠APBと∠AQBは等しくなります。",
              "弧ABが半円、つまりABが直径なら中心角は180°なので円周角は90°です。",
            ],
            formulas: ["円周角 = 対応する中心角の 1/2"],
          },
        ],
        example: {
          title: "例題: 中心角から円周角を求める",
          problem: "弧ABに対する中心角∠AOB=120°。同じ弧ABに対する円周角∠APBを求める。",
          steps: [
            { expression: "中心角 = 120°", note: "同じ弧ABに対応する中心角を確認します。" },
            { expression: "円周角 = 120° ÷ 2", note: "円周角は対応する中心角の半分です。" },
            { expression: "= 60°", note: "したがって∠APB=60°です。" },
          ],
        },
        practice: {
          title: "練習: 円周角を求める",
          problem: "中心角∠AOB=150°と同じ弧ABを見る円周角を求める。",
          steps: [
            { prompt: "中心角の半分にする式を書いてください。", answers: ["150/2", "150÷2", "75"] },
            { prompt: "円周角を書いてください。", answers: ["75", "75°"] },
          ],
          hint: "円周角は中心角の2分の1です。",
        },
        summary: ["同じ弧を見る円周角は等しい。", "円周角は同じ弧に対する中心角の半分。"],
      },
      {
        key: "power-of-point",
        title: "方べきの定理",
        description: "1点から円へ引いた直線にできる線分の積が一定になる性質を使います。",
        goals: ["弦の交点や円外の点で方べきの式を作れる。", "線分の積から未知の長さを求められる。"],
        concepts: [
          {
            title: "同じ点から見た線分の積が等しい",
            body: [
              "円の内部で2本の弦AB, CDが点Pで交わるとき、PA·PBとPC·PDは等しくなります。",
              "円の外部の点Pから2本の割線を引く場合も、Pから近い交点までの長さ×遠い交点までの長さが等しくなります。",
            ],
            formulas: ["PA·PB = PC·PD"],
          },
        ],
        example: {
          title: "例題: 交わる弦の長さ",
          problem: "円内で弦ABとCDがPで交わり、PA=3, PB=8, PC=4。PDを求める。",
          steps: [
            { expression: "PA·PB = PC·PD", note: "交わる2本の弦なので方べきの定理を使います。" },
            { expression: "3 × 8 = 4 × PD", note: "分かっている長さを代入します。" },
            { expression: "PD = 24/4 = 6", note: "PDは6です。" },
          ],
        },
        practice: {
          title: "練習: 方べきで未知の長さを求める",
          problem: "PA=2, PB=9, PC=3のときPDを求める。",
          steps: [
            { prompt: "積の等式を書いてください。", answers: ["2*9=3*pd", "2×9=3×pd", "18=3pd"] },
            { prompt: "左辺の積を書いてください。", answers: ["18"] },
            { prompt: "PDを書いてください。", answers: ["6"] },
          ],
          hint: "2×9 = 3×PDです。",
        },
        summary: ["同じ点から円に引いた線分では積が一定になる。", "内点・外点の図に合わせて対応する線分を確認する。"],
      },
      {
        key: "tangent-circle",
        title: "接線と円の関係",
        description: "接線と半径の垂直、接弦定理、同一点から引いた接線の長さを使います。",
        goals: ["接点で半径と接線が垂直になることを使える。", "同一点から引いた2本の接線の長さが等しいことを使える。"],
        concepts: [
          {
            title: "接点では半径と接線が直交する",
            body: [
              "円の中心Oから接点Tへ引いた半径OTは、その点での接線に垂直です。",
              "円外の同じ点Pから接線PA, PBを引くと、PA=PBです。合同な直角三角形として説明できます。",
            ],
            formulas: ["PA = PB（同一点Pから引いた2本の接線）"],
          },
        ],
        example: {
          title: "例題: 接線の長さ",
          problem: "円外の点Pから接線PA, PBを引く。PA=7のときPBを求める。",
          steps: [
            { expression: "PA = PB", note: "同一点Pから同じ円へ引いた接線の長さは等しいです。" },
            { expression: "PB = 7", note: "PA=7をそのまま使います。" },
          ],
        },
        practice: {
          title: "練習: 2本の接線",
          problem: "円外の点Qから接線QC, QDを引く。QC=11のときQDを求める。",
          steps: [
            { prompt: "使う等式を書いてください。", answers: ["qc=qd", "QC=QD"] },
            { prompt: "QDを書いてください。", answers: ["11"] },
          ],
          hint: "同じ点Qから引いた2本の接線です。",
        },
        summary: ["接点で半径と接線は垂直。", "同じ円に同一点から引いた2本の接線の長さは等しい。"],
      },
    ],
  },
  {
    key: "spatial-geometry",
    title: "空間図形",
    description: "空間内の直線・平面の位置関係と、多面体の頂点・辺・面の関係を整理します。",
    lessons: [
      {
        key: "line-plane-relations",
        title: "直線と平面の位置関係",
        description: "空間内での平行・交差・ねじれの位置を区別します。",
        goals: ["2直線の位置関係を分類できる。", "直線と平面の平行・垂直を図から読み取れる。"],
        concepts: [
          {
            title: "空間では交わらず平行でもない2直線がある",
            body: [
              "同一平面上の2直線は、交わるか平行です。しかし空間では、同一平面上にないため交わらず平行でもない『ねじれの位置』があります。",
              "立体の辺だけを見るのではなく、2直線を同じ平面に含められるかを考えることが重要です。",
            ],
          },
        ],
        example: {
          title: "例題: 立方体の辺の位置関係",
          problem: "立方体ABCD-EFGHで、辺ABと辺CGの位置関係を答える。",
          steps: [
            { expression: "ABとCGは交わらない", note: "頂点を共有していません。" },
            { expression: "方向も同じではない", note: "ABは横方向、CGは奥行き方向の辺です。" },
            { expression: "ねじれの位置", note: "同一平面に含まれず、交わらず平行でもありません。" },
          ],
        },
        practice: {
          title: "練習: 位置関係を分類する",
          problem: "立方体ABCD-EFGHで、辺ABと辺EFの位置関係を答える。",
          steps: [
            { prompt: "2辺は交わるか答えてください。", answers: ["交わらない", "no"] },
            { prompt: "最終的な位置関係を答えてください。", answers: ["平行", "平行である"] },
          ],
          hint: "対応する上下の辺で、向きが同じです。",
        },
        summary: ["空間の2直線にはねじれの位置がある。", "交点の有無、方向、同一平面に含まれるかを順に確認する。"],
      },
      {
        key: "polyhedra-euler",
        title: "多面体とオイラーの多面体定理",
        description: "凸多面体の頂点・辺・面の個数に成り立つ関係を使います。",
        goals: ["頂点V・辺E・面Fを正しく数えられる。", "オイラーの多面体定理から未知の個数を求められる。"],
        concepts: [
          {
            title: "凸多面体ではV−E+Fが2になる",
            body: [
              "立方体や正四面体など穴のない凸多面体では、頂点数V、辺数E、面数Fの間に一定の関係があります。",
              "図で見えない辺や頂点も含めて数え、式に代入します。",
            ],
            formulas: ["V − E + F = 2"],
          },
        ],
        example: {
          title: "例題: 面の数を求める",
          problem: "ある凸多面体は頂点V=8、辺E=12。面Fの個数を求める。",
          steps: [
            { expression: "8 − 12 + F = 2", note: "オイラーの多面体定理に代入します。" },
            { expression: "F − 4 = 2", note: "定数部分を整理します。" },
            { expression: "F = 6", note: "面は6個です。立方体と一致します。" },
          ],
        },
        practice: {
          title: "練習: 辺の数を求める",
          problem: "凸多面体でV=6, F=5。辺Eを求める。",
          steps: [
            { prompt: "式を書いてください。", answers: ["6-e+5=2", "11-e=2"] },
            { prompt: "Eを書いてください。", answers: ["9"] },
          ],
          hint: "6−E+5=2を解きます。",
        },
        summary: ["凸多面体ではV−E+F=2。", "見えない要素も含めて頂点・辺・面を数える。"],
      },
    ],
  },
];
