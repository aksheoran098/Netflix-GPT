export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://cdn-icons-png.flaticon.com/512/3177/3177440.png";

export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_FIREBASE_KEY,
  },
};

export const firebaseConfig = {
  apiKey: "AIzaSyBokiabOAwCCWhyYBl_UgiX-RSitBaHFqo",
  authDomain: "netflix-gpt-287b6.firebaseapp.com",
  projectId: "netflix-gpt-287b6",
  storageBucket: "netflix-gpt-287b6.firebasestorage.app",
  messagingSenderId: "730210506342",
  appId: "1:730210506342:web:51d28ffce416c93eba3fa7",
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;

export const GENERE_LIST = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export const LANGUAGE_LIST = {
  en: "English",
  hi: "Hindi",
  es: "Spanish",
  fr: "French",
  de: "German",
  ja: "Japanese",
  ko: "Korean",
  zh: "Chinese",
  it: "Italian",
  ru: "Russian",
  pt: "Portuguese",
  ar: "Arabic",
  tr: "Turkish",
  ta: "Tamil",
  te: "Telugu",
  ml: "Malayalam",
  bn: "Bengali",
  ur: "Urdu",
  nl: "Dutch",
  sv: "Swedish",
  pl: "Polish",
  fa: "Persian",
  id: "Indonesian",
  no: "Norwegian",
  th: "Thai",
  vi: "Vietnamese",
};
