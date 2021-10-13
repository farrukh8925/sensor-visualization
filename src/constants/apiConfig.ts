/**
 * API Routes
 */
export const API_ROUTES: {
  baseUrl: string;
  register: string;
  login: string;
  events: string;
  history: string;
} = {
  baseUrl: "https://opendata.hopefully.works/api",
  register: "/user/signup",
  login: "/user/login",
  events: "/events",
  history: "/sensor/history",
};
