import dayjs from "dayjs";
import { useCallback, useState } from "react";
import { getFromAPI } from "../api/commonRequest/getFromAPI";
import { toast } from "react-toastify";

export interface RiskQueryInput {
  start_time?: string | null;
  end_time?: string | null;
  limit?: number;
  account_num?: string;
  symbol_id?: string;
}

export interface RiskQueryRow {
  account_id: number;
  hedge_qty_actual: number;
  hedge_qty_target: number;
  hostname: string;
  native_contract_id: number;
  risk_qty: number;
  risk_valid_time_nanos_epoch: number;
  symbol_id: number;
}

export interface RiskQueryResponse {
  count: number;
  data: RiskQueryRow[];
  ok: boolean;
}

function toEpochNanos(value: string, boundary: "start" | "end") {
  const date =
    boundary === "start"
      ? dayjs(value).startOf("day")
      : dayjs(value).endOf("day");
  return (BigInt(date.valueOf()) * 1000000n).toString();
}

export function buildRiskQuery(input: RiskQueryInput) {
  const query = new URLSearchParams();

  // if (input.start_time) {
  //   query.set("start_nanos", toEpochNanos(input.start_time, "start"));
  // }

  // if (input.end_time) {
  //   query.set("end_nanos", toEpochNanos(input.end_time, "end"));
  // }

  if (input.account_num) {
    query.set("tanius_account_num", input.account_num);
  }

  if (input.symbol_id) {
    query.set("symbol_id", input.symbol_id);
  }

  if (typeof input.limit === "number") {
    query.set("limit", String(input.limit));
  }

  return query.toString();
}

// export const mockData: RiskQueryResponse = {
//   count: 17,
//   data: [
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 14114,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 2338,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 2328,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 2328,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: -9,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 2720,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: -8599,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 5711,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: -7391,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 1058,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: -10053,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 1061,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 1061,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: -4238,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "",
//       native_contract_id: 33000595,
//       risk_qty: 5850,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "TA-SGP-C-19",
//       native_contract_id: 33000595,
//       risk_qty: -927,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//     {
//       account_id: 70872,
//       hedge_qty_actual: 0,
//       hedge_qty_target: 0,
//       hostname: "TA-SGP-C-19",
//       native_contract_id: 33000595,
//       risk_qty: 3195,
//       risk_valid_time_nanos_epoch: 0,
//       symbol_id: 22,
//     },
//   ],
//   ok: true,
// };

export function useRiskQuery() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<RiskQueryResponse>();
  const [isLoading, setIsLoading] = useState(false);

  const runRiskQuery = useCallback(async (input: RiskQueryInput) => {
    const nextQuery = buildRiskQuery(input);

    setIsLoading(true);
    setQuery(nextQuery);

    try {
      const result = await getFromAPI(`/position_updates?${nextQuery}`);
      console.log(result);
      setData(result);

      return result;
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    isLoading,
    query,
    runRiskQuery,
  };
}
