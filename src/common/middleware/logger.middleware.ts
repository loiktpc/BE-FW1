import { Injectable, NestMiddleware, Controller } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  
  use( req: Request, res: Response, next: NextFunction  ) {
    const token = req.headers.authorization
    // req.body = {username: 'loi',age:18 , roles : 'admin'};
    
    next();
  }
}
