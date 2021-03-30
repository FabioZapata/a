const prod = {
  url: {
    API_URL: "http://157.245.138.152:4000",
  }
};

const dev = {
  url: {
    API_URL: "http://157.245.138.152:4000"
  }
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
