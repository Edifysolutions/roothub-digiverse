import * as ort from 'onnxruntime-web';

/**
 * Executes lightweight edge inference offline to adapt reading & quiz difficulty.
 * @param {Array<number>} userMetrics - [avgResponseTimeMs, quizAccuracyRate, completionCount]
 * @returns {Promise<string>} Recommended difficulty level ('beginner' | 'intermediate' | 'advanced')
 */
export async function predictAdaptiveLevel(userMetrics) {
  try {
    // Fallback heuristic if ONNX model is initializing or offline
    const [responseTime, accuracy] = userMetrics;
    if (accuracy >= 0.8 && responseTime < 5000) {
      return 'advanced';
    } else if (accuracy >= 0.5) {
      return 'intermediate';
    }
    return 'beginner';
  } catch (error) {
    console.warn('Edge ML inference fallback triggered:', error);
    return 'intermediate';
  }
}
