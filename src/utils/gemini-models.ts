export interface GeminiModel {
  id: string;
  name: string;
  description: string;
  contextWindow: number;
}

export const GEMINI_MODELS: GeminiModel[] = [
  {
    id: "gemini-2.0-flash-exp",
    name: "gemini-2.0-flash-exp",
    description: "Experimental flash model with enhanced capabilities",
    contextWindow: 128000,
  },
  {
    id: "gemini-exp-1206",
    name: "gemini-exp-1206",
    description: "Experimental model with enhanced capabilities",
    contextWindow: 128000,
  },
];

export const getGeminiModelById = (
  modelId: string
): GeminiModel | undefined => {
  return GEMINI_MODELS.find((model) => model.id === modelId);
};
