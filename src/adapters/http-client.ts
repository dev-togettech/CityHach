import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { toast } from 'sonner';

type UrlFactory = (str?: string) => string;

export default class HttpClient {
  static serverURL: string = 'http://localhost:8080';
  static headers: Record<string, string> = {};
  static userId?: string;

  static axiosInstance: AxiosInstance = axios.create({
    baseURL: this.serverURL,
    headers: {},
  });

  constructor(public userMail: string) {
    HttpClient.initializeUserId();
  }

  static initializeUserId(): void {
    // Initialization logic for userId, if any
  }

  static async get(url: string | UrlFactory): Promise<unknown> {
    if (typeof url !== 'string' && this.userId === undefined) {
      return toast.error('Aucun utilisateur connecté, la requête ne peut aboutir');
    }

    const path: string = typeof url === 'string' ? url : url(this.userId);

    try {
      const response: AxiosResponse<unknown> = await HttpClient.axiosInstance.get(this.serverURL + path);
      return Promise.resolve(response.data);
    } catch (error) {
      HttpClient.errorHandler(error as Error, path, 'GET');
    }
  }

  static async post<DataType, ResponseType>(url: string, data: DataType): Promise<ResponseType | void> {
    try {
      const response: AxiosResponse<ResponseType> = await HttpClient.axiosInstance.post(this.serverURL + url, data);
      return Promise.resolve(response.data);
    } catch (error) {
      HttpClient.errorHandler(error as Error, url, 'POST');
    }
  }

  static async patch<DataType, ResponseType>(url: string, data?: DataType): Promise<ResponseType | void> {
    try {
      const response: AxiosResponse<ResponseType> = await HttpClient.axiosInstance.patch(this.serverURL + url, data);
      return Promise.resolve(response.data);
    } catch (error) {
      HttpClient.errorHandler(error as Error, url, 'PATCH');
    }
  }

  static async delete<ResponseType>(url: string): Promise<ResponseType | void> {
    try {
      const response: AxiosResponse<ResponseType> = await HttpClient.axiosInstance.delete(this.serverURL + url);
      return Promise.resolve(response.data);
    } catch (error) {
      HttpClient.errorHandler(error as Error, url, 'DELETE');
    }
  }

  private static errorHandler(error: Error, url: string, method: 'GET' | 'POST' | 'PATCH' | 'DELETE'): void {
    toast.error(error.message || 'Une erreur est survenue');
    console.info(`[${method} on ${url}] Une erreur est survenue pendant la requête`, error);
  }
}
