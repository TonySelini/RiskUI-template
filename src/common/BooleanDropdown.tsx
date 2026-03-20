import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { COLORS } from "../../utils/colors";

type BooleanDropdownProps = {
    label: string;
    name: string;

    value: boolean | null | undefined;
    onChange: (next: boolean) => void;

    error?: boolean;
    helperText?: string;

    sx?: any;

    trueLabel?: string;
    falseLabel?: string;

    trueIconColor?: string;
    falseIconColor?: string;
};

export const BooleanDropdown = ({
    label,
    name,
    value,
    onChange,
    error,
    helperText,
    sx,
    trueLabel = "True",
    falseLabel = "False",
    trueIconColor = COLORS.GREEN500,
    falseIconColor = COLORS.RED500,
}: BooleanDropdownProps) => {
    const options = [true, false] as const;
    const SelectedIcon =
        value === true
            ? CheckCircleIcon
            : value === false
                ? CancelIcon
                : null;

    const selectedIconColor =
        value === true ? trueIconColor : falseIconColor;
    return (
        <Autocomplete<(typeof options)[number]>
            disablePortal
            options={[...options]}
            value={value ?? false}
            onChange={(_e, v) => onChange(Boolean(v))}
            getOptionLabel={(opt) => (opt ? trueLabel : falseLabel)}
            renderOption={(props, opt) => (
                <li {...props}>
                    {opt ? (
                        <CheckCircleIcon sx={{ color: trueIconColor, height: 20, mr: 1 }} />
                    ) : (
                        <CancelIcon sx={{ color: falseIconColor, height: 20, mr: 1 }} />
                    )}
                    {opt ? trueLabel : falseLabel}
                </li>
            )}
            sx={sx}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    name={name}
                    error={error}
                    helperText={helperText}
                    slotProps={{
                        input: {
                            ...params.InputProps, // keep Autocomplete wiring + endAdornment
                            startAdornment: SelectedIcon ? (
                                <>
                                    <InputAdornment position="start">
                                        <SelectedIcon sx={{ color: selectedIconColor, height: 20 }} />
                                    </InputAdornment>
                                    {params.InputProps.startAdornment}
                                </>
                            ) : (
                                params.InputProps.startAdornment
                            ),
                        },
                    }}
                />
            )} />);
};