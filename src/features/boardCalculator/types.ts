export type UnitSystem = "metric" | "imperial";

export type RiderLevel = "beginner" | "intermediate" | "advanced" | "professional";

export type WaveSize = "small" | "medium" | "large";

export type CalculatorFormData = {
  unitSystem: UnitSystem;
  metricMeters: string;
  metricCentimeters: string;
  imperialFeet: string;
  imperialInches: string;
  weightKilograms: string;
  weightPounds: string;
  level: RiderLevel;
};

export type NormalizedRiderInput = {
  heightCm: number;
  weightKg: number;
  level: RiderLevel;
};

export type ValidationResult = {
  errors: string[];
  normalized?: NormalizedRiderInput;
};

export type RecommendationDescriptor = {
  waveSize: WaveSize;
  productSlugPath: string;
  suggestedVolumeRange: string;
  summary: string;
};
