import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { v4 as uuidV4 } from "uuid";

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware<Request, Response> {
  use(req: Request, res: Response, next: () => void) {
    const correlationIdHeader = req.header("x-correlation-id") || uuidV4();
    req.headers["x-correlation-id"] = correlationIdHeader;
    res.set("X-Correlation-Id", correlationIdHeader);
    next();
  }
}
