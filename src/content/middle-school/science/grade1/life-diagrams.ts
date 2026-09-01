import type { DiagramPoint, DiagramScene } from "../../../../lib/diagram";
import type { MathLessonDiagrams } from "../../../math1/diagrams";

const BASE = "#52606d";
const BLUE = "#2563eb";
const ORANGE = "#c2410c";
const GREEN = "#047857";
const PURPLE = "#7c3aed";
const point = (x: number, y: number): DiagramPoint => ({ x, y });

function observationScene(): DiagramScene {
  return {
    width: 560,
    height: 330,
    ariaLabel:
      "三つの生物を同じ観点で比較し、形、大きさ、生活場所などを観察記録へ整理する考え方を示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      { kind: "ellipse", center: point(100, 105), radiusX: 42, radiusY: 28, color: GREEN },
      { kind: "ellipse", center: point(280, 105), radiusX: 34, radiusY: 45, color: BLUE },
      { kind: "ellipse", center: point(460, 105), radiusX: 48, radiusY: 22, color: ORANGE },
      { kind: "label", at: point(100, 160), text: "生物A", color: GREEN, align: "middle" },
      { kind: "label", at: point(280, 170), text: "生物B", color: BLUE, align: "middle" },
      { kind: "label", at: point(460, 160), text: "生物C", color: ORANGE, align: "middle" },
      { kind: "segment", from: point(55, 220), to: point(505, 220), color: BASE },
      { kind: "label", at: point(95, 250), text: "形", color: BASE, align: "middle" },
      { kind: "label", at: point(230, 250), text: "大きさ", color: BASE, align: "middle" },
      { kind: "label", at: point(380, 250), text: "体のつくり", color: BASE, align: "middle" },
      { kind: "label", at: point(490, 250), text: "生活場所", color: BASE, align: "middle" },
      {
        kind: "label",
        at: point(280, 300),
        text: "同じ観点で比較する",
        color: PURPLE,
        align: "middle",
      },
    ],
  };
}

function classificationScene(): DiagramScene {
  return {
    width: 560,
    height: 340,
    ariaLabel:
      "分類の観点として背骨の有無を選び、背骨ありと背骨なしの二つの基準へ生物を分ける流れを示す図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      {
        kind: "label",
        at: point(280, 45),
        text: "観点: 背骨の有無",
        color: PURPLE,
        align: "middle",
      },
      { kind: "segment", from: point(280, 65), to: point(280, 115), color: BASE },
      { kind: "segment", from: point(130, 115), to: point(430, 115), color: BASE },
      { kind: "segment", from: point(130, 115), to: point(130, 155), color: BASE },
      { kind: "segment", from: point(430, 115), to: point(430, 155), color: BASE },
      {
        kind: "polygon",
        points: [point(60, 155), point(200, 155), point(200, 220), point(60, 220)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(360, 155), point(500, 155), point(500, 220), point(360, 220)],
        color: ORANGE,
      },
      { kind: "label", at: point(130, 185), text: "背骨あり", color: BLUE, align: "middle" },
      { kind: "label", at: point(430, 185), text: "背骨なし", color: ORANGE, align: "middle" },
      { kind: "label", at: point(130, 265), text: "魚・鳥・ヒト…", color: BLUE, align: "middle" },
      { kind: "label", at: point(430, 265), text: "昆虫・イカ…", color: ORANGE, align: "middle" },
      {
        kind: "label",
        at: point(280, 315),
        text: "観点と基準を変えると分類結果も変わり得る",
        color: GREEN,
        align: "middle",
      },
    ],
  };
}

function flowerScene(): DiagramScene {
  return {
    width: 560,
    height: 350,
    ariaLabel:
      "花の中心からめしべ、おしべ、花弁、がくが配置され、めしべの下部に子房と胚珠があることを示す模式図。",
    responsive: { minWidth: 480, allowHorizontalScroll: true },
    elements: [
      { kind: "ellipse", center: point(280, 145), radiusX: 150, radiusY: 85, color: ORANGE },
      { kind: "ellipse", center: point(280, 145), radiusX: 95, radiusY: 60, color: BLUE },
      { kind: "segment", from: point(280, 75), to: point(280, 220), color: GREEN },
      { kind: "ellipse", center: point(280, 235), radiusX: 42, radiusY: 30, color: GREEN },
      { kind: "point", x: 270, y: 235, radius: 5, color: PURPLE },
      { kind: "point", x: 290, y: 235, radius: 5, color: PURPLE },
      { kind: "label", at: point(305, 95), text: "めしべ", color: GREEN },
      { kind: "label", at: point(355, 135), text: "おしべ", color: BLUE },
      { kind: "label", at: point(420, 165), text: "花弁", color: ORANGE },
      { kind: "label", at: point(330, 255), text: "子房", color: GREEN },
      { kind: "label", at: point(280, 295), text: "胚珠 → 種子", color: PURPLE, align: "middle" },
      {
        kind: "label",
        at: point(280, 330),
        text: "外部形態の共通点・相違点を比べる",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

function plantClassificationScene(): DiagramScene {
  return {
    width: 600,
    height: 370,
    ariaLabel:
      "植物を種子をつくるか、胚珠が子房に包まれるか、葉脈の形などの基準で順に分類する模式図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "label", at: point(300, 35), text: "植物", color: GREEN, align: "middle" },
      { kind: "segment", from: point(300, 55), to: point(300, 95), color: BASE },
      { kind: "segment", from: point(120, 95), to: point(480, 95), color: BASE },
      { kind: "segment", from: point(120, 95), to: point(120, 125), color: BASE },
      { kind: "segment", from: point(480, 95), to: point(480, 125), color: BASE },
      { kind: "label", at: point(120, 150), text: "種子をつくる", color: BLUE, align: "middle" },
      { kind: "label", at: point(480, 150), text: "胞子をつくる", color: ORANGE, align: "middle" },
      { kind: "segment", from: point(120, 170), to: point(120, 210), color: BASE },
      { kind: "segment", from: point(45, 210), to: point(195, 210), color: BASE },
      { kind: "label", at: point(65, 245), text: "被子植物", color: PURPLE, align: "middle" },
      { kind: "label", at: point(180, 245), text: "裸子植物", color: GREEN, align: "middle" },
      { kind: "segment", from: point(65, 265), to: point(65, 305), color: BASE },
      { kind: "segment", from: point(20, 305), to: point(110, 305), color: BASE },
      { kind: "label", at: point(20, 340), text: "単子葉類", color: BLUE },
      { kind: "label", at: point(95, 340), text: "双子葉類", color: ORANGE },
      {
        kind: "label",
        at: point(405, 235),
        text: "分類基準を順に使う",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

function vertebrateScene(): DiagramScene {
  const names = ["魚類", "両生類", "爬虫類", "鳥類", "哺乳類"];
  return {
    width: 620,
    height: 330,
    ariaLabel:
      "脊椎動物を体表、呼吸、生活場所、子の生まれ方などの特徴から魚類、両生類、爬虫類、鳥類、哺乳類へ分類する図。",
    responsive: { minWidth: 520, allowHorizontalScroll: true },
    elements: [
      { kind: "label", at: point(310, 40), text: "脊椎動物", color: PURPLE, align: "middle" },
      { kind: "segment", from: point(310, 60), to: point(310, 105), color: BASE },
      { kind: "segment", from: point(70, 105), to: point(550, 105), color: BASE },
      ...names.flatMap((name, index) => {
        const x = 70 + index * 120;
        return [
          { kind: "segment" as const, from: point(x, 105), to: point(x, 150), color: BASE },
          {
            kind: "label" as const,
            at: point(x, 180),
            text: name,
            color: index % 2 === 0 ? BLUE : ORANGE,
            align: "middle" as const,
          },
        ];
      }),
      {
        kind: "label",
        at: point(310, 245),
        text: "体表・呼吸・生活場所・子の生まれ方など",
        color: GREEN,
        align: "middle",
      },
      {
        kind: "label",
        at: point(310, 290),
        text: "複数の特徴を根拠に分類する",
        color: BASE,
        align: "middle",
      },
    ],
  };
}

function invertebrateScene(): DiagramScene {
  return {
    width: 600,
    height: 340,
    ariaLabel:
      "無脊椎動物のうち節足動物は外骨格と節のあるあしをもち、軟体動物は節のあるあしをもたないという違いを比較する図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "label", at: point(300, 40), text: "無脊椎動物", color: PURPLE, align: "middle" },
      { kind: "segment", from: point(300, 60), to: point(300, 105), color: BASE },
      { kind: "segment", from: point(150, 105), to: point(450, 105), color: BASE },
      { kind: "segment", from: point(150, 105), to: point(150, 145), color: BASE },
      { kind: "segment", from: point(450, 105), to: point(450, 145), color: BASE },
      {
        kind: "polygon",
        points: [point(70, 145), point(230, 145), point(230, 230), point(70, 230)],
        color: BLUE,
      },
      {
        kind: "polygon",
        points: [point(370, 145), point(530, 145), point(530, 230), point(370, 230)],
        color: ORANGE,
      },
      { kind: "label", at: point(150, 170), text: "節足動物", color: BLUE, align: "middle" },
      {
        kind: "label",
        at: point(150, 205),
        text: "外骨格・節のあるあし",
        color: BLUE,
        align: "middle",
      },
      { kind: "label", at: point(450, 170), text: "軟体動物", color: ORANGE, align: "middle" },
      {
        kind: "label",
        at: point(450, 205),
        text: "節のあるあしをもたない",
        color: ORANGE,
        align: "middle",
      },
      {
        kind: "label",
        at: point(300, 285),
        text: "共通点と相違点を比べる",
        color: GREEN,
        align: "middle",
      },
    ],
  };
}

function searchKeyScene(): DiagramScene {
  return {
    width: 600,
    height: 390,
    ariaLabel:
      "未知の動物について背骨の有無、外骨格と節のあるあし、羽毛などの二者択一の基準を順にたどる検索表を示す図。",
    responsive: { minWidth: 500, allowHorizontalScroll: true },
    elements: [
      { kind: "label", at: point(300, 35), text: "未知の動物", color: PURPLE, align: "middle" },
      { kind: "segment", from: point(300, 55), to: point(300, 95), color: BASE },
      { kind: "label", at: point(300, 115), text: "背骨がある?", color: BASE, align: "middle" },
      { kind: "segment", from: point(165, 140), to: point(435, 140), color: BASE },
      { kind: "label", at: point(150, 170), text: "ない", color: ORANGE, align: "middle" },
      { kind: "label", at: point(450, 170), text: "ある", color: BLUE, align: "middle" },
      {
        kind: "label",
        at: point(150, 220),
        text: "外骨格・節のあるあし?",
        color: BASE,
        align: "middle",
      },
      { kind: "label", at: point(450, 220), text: "羽毛がある?", color: BASE, align: "middle" },
      { kind: "segment", from: point(150, 240), to: point(150, 275), color: BASE },
      { kind: "segment", from: point(450, 240), to: point(450, 275), color: BASE },
      { kind: "label", at: point(150, 305), text: "節足動物", color: ORANGE, align: "middle" },
      { kind: "label", at: point(450, 305), text: "鳥類", color: BLUE, align: "middle" },
      {
        kind: "label",
        at: point(300, 360),
        text: "基準を順にたどり、根拠を示して分類する",
        color: GREEN,
        align: "middle",
      },
    ],
  };
}

const diagrams: Record<string, MathLessonDiagrams> = {
  "organism-observation-viewpoints": { rule: observationScene(), example: observationScene() },
  "observation-tools-records": { rule: observationScene() },
  "classification-viewpoint-criteria": {
    rule: classificationScene(),
    example: classificationScene(),
  },
  "plant-basic-flower-structure": { rule: flowerScene(), example: flowerScene() },
  "seed-plants-angiosperm-gymnosperm": {
    rule: plantClassificationScene(),
    example: plantClassificationScene(),
  },
  "angiosperm-monocot-dicot-spores": {
    rule: plantClassificationScene(),
    example: plantClassificationScene(),
  },
  "vertebrate-invertebrate": { rule: classificationScene(), example: classificationScene() },
  "vertebrate-five-groups": { rule: vertebrateScene(), example: vertebrateScene() },
  "arthropod-characteristics": { rule: invertebrateScene(), example: invertebrateScene() },
  "mollusk-characteristics": { rule: invertebrateScene(), example: invertebrateScene() },
  "unknown-organism-classification": { rule: searchKeyScene(), example: searchKeyScene() },
  "classification-key": { rule: searchKeyScene(), example: searchKeyScene() },
};

export const getMiddleScience1LifeLessonDiagrams = (lessonKey: string) => diagrams[lessonKey];
