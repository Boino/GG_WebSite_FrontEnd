import type { NormalizedRiderInput, RecommendationDescriptor, RiderLevel, WaveSize } from "./types";

type PlaceholderLookupRow = {
  minScore: number;
  maxScore: number;
  byWave: Record<
    WaveSize,
    {
      productSlugPath: string;
      suggestedVolumeRange: string;
      summary: string;
    }
  >;
};

const LEVEL_SCORE_OFFSET: Record<RiderLevel, number> = {
  beginner: -6,
  intermediate: 4,
  advanced: 12,
  professional: 18
};

// Designed to be replaced with a real lookup table later.
const PLACEHOLDER_LOOKUP_TABLE: PlaceholderLookupRow[] = [
  {
    minScore: -Infinity,
    maxScore: 102,
    byWave: {
      small: {
        productSlugPath: "/shop-longboards/p/longboard",
        suggestedVolumeRange: "46-52 L",
        summary: "Stable option to generate glide and easy wave entry."
      },
      medium: {
        productSlugPath: "/shop-evolutive-boards/p/hybrid",
        suggestedVolumeRange: "42-48 L",
        summary: "Balanced shape for progression and forgiving turns."
      },
      large: {
        productSlugPath: "/shop-evolutive-boards/p/funboard",
        suggestedVolumeRange: "38-44 L",
        summary: "Keeps paddling support while improving control on steeper faces."
      }
    }
  },
  {
    minScore: 102,
    maxScore: 122,
    byWave: {
      small: {
        productSlugPath: "/shop-evolutive-boards/p/hybrid",
        suggestedVolumeRange: "40-46 L",
        summary: "Reliable small-wave option with extra foam for easier speed."
      },
      medium: {
        productSlugPath: "/shop-evolutive-boards/p/funboard",
        suggestedVolumeRange: "36-42 L",
        summary: "Versatile profile for mixed sections."
      },
      large: {
        productSlugPath: "/shop/p/round-tail",
        suggestedVolumeRange: "32-37 L",
        summary: "Round-tail control for stronger surf and cleaner lines."
      }
    }
  },
  {
    minScore: 122,
    maxScore: 138,
    byWave: {
      small: {
        productSlugPath: "/shop-evolutive-boards/p/swallow-tail",
        suggestedVolumeRange: "35-41 L",
        summary: "Maintains speed in flatter sections with responsive release."
      },
      medium: {
        productSlugPath: "/shop/p/round-tail",
        suggestedVolumeRange: "30-35 L",
        summary: "All-around performance target for regular conditions."
      },
      large: {
        productSlugPath: "/shop/p/swallow-tail",
        suggestedVolumeRange: "28-33 L",
        summary: "Lower-volume recommendation for hold and confidence in bigger surf."
      }
    }
  },
  {
    minScore: 138,
    maxScore: Infinity,
    byWave: {
      small: {
        productSlugPath: "/shop/p/twin-fish-tail",
        suggestedVolumeRange: "32-37 L",
        summary: "Fast and playful setup for small, weaker waves."
      },
      medium: {
        productSlugPath: "/shop/p/swallow-tail",
        suggestedVolumeRange: "28-33 L",
        summary: "Drive-oriented recommendation for regular performance sessions."
      },
      large: {
        productSlugPath: "/shop/p/round-tail",
        suggestedVolumeRange: "26-31 L",
        summary: "Control-focused pick for steeper and more powerful waves."
      }
    }
  }
];

const calculatePlaceholderScore = (input: NormalizedRiderInput): number => {
  return input.weightKg * 0.78 + input.heightCm * 0.31 + LEVEL_SCORE_OFFSET[input.level];
};

export const getPlaceholderRecommendations = (input: NormalizedRiderInput): RecommendationDescriptor[] => {
  const score = calculatePlaceholderScore(input);
  const row = PLACEHOLDER_LOOKUP_TABLE.find((entry) => score >= entry.minScore && score < entry.maxScore) ?? PLACEHOLDER_LOOKUP_TABLE[0];

  return (["small", "medium", "large"] as const).map((waveSize) => ({
    waveSize,
    productSlugPath: row.byWave[waveSize].productSlugPath,
    suggestedVolumeRange: row.byWave[waveSize].suggestedVolumeRange,
    summary: row.byWave[waveSize].summary
  }));
};
