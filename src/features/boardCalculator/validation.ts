import {
  centimetersFromImperialInputs,
  centimetersFromMetricInputs,
  kilogramsFromInput,
  kilogramsFromPounds
} from "./conversion";
import type { CalculatorFormData, ValidationResult } from "./types";

const MIN_HEIGHT_CM = 110;
const MAX_HEIGHT_CM = 230;
const MIN_WEIGHT_KG = 35;
const MAX_WEIGHT_KG = 170;

export const validateAndNormalizeCalculatorForm = (form: CalculatorFormData): ValidationResult => {
  const errors: string[] = [];

  const heightCm =
    form.unitSystem === "metric"
      ? centimetersFromMetricInputs(form.metricMeters, form.metricCentimeters)
      : centimetersFromImperialInputs(form.imperialFeet, form.imperialInches);
  const weightKg = form.unitSystem === "metric" ? kilogramsFromInput(form.weightKilograms) : kilogramsFromPounds(form.weightPounds);

  if (heightCm === null) {
    errors.push("Please enter your height.");
  } else if (heightCm < MIN_HEIGHT_CM || heightCm > MAX_HEIGHT_CM) {
    errors.push("Height looks out of range. Please check and try again.");
  }

  if (weightKg === null) {
    errors.push("Please enter your weight.");
  } else if (weightKg < MIN_WEIGHT_KG || weightKg > MAX_WEIGHT_KG) {
    errors.push("Weight looks out of range. Please check and try again.");
  }

  if (errors.length > 0 || heightCm === null || weightKg === null) {
    return { errors };
  }

  return {
    errors,
    normalized: {
      heightCm,
      weightKg,
      level: form.level
    }
  };
};
