export interface CommonDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleClose?: (event: any, reason: string) => void;
}
export type AutoCompleteOption = { label: string; value: string };