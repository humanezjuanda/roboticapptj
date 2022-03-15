import { sign, verify, decode } from "jsonwebtoken";
import { Env } from '../config/environment';

export interface JwtData {
    correo: string;
    id: number;
  }
  
export class JwtToken {

    private env: Env;
    constructor() {
      this.env = Env.init();
    }

    public getToken(data: JwtData): string {
        const token = sign(data,this.env.JWTKEY || "",{expiresIn:this.env.JWT_EXPIRES_IN});
        return token;
      }
    
      /**
       * decodeToken
       */
      public decodeToken(token: string): string | object {
        return verify(token, this.env.JWTKEY || "");
      }
      /**
       * decodeAfterExpired
       */
      public decodeAfterExpired(token: string) {
        return decode(token, { json: true });
      }
}