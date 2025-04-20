import { GEMINI_KEY } from "./constants";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: GEMINI_KEY,
});

const myMovieQuery1 = `Act as a movie recommendation system. Suggest 20 movie names for this query: 
(if Possible include this movie also)
  `;
const myMovieQuery2 = `.

Even if the actor or genre does not match well, still return an array like this:
["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6", "Movie 7", "Movie 8", "Movie 9", "Movie 10"]

Only return a raw array of only movie names. Do not give movie year in movie name. Do not explain or say anything else.`;

const myLinkQuery1 = ``;
const myLinkQuery2 = ``;

const geminiSearch = async (type, mainQuery) => {
  const content =
    type === "movie_names"
      ? myMovieQuery1 + mainQuery + myMovieQuery2
      : myLinkQuery1 + mainQuery + myLinkQuery2;

  try {
    // First try with gemini-1.5-pro
    const response = await ai.models.generateContent({
      model: "gemini-1.5-pro",
      contents: content,
    });

    return JSON.parse(response.text);
  } catch (error) {
    // If it's a 429 error, retry with gemini-2.0-flash
    if (error?.statusCode === 429 || error?.message?.includes("429")) {
      try {
        const fallbackResponse = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: content,
        });
        return JSON.parse(fallbackResponse.text);
      } catch (fallbackError) {
        throw new Error("Both models failed: " + fallbackError.message);
      }
    } else {
      // Rethrow if it's not a rate limit error
      throw error;
    }
  }
};

export default geminiSearch;
