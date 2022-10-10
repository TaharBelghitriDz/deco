import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import LoadingScreen from "layouts/loading.screen";
import { loader } from "utils/lazyLoading";

const App = loader(() => import("App"), 5000);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
