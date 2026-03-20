import type { RowSelectionOptions } from "ag-grid-enterprise";

export const commonDefaultColDef = {
  width: 140,
  sortable: true,
  resizable: true,
  filterParams: {
    buttons: ["reset", "apply"],
  },
};

export const commonSingleRowSelection: RowSelectionOptions = {
  mode: "singleRow",
  checkboxes: false,
  enableClickSelection: true,
};

export const commonMultiRowSelection: RowSelectionOptions = {
  mode: "multiRow",
  checkboxes: true,
  enableClickSelection: true,
};