export interface Option {
  readonly value: string;
  readonly label: string;
}

export interface GroupedOption {
  readonly label: string;
  readonly options: readonly Option[];
}

const westernHerbs = [
  { value: "basil", label: "バジル" },
  { value: "rosemary", label: "ローズマリー" },
  { value: "thyme", label: "タイム" },
  { value: "oregano", label: "オレガノ" },
  { value: "sage", label: "セージ" },
  { value: "chives", label: "チャイブ" },
  { value: "tarragon", label: "タラゴン" },
];

const easternHerbs = [
  { value: "ginger", label: "生姜" },
  { value: "turmeric", label: "ウコン" },
  { value: "coriander", label: "コリアンダー" },
  { value: "bittermelon", label: "ゴーヤ" },
  { value: "lotus", label: "レンコン" },
];
const japaneseHerbs = [
  { value: "gennoshoko", label: "ゲンノショウコ" },
  { value: "senburi", label: "センブリ" },
  { value: "dokuon", label: "ドクダミ" },
];

export const groupedOptions: readonly GroupedOption[] = [
  {
    label: "西洋ハーブ",
    options: westernHerbs,
  },
  {
    label: "東洋ハーブ",
    options: easternHerbs,
  },
  {
    label: "和ハーブ",
    options: japaneseHerbs,
  },
];
