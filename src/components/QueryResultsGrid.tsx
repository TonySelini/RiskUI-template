import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import type { RiskQueryResponse } from "../hooks/useRiskQuery";

interface QueryResultsGridProps {
    data?: RiskQueryResponse;
    isLoading: boolean;
}

const QueryResultsGrid = ({ data, isLoading }: QueryResultsGridProps) => {
    if (isLoading) return <div>Loading...</div>;
    if (!data) return <Typography color="text.secondary">Please run a query to see results.</Typography>;
    if (!data.data.length) return <Typography color="text.secondary">No results found.</Typography>;

    return (
        <TableContainer>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Account ID</TableCell>
                        <TableCell>Symbol ID</TableCell>
                        <TableCell>Native Contract ID</TableCell>
                        <TableCell align="right">Risk Qty</TableCell>
                        <TableCell align="right">Hedge Qty Actual</TableCell>
                        <TableCell align="right">Hedge Qty Target</TableCell>
                        <TableCell>Hostname</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.data.map((row, index) => (
                        <TableRow key={`${row.account_id}-${row.symbol_id}-${index}`}>
                            <TableCell>{row.account_id}</TableCell>
                            <TableCell>{row.symbol_id}</TableCell>
                            <TableCell>{row.native_contract_id}</TableCell>
                            <TableCell align="right">{row.risk_qty}</TableCell>
                            <TableCell align="right">{row.hedge_qty_actual}</TableCell>
                            <TableCell align="right">{row.hedge_qty_target}</TableCell>
                            <TableCell>{row.hostname || "-"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {data.count} result{data.count === 1 ? "" : "s"}
            </Typography>
        </TableContainer>
    );
};

export default QueryResultsGrid;