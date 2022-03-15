export class AppError extends Error {
    public status: string;
    public isOperational: boolean;
    public codeError: string;
  
    constructor(
      public message: string,
      public statusCode: number,
      codeError?: string
    ) {
      super(message);
      this.codeError = codeError;
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }