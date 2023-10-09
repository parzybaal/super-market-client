/* import axios from "axios";

const URL = "http://localhost:3000";

const Http = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

Http.interceptors.request.use(
  function (config) {
    const persistLocal = JSON.parse(
      localStorage.getItem("persist:auth") || "{}"
    );
    const AuthSlice = JSON.parse(persistLocal.auth || "{}");

    // Obtener el token del almacenamiento local
    const token = AuthSlice.token;

    if (token) {
      // Agregar token a las cabeceras de la solicitud
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const HttpRequest = {
  get: async (url) => await Http.get(url),
  post: async (url, body) => {
    return await Http.post(url, body);
  },
  patch: async (url, body) => {
    return await Http.patch(url, body);
  },
  put: async (url, body) => {
    return await Http.put(url, body);
  },
  delete: async (url) => {
    return await Http.delete(url);
  },
};
 */