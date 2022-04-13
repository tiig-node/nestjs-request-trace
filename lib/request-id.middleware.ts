import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuidV4 } from "uuid";

@Injectable()
export class RequestIdMiddleware implements NestMiddleware<Request, Response> {
  use(_req: Request, res: Response, next: () => void) {
    const requestIdHeader = uuidV4();
    res.set("X-Request-Id", requestIdHeader);
    next();
  }
}
