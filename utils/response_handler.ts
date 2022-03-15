export interface ResourceResponse<T> {
    message: string;
    data?: T;
    token?: string;
  }