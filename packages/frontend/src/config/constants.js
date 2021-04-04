const prod = {
  url: {
    API_URL: "http://143.198.123.72:4000",
  }
};

const dev = {
  url: {
    API_URL: "http://143.198.123.72:4000"
  }
};

export const AUTH_TOKEN_COOKIE = 'medial-test-auth';
export const PRIVATE_REDIRECT = '/login';
export const RANDOM_USERS_LOCAL_KEY = 'random-users';
export const SESSION_USER_LOCAL_KEY = 'session-user';
export const SHOWS_CACHE_LOCAL_KEY = 'shows-cache';

export const config = process.env.NODE_ENV === "development" ? dev : prod;
