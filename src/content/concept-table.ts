export type ConceptTableRow = {
  header?: string;
  cells: string[];
};

export type ConceptTable = {
  caption?: string;
  headers?: string[];
  rows: ConceptTableRow[];
};
