import type { SxProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { useField, useFormikContext } from "formik";

interface FormikDatePickerProps {
    name: string;
    label: string;
    helperText?: string;
    required?: boolean;
    minDate?: Dayjs;
    maxDate?: Dayjs;
    error?: boolean;
    sx?: SxProps;
    disabled?: boolean;
    format?: string;
}

export default function FormikDatePicker({
    name,
    label,
    helperText,
    minDate,
    maxDate,
    error,
    sx,
    disabled = false,
    format = "YYYY-MM-DD",
}: FormikDatePickerProps) {
    const { setFieldValue } = useFormikContext<any>();
    const [field] = useField(name);

    // Force Dayjs format from Formik field value
    const value: Dayjs | null =
        field.value && dayjs(field.value).isValid() ? dayjs(field.value) : null;

    return (
        <DatePicker
            disabled={disabled}
            label={label}
            value={value}
            onChange={(newValue) => {
                setFieldValue(name, newValue ? newValue.toISOString() : null);
            }}
            minDate={minDate}
            maxDate={maxDate}
            format={format}
            slotProps={{
                textField: {
                    fullWidth: true,
                    error: error,
                    helperText: helperText,
                    sx: sx,
                },
            }}
        />
    );
}
