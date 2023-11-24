import ApiConfig from "./api.config";

export default class Repository {
  private static instance: Repository;
  private apiConfig: ApiConfig = ApiConfig.getInstance();

  private constructor() {}

  public static getInstance(): Repository {
    if (!Repository.instance) {
      Repository.instance = new Repository();
    }

    return Repository.instance;
  }

  async get(endpoint: string): Promise<unknown> {
    const url = `${this.apiConfig.basePath}${endpoint}`;
    const headers = this.apiConfig.getHeaders();

    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud GET:", error);
      throw error;
    }
  }

  async post(endpoint: string, body: unknown): Promise<unknown> {
    const url = `${this.apiConfig.basePath}${endpoint}`;
    const headers = this.apiConfig.getHeaders();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
      throw error;
    }
  }

  async put(endpoint: string, body: unknown): Promise<unknown> {
    const url = `${this.apiConfig.basePath}${endpoint}`;
    const headers = this.apiConfig.getHeaders();

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers,
        body: JSON.stringify(body),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error en la solicitud PUT:", error);
      throw error;
    }
  }

  async delete(endpoint: string): Promise<void> {
    const url = `${this.apiConfig.basePath}${endpoint}`;
    const headers = this.apiConfig.getHeaders();

    try {
      await fetch(url, {
        method: "DELETE",
        headers,
      });
    } catch (error) {
      console.error("Error en la solicitud DELETE:", error);
      throw error;
    }
  }
}
