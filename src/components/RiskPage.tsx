import { Paper, Stack, Typography } from "@mui/material";
import QueryResultsGrid from "./QueryResultsGrid";
import { QueryForm } from "./QueryForm";
import { useRiskQuery } from "../hooks/useRiskQuery";

export function RiskPage() {
    const { data, isLoading, runRiskQuery } = useRiskQuery();

    return (
        <Stack spacing={3}>
            <QueryForm isLoading={isLoading} onSubmit={runRiskQuery} />
            <Paper elevation={1} sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Query Results
                </Typography>
                <QueryResultsGrid data={data} isLoading={isLoading} />
            </Paper>
        </Stack>
    );
}