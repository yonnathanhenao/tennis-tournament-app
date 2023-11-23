type ApiConfig = {
  basePath: string;
  headers: HeadersInit;
};

// const token = localStorage.getItem("accessToken");

export const apiConfig: ApiConfig = {
  basePath: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${token}`,
  },
};
