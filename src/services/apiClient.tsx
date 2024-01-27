import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://fake-coffee-api.vercel.app",
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    // return apiInstance.get<T[]>(this.endpoint).then((res) => res.data);
    return apiInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
}

export default ApiClient;
