import { TextField, type TextFieldProps } from "@mui/material";
import {
    parseKMBValue,
    formatWithCommas,
    removeCommas,
    isValidtoFormatNumber,
} from "../../utils/numberFormatter";

type NumberInputProps = TextFieldProps & {
    value: string;
    handleChange:
    | React.Dispatch<React.SetStateAction<string>>
    | ((value: string) => void);
    handleIsFinished?: () => void;
};
const FormattedNumberInput = ({
    value,
    handleChange,
    handleIsFinished,
    ...props
}: NumberInputProps) => {
    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const newValue = event.target.value;
        const newValueWithoutComma = removeCommas(newValue);
        if (isValidtoFormatNumber(newValueWithoutComma)) {
            handleChange(newValueWithoutComma);
            handleIsFinished?.();
        }
    };

    const handleBlur = () => {
        handleIsFinished?.();
        const parsedValue = parseKMBValue(value.replace(/,/g, ""));
        if (parsedValue !== null) {
            handleChange(formatWithCommas(parsedValue));
        } else {
            handleChange("0"); // Reset to empty if invalid
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleBlur();
        }
    };

    return (
        <TextField
            sx={{
                // width: "45%",
                // marginTop: "0.3rem",
                "& .MuiInputBase-input": {
                    fontSize: 14,
                    height: "16x",
                    padding: "0px 6px",
                },
            }}
            variant="outlined"
            size="medium"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            {...props}
        />
    );
};
export default FormattedNumberInput;
