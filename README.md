# NestJS request-trace

[![CI](https://github.com/tiig-node/nestjs-request-trace/actions/workflows/ci.yml/badge.svg)](https://github.com/tiig-node/nestjs-request-trace/actions/workflows/ci.yml)
[![GitHub release](https://img.shields.io/github/v/release/tiig-node/nestjs-request-trace.svg)](https://GitHub.com/tiig-node/nestjs-request-trace/releases/)
[![GitHub license](https://img.shields.io/github/license/tiig-node/nestjs-request-trace.svg)](https://github.com/tiig-node/nestjs-request-trace/blob/main/LICENSE)

Middleware for managing X-Request-Id and X-Correlation-Id headers in NestJS

# Usage

```typescript
import { RequestIdMiddleware, CorrelationIdMiddleware } from "@tiig-node/nestjs-request-trace";

export class AppModule implements OnModuleInit {
  public async onModuleInit (): Promise<void> { }

  configure (consumer: MiddlewareConsumer): void {
    consumer
      .apply(CorrelationIdMiddleware)
      .forRoutes("*")
      .apply(RequestIdMiddleware)
      .forRoutes("*");
  }
}
```
