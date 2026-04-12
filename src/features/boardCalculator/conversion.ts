const INCHES_PER_FOOT = 12;
const CENTIMETERS_PER_INCH = 2.54;
const POUNDS_PER_KILOGRAM = 2.2046226218;

const parseNonNegativeNumber = (value: string): number | null => {
  if (value.trim() === "") return null;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) return null;
  return parsed;
};

export const centimetersFromMetricInputs = (metersInput: string, centimetersInput: string): number | null => {
  const meters = parseNonNegativeNumber(metersInput);
  const centimeters = parseNonNegativeNumber(centimetersInput);
  if (meters === null && centimeters === null) return null;
  return (meters ?? 0) * 100 + (centimeters ?? 0);
};

export const centimetersFromImperialInputs = (feetInput: string, inchesInput: string): number | null => {
  const feet = parseNonNegativeNumber(feetInput);
  const inches = parseNonNegativeNumber(inchesInput);
  if (feet === null && inches === null) return null;
  const totalInches = (feet ?? 0) * INCHES_PER_FOOT + (inches ?? 0);
  return totalInches * CENTIMETERS_PER_INCH;
};

export const kilogramsFromPounds = (poundsInput: string): number | null => {
  const pounds = parseNonNegativeNumber(poundsInput);
  if (pounds === null) return null;
  return pounds / POUNDS_PER_KILOGRAM;
};

export const kilogramsFromInput = (kilogramsInput: string): number | null => parseNonNegativeNumber(kilogramsInput);
