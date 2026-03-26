import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import { FormikProvider, useFormik } from "formik";
import { useMemo } from "react";
import * as Yup from "yup";
import FormikDatePicker from "../common/DatePicker";
import type { RiskQueryInput } from "../hooks/useRiskQuery";

const LIMIT_OPTIONS = [20, 50, 100, 200, 500, 1000] as const;

interface QueryFormProps {
    isLoading: boolean;
    onSubmit: (values: RiskQueryInput) => Promise<unknown> | unknown;
}

export function QueryForm({ isLoading, onSubmit }: QueryFormProps) {
    const nowTimeStamp = useMemo(() => dayjs(), []);

    const validationSchema = Yup.object({
        start_time: Yup.string().optional(),
        end_time: Yup.string()
            .optional()
            .test(
                "is-after-start-time",
                "End Time must be after Start Time",
                function (value) {
                    const { start_time } = this.parent;
                    if (!value || !start_time) return true;
                    const isAfter = dayjs(value).isAfter(dayjs(start_time));

                    return (
                        isAfter ||
                        this.createError({
                            message: "Cutoff Time must be after Start Time",
                        })
                    );
                }
            ),
    });

    const formik = useFormik({
        initialValues: {
            start_time: nowTimeStamp.startOf("day").toISOString(),
            end_time: "",
            account_num: "",
            symbol_id: "",
            limit: LIMIT_OPTIONS[0],
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            await onSubmit(values);
        },
        enableReinitialize: false,
    });

    return (
        <Paper elevation={1} sx={{ p: 3 }}>
            <Stack spacing={2}>
                <Typography variant="h6">Query Filters</Typography>

                <FormikProvider value={formik}>
                    <Box component="form" onSubmit={formik.handleSubmit}>
                        <Box
                            sx={{
                                display: "grid",
                                gap: 2,
                                gridTemplateColumns:
                                    "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
                                alignItems: "start",
                            }}
                        >
                            <FormikDatePicker
                                label="Start Date"
                                name="start_time"
                                error={formik.touched.start_time && Boolean(formik.errors.start_time)}

                            />
                            <FormikDatePicker
                                label="End Date"
                                name="end_time"
                                error={formik.touched.end_time && Boolean(formik.errors.end_time)}
                                helperText={
                                    formik.touched.end_time && formik.errors.end_time
                                        ? (formik.errors.end_time as string)
                                        : ""
                                }
                            />
                            <TextField
                                label="Account Number"
                                name="account_num"
                                size="medium"
                                value={formik.values.account_num}
                                onChange={formik.handleChange}
                                error={formik.touched.account_num && Boolean(formik.errors.account_num)}
                                helperText={
                                    formik.touched.account_num && formik.errors.account_num
                                        ? (formik.errors.account_num as string)
                                        : ""
                                }

                            />
                            <TextField
                                label="Symbol ID"
                                name="symbol_id"
                                size="medium"
                                value={formik.values.symbol_id}
                                onChange={formik.handleChange}
                                error={formik.touched.symbol_id && Boolean(formik.errors.symbol_id)}
                                helperText={
                                    formik.touched.symbol_id && formik.errors.symbol_id
                                        ? (formik.errors.symbol_id as string)
                                        : ""
                                }
                            />

                            <TextField
                                label="Limit"
                                name="limit"
                                size="medium"
                                select
                                value={formik.values.limit}
                                onChange={formik.handleChange}
                                error={formik.touched.limit && Boolean(formik.errors.limit)}
                                helperText={
                                    formik.touched.limit && formik.errors.limit
                                        ? (formik.errors.limit as string)
                                        : ""
                                }
                                slotProps={{ select: { native: true } }}
                            >
                                {LIMIT_OPTIONS.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </TextField>
                        </Box>
                        <Box component="div" sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <Button
                                type="submit"
                                variant="outlined"
                                disabled={isLoading}
                                sx={{ width: "100%", height: "30px", fontSize: "14px" }}
                            >
                                Run Query
                            </Button>
                        </Box>
                    </Box>
                </FormikProvider>


            </Stack>
        </Paper>
    );
}