# NestJS request-trace

[![CI](https://github.com/npkgdev/nestjs-request-trace/actions/workflows/ci.yml/badge.svg)](https://github.com/npkgdev/nestjs-request-trace/actions/workflows/ci.yml)
[![GitHub release](https://img.shields.io/github/v/release/npkgdev/nestjs-request-trace.svg)](https://GitHub.com/npkgdev/nestjs-request-trace/releases/)
[![GitHub license](https://img.shields.io/github/license/npkgdev/nestjs-request-trace.svg)](https://github.com/npkgdev/nestjs-request-trace/blob/main/LICENSE)

Middleware for managing X-Request-Id and X-Correlation-Id headers in NestJS

# Usage

```typescript
import { RequestIdMiddleware, CorrelationIdMiddleware } from "@npkgdev/nestjs-request-trace";

async function bootstrap() {
  const app: INestApplication = /* ... */

  app.use(RequestIdMiddleware());
  app.use(CorrelationIdMiddleware());

  await app.listen(3000);
}
```
