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

export const PRIVATE_REDIRECT = '/login';
export const SESSION_USER_LOCAL_KEY = 'token';

export const config = process.env.NODE_ENV === "development" ? dev : prod;
