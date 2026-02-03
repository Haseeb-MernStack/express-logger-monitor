# Express Logger Monitor

A minimal Express.js example that demonstrates structured HTTP request logging and centralized error logging using `morgan` and `winston`.

## Summary

This project shows how to capture and persist request logs and errors in an Express application. It wires `morgan` into a `winston` logger, records request durations via a middleware, and centralizes error handling so errors are written to a persistent file with stack traces.

## Purpose & Why Use It

- **Purpose:** Provide a simple, reusable pattern for logging and monitoring Express services.
- **Why:** Useful for debugging, auditing, and basic observability without introducing heavy tooling.
- **Problems solved:** Missing or inconsistent logs, no persisted error stacks, and no simple request-duration measurements.

## What This Project Does

- Streams HTTP access logs from `morgan` to `winston` for persistent storage.
- Writes error-level logs and combined logs to `logs/error.log` and `logs/combined.log` respectively.
- Provides a `requestTime` middleware to measure and print request duration on response completion.
- Provides an `errorHandler` middleware that logs errors and returns a 500 response.
- Minimal example routes are included to demonstrate behavior and test logging.

## Files of Interest

- `src/app.js` — app setup and example endpoints
- `src/index.js` — server start (port 3000)
- `src/logger/winston.logger.js` — `winston` configuration and file transports
- `src/logger/http.logger.js` — `morgan` stream that forwards logs to `winston`
- `src/logger/error.logger.js` — helper to log error objects
- `src/middlewares/requestTime.middleware.js` — measures request duration
- `src/middlewares/error.middleware.js` — central error handler
- `logs/` — output directory for `winston` file transports

## Installation

Install dependencies listed in `package.json`:

```bash
npm install
```

## Run

Start the server:

```bash
node src/index.js
```

Or use `nodemon` in development:

```bash
npx nodemon src/index.js
```

The app listens on port 3000 by default.

## Usage / Example Requests

- Health check:

```bash
curl http://localhost:3000/
```

- Trigger an error (tests error logging):

```bash
curl http://localhost:3000/error
```

After making requests, inspect the logs:

- `logs/combined.log` — access and combined logs
- `logs/error.log` — errors with stack traces

## How This Helps Developers

- Provides simple observability for HTTP request traffic.
- Persists error stack traces for post-mortem debugging.
- Gives quick request-duration visibility for basic performance checks.
- Easy to extend: add console transports in dev, remote transports in production.

## Next Steps / Suggestions

- Add environment-based transports (console in dev, remote aggregator in prod).
- Implement log rotation (e.g., `winston-daily-rotate-file`) or forward to a log service (ELK, Datadog).
- Add request IDs and correlation for tracing across services.
- Add tests for middleware behavior.

## What I implemented in this project

- `morgan` -> `winston` integration for persistent HTTP logging.
- `winston` file transports for `error.log` and `combined.log`.
- `requestTime` middleware to measure and print request durations.
- Centralized `errorHandler` to log errors and return a consistent 500 response.

---

If you want, I can add a `start` script to `package.json`, enable log rotation, or push logs to a remote service — tell me which and I will implement it.
