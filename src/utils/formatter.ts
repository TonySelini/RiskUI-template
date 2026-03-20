import numbro from "numbro";
export const formatNumberDisplay = (
  value: any,
  targetFormat: {
    thousandSeparated?: boolean;
    mantissa?: number;
    optionalMantissa?: boolean;
    trimMantissa?: boolean;
    negative?: "parenthesis" | "sign" | undefined;
  output?: "currency" | "percent" | "byte" | "time" | "ordinal" | "number" 
  } = {
    thousandSeparated: true,
    mantissa: 2,
    optionalMantissa: true,
    trimMantissa: true,
    negative: "sign",
    output: "number",
  }
) => {
  // check if value is not a number and if it is empty
  if (typeof value !== "number" && isNaN(parseFloat(value))) return "";

  const allFormats = {
    ...{
      thousandSeparated: true,
      mantissa: 2,
      optionalMantissa: true,
      trimMantissa: true,
      output: "number" as const,
    },
    ...targetFormat,
  };

  return numbro(value).format(allFormats);
};
