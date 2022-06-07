import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import App from "./App";

Sentry.init({
  dsn: "https://fc0b01e98bd54ad8bf39290139eb2a2c@o1222135.ingest.sentry.io/6375859",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
ReactDOM.render(<App />, document.getElementById("root"));
