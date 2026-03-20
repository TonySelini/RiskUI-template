import numbro from "numbro";


export const removeCommas = (value: string) => {
  return value?.replace(/,/g, "");
};

export const parseCommaValue = (value: string): number => {
  const number = parseFloat(removeCommas(value));
  if (isNaN(number)) {
    return 0;
  }
  return number;
};

export const isValidtoFormatNumber = (value: string): boolean => {
  return /^-?\d*(\.\d*)?[kmb]?$/.test(value.toLowerCase()) || value === "";
};
export const parseKMBValue = (value: string): number | null => {
  const lowerValue = value.trim().toLowerCase();

  // Match a decimal number optionally followed by k, m, or b
  const match = /^(-?\d+(\.\d+)?)([kmb])?$/.exec(lowerValue);

  if (!match) {
    return null; // Invalid input
  }

  const number = parseFloat(match[1]);
  const suffix = match[3];

  switch (suffix) {
    case "k":
      return number * 1000;
    case "m":
      return number * 1000000;
    case "b":
      return number * 1000000000;
    default:
      return number;
  }
};
export const formatWithCommas = (num: number): string => {
  return numbro(num).format({ thousandSeparated: true });
};

export const formatWithCommasString = (num: string): string => {
  return numbro(num).format({ thousandSeparated: true });
};

export const customformatWithCommas = (
  num: number,
  targetFormat?: {
    mantissa?: number;
    optionalMantissa?: boolean;
    trimMantissa?: boolean;
    thousandSeparated?: boolean;
  }
): string => {
  const defaultFormat = {
    mantissa: 2,
    optionalMantissa: true,
    trimMantissa: true,
    thousandSeparated: true,
  };
  return numbro(num).format({ ...defaultFormat, ...targetFormat });
};



export const toPrecision = (
  targetInput: number,
  targetFormat: {
    mantissa?: number;
    optionalMantissa?: boolean;
    trimMantissa?: boolean;
  } = {
    mantissa: 2,
    optionalMantissa: true,
    trimMantissa: true,
  }
) => {
  return parseFloat(numbro(targetInput).format(targetFormat));
};

export const getOppositeValue = (value: number): number => {
  return value > 0 ? -value : Math.abs(value);
};

export const checkIsNumber = (value: any) => {
  return typeof value === "number" && !isNaN(value);
};
