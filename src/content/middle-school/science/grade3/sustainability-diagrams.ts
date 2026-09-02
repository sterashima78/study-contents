import type { DiagramElement, DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";
const point = (x: number, y: number): DiagramPoint => ({ x, y });
const label = (x: number, y: number, text: string, color = BASE): DiagramElement => ({
  kind: "label",
  at: point(x, y),
  text,
  color,
});
const arrow = (
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color = BASE,
): DiagramElement => ({ kind: "arrow", from: point(fromX, fromY), to: point(toX, toY), color });
const line = (
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  color = BASE,
): DiagramElement => ({ kind: "segment", from: point(fromX, fromY), to: point(toX, toY), color });

const energyConversionScene = (): DiagramScene => ({
  width: 760,
  height: 330,
  ariaLabel:
    "電池の化学エネルギーが電気エネルギーを経てモーターの運動エネルギーへ変換され、一部は熱や音へ変わる流れを示す模式図。",
  responsive: { minWidth: 660, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(120, 155), radius: 48, color: GREEN },
    label(120, 150, "電池", GREEN),
    label(120, 180, "化学", GREEN),
    arrow(175, 155, 300, 155, BLUE),
    label(235, 125, "電気", BLUE),
    { kind: "circle", center: point(365, 155), radius: 48, color: BLUE },
    label(365, 150, "モーター", BLUE),
    label(365, 180, "運動", BLUE),
    arrow(420, 155, 550, 155, ORANGE),
    label(485, 125, "目的出力", ORANGE),
    { kind: "circle", center: point(620, 155), radius: 48, color: ORANGE },
    label(620, 150, "羽根", ORANGE),
    label(620, 180, "運動", ORANGE),
    arrow(365, 205, 365, 275, PURPLE),
    label(430, 280, "熱・音などにも変換", PURPLE),
    label(380, 45, "エネルギーは形を変えて利用される", BASE),
  ],
});

const efficiencyScene = (): DiagramScene => ({
  width: 760,
  height: 330,
  ariaLabel:
    "入力100ジュールが目的の出力70ジュールと熱・音など30ジュールへ分かれ、総量100ジュールが保たれる例を示す模式図。",
  responsive: { minWidth: 660, allowHorizontalScroll: true },
  elements: [
    label(110, 70, "入力 100 J", BLUE),
    line(80, 105, 300, 105, BLUE),
    line(80, 105, 80, 180, BLUE),
    line(300, 105, 300, 180, BLUE),
    line(80, 180, 300, 180, BLUE),
    arrow(310, 140, 430, 140, BASE),
    label(555, 70, "目的 70 J", GREEN),
    line(470, 105, 620, 105, GREEN),
    line(470, 105, 470, 180, GREEN),
    line(620, 105, 620, 180, GREEN),
    line(470, 180, 620, 180, GREEN),
    label(555, 220, "その他 30 J", ORANGE),
    line(470, 245, 620, 245, ORANGE),
    label(250, 280, "総量: 70 + 30 = 100 J", PURPLE),
    label(530, 280, "効率: 70%", PURPLE),
  ],
});

const heatTransferScene = (): DiagramScene => ({
  width: 760,
  height: 340,
  ariaLabel: "熱伝導、対流、放射の三つの熱の伝わり方を並べて比較する模式図。",
  responsive: { minWidth: 660, allowHorizontalScroll: true },
  elements: [
    label(125, 45, "熱伝導", BLUE),
    line(55, 145, 200, 145, BLUE),
    { kind: "circle", center: point(70, 145), radius: 14, color: ORANGE },
    { kind: "circle", center: point(110, 145), radius: 14, color: ORANGE },
    { kind: "circle", center: point(150, 145), radius: 14, color: BLUE },
    { kind: "circle", center: point(190, 145), radius: 14, color: BLUE },
    arrow(75, 195, 185, 195, ORANGE),
    label(125, 235, "隣へ伝わる", BASE),
    label(380, 45, "対流", GREEN),
    { kind: "circle", center: point(380, 155), radius: 75, color: GREEN },
    arrow(345, 190, 345, 110, ORANGE),
    arrow(415, 110, 415, 190, BLUE),
    label(380, 250, "液体・気体が動く", BASE),
    label(625, 45, "放射", PURPLE),
    { kind: "circle", center: point(570, 145), radius: 28, color: ORANGE },
    arrow(605, 120, 690, 80, PURPLE),
    arrow(610, 145, 705, 145, PURPLE),
    arrow(605, 170, 690, 210, PURPLE),
    label(630, 250, "空間を越える", BASE),
  ],
});

const resourcesScene = (): DiagramScene => ({
  width: 800,
  height: 360,
  ariaLabel:
    "水力、火力、原子力、太陽光などのエネルギー資源を、安定性、資源、環境影響など同じ観点で比較することを示す表形式の模式図。",
  responsive: { minWidth: 700, allowHorizontalScroll: true },
  elements: [
    label(110, 55, "選択肢", BASE),
    label(310, 55, "安定性", BLUE),
    label(485, 55, "資源条件", GREEN),
    label(665, 55, "環境影響", ORANGE),
    line(45, 80, 755, 80, BASE),
    line(210, 40, 210, 315, BASE),
    line(395, 40, 395, 315, BASE),
    line(575, 40, 575, 315, BASE),
    label(110, 120, "水力", BLUE),
    label(110, 170, "火力", ORANGE),
    label(110, 220, "原子力", PURPLE),
    label(110, 270, "太陽光", GREEN),
    label(310, 120, "条件で比較", BASE),
    label(485, 120, "条件で比較", BASE),
    label(665, 120, "条件で比較", BASE),
    label(400, 335, "一つの指標だけで決めない", PURPLE),
  ],
});

const materialLifecycleScene = (): DiagramScene => ({
  width: 800,
  height: 350,
  ariaLabel:
    "原料、製造、使用、回収、再使用・再生利用、廃棄という材料のライフサイクルを示す模式図。",
  responsive: { minWidth: 700, allowHorizontalScroll: true },
  elements: [
    label(90, 160, "原料", GREEN),
    arrow(135, 155, 225, 155, BASE),
    label(270, 160, "製造", BLUE),
    arrow(315, 155, 405, 155, BASE),
    label(450, 160, "使用", ORANGE),
    arrow(495, 155, 585, 155, BASE),
    label(630, 160, "回収", PURPLE),
    arrow(630, 195, 520, 260, GREEN),
    label(420, 285, "再使用・再生利用", GREEN),
    arrow(365, 260, 170, 200, GREEN),
    arrow(675, 190, 720, 260, ORANGE),
    label(710, 290, "廃棄", ORANGE),
    label(390, 60, "同じ範囲で比較する", BASE),
  ],
});

const ecosystemScene = (): DiagramScene => ({
  width: 800,
  height: 390,
  ariaLabel:
    "生産者、消費者、分解者と環境の間で物質が循環し、複数の食う食われる関係が食物網を作ることを示す模式図。",
  responsive: { minWidth: 700, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(150, 140), radius: 55, color: GREEN },
    label(150, 135, "生産者", GREEN),
    label(150, 165, "植物など", GREEN),
    { kind: "circle", center: point(410, 105), radius: 55, color: ORANGE },
    label(410, 100, "消費者", ORANGE),
    label(410, 130, "動物など", ORANGE),
    { kind: "circle", center: point(650, 225), radius: 55, color: PURPLE },
    label(650, 220, "分解者", PURPLE),
    label(650, 250, "微生物など", PURPLE),
    { kind: "circle", center: point(315, 285), radius: 48, color: BLUE },
    label(315, 280, "環境", BLUE),
    label(315, 305, "無機物", BLUE),
    arrow(205, 125, 350, 110, ORANGE),
    arrow(455, 145, 610, 200, PURPLE),
    arrow(605, 260, 365, 285, BLUE),
    arrow(270, 260, 175, 190, GREEN),
    arrow(205, 165, 600, 220, PURPLE),
    label(400, 360, "食物網 + 物質循環", BASE),
  ],
});

const environmentDataScene = (): DiagramScene => ({
  width: 800,
  height: 360,
  ariaLabel:
    "複数年の環境データを同じ調査方法で比較し、相関があっても原因を即断せず追加資料を確認する流れを示す模式図。",
  responsive: { minWidth: 700, allowHorizontalScroll: true },
  elements: [
    line(70, 285, 365, 285, BASE),
    line(70, 285, 70, 75, BASE),
    line(85, 250, 135, 230, BLUE),
    line(135, 230, 185, 205, BLUE),
    line(185, 205, 235, 180, BLUE),
    line(235, 180, 285, 150, BLUE),
    line(285, 150, 345, 110, BLUE),
    label(200, 55, "長期データ", BLUE),
    arrow(390, 180, 505, 180, BASE),
    label(565, 90, "関係の可能性", GREEN),
    label(565, 145, "≠ 原因の断定", ORANGE),
    label(565, 205, "他要因", PURPLE),
    label(565, 255, "追加資料", PURPLE),
    label(410, 325, "同じ方法・同じ期間で比較", BASE),
  ],
});

const disasterRecordsScene = (): DiagramScene => ({
  width: 800,
  height: 370,
  ariaLabel:
    "過去の災害地点を地形や気象など複数資料へ重ねて分析し、現在の避難判断には最新の公的情報を使うことを示す模式図。",
  responsive: { minWidth: 700, allowHorizontalScroll: true },
  elements: [
    label(130, 60, "過去記録", ORANGE),
    label(130, 125, "地形・地質", GREEN),
    label(130, 190, "気象資料", BLUE),
    arrow(205, 60, 345, 150, BASE),
    arrow(205, 125, 345, 150, BASE),
    arrow(205, 190, 345, 150, BASE),
    { kind: "circle", center: point(405, 150), radius: 62, color: PURPLE },
    label(405, 145, "関連付け", PURPLE),
    label(405, 175, "科学的分析", PURPLE),
    arrow(470, 150, 615, 150, BASE),
    label(680, 125, "過去の", GREEN),
    label(680, 155, "特徴を理解", GREEN),
    line(70, 275, 730, 275, BASE),
    label(235, 320, "現在の行動判断", ORANGE),
    arrow(330, 315, 470, 315, ORANGE),
    label(590, 320, "最新の公的情報", ORANGE),
  ],
});

const sustainabilityScene = (): DiagramScene => ({
  width: 820,
  height: 390,
  ariaLabel:
    "エネルギー、物質、生態系、自然災害の四領域の科学的根拠を共通指標で比較し、限界や価値判断を明示して持続可能な社会の提案へつなげる模式図。",
  responsive: { minWidth: 720, allowHorizontalScroll: true },
  elements: [
    { kind: "circle", center: point(130, 100), radius: 48, color: BLUE },
    label(130, 105, "エネルギー", BLUE),
    { kind: "circle", center: point(130, 245), radius: 48, color: PURPLE },
    label(130, 250, "物質", PURPLE),
    { kind: "circle", center: point(360, 100), radius: 48, color: GREEN },
    label(360, 105, "生態系", GREEN),
    { kind: "circle", center: point(360, 245), radius: 48, color: ORANGE },
    label(360, 250, "自然災害", ORANGE),
    arrow(180, 100, 515, 170, BASE),
    arrow(180, 245, 515, 190, BASE),
    arrow(410, 100, 515, 170, BASE),
    arrow(410, 245, 515, 190, BASE),
    { kind: "circle", center: point(585, 180), radius: 72, color: BASE },
    label(585, 155, "共通指標", BASE),
    label(585, 185, "根拠・限界", BASE),
    label(585, 215, "価値を区別", BASE),
    arrow(655, 180, 760, 180, GREEN),
    label(750, 135, "提案", GREEN),
    label(750, 230, "持続可能性", GREEN),
    label(410, 350, "多面的・総合的に考察して判断", PURPLE),
  ],
});

const mapping: Record<string, DiagramScene> = {
  "energy-conversion-chain": energyConversionScene(),
  "energy-conservation-efficiency": efficiencyScene(),
  "heat-transfer": heatTransferScene(),
  "energy-resources-comparison": resourcesScene(),
  "radiation-basics": resourcesScene(),
  "science-technology-development": energyConversionScene(),
  "natural-artificial-materials": materialLifecycleScene(),
  "plastics-properties": materialLifecycleScene(),
  "materials-reuse-recycling": materialLifecycleScene(),
  "material-choice-life-cycle": materialLifecycleScene(),
  "producers-consumers-decomposers": ecosystemScene(),
  "food-web-balance": ecosystemScene(),
  "material-cycle-microbes": ecosystemScene(),
  "environment-survey-data": environmentDataScene(),
  "climate-change-ecosystems": environmentDataScene(),
  "invasive-species-conservation": environmentDataScene(),
  "regional-disaster-records": disasterRecordsScene(),
  "natural-benefits-and-risks": disasterRecordsScene(),
  "environmental-tech-tradeoffs": sustainabilityScene(),
  "sustainability-evidence-comparison": sustainabilityScene(),
  "sustainable-society-decision": sustainabilityScene(),
};

export const getMiddleScience3SustainabilityLessonDiagrams = (
  lessonKey: string,
): MathLessonDiagrams | undefined => {
  const scene = mapping[lessonKey];
  return scene ? { rule: scene, example: scene } : undefined;
};
