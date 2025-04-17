import { GEMINI_KEY } from "./constants";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: GEMINI_KEY,
});

const myQuery1 = `Act as a movie recommendation system. Suggest 20 movie names for this query: 
(if Possible include this movie also)
  `;
const myQuery2 = `.

Even if the actor or genre does not match well, still return an array like this:
["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6", "Movie 7", "Movie 8", "Movie 9", "Movie 10"]

Only return a raw array of only movie names. Do not give movie year in movie name. Do not explain or say anything else.`;

const geminiSearch = async (mainQuery) => {
  const response = await ai.models.generateContent({
    model: "gemini-1.5-pro",
    // use below model if limit reach for gemini-1.5-pro
    // model: "gemini-2.0-flash",
    contents: myQuery1 + mainQuery + myQuery2,
  });
  return JSON.parse(response.text);
};

export default geminiSearch;
