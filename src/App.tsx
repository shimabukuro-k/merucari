import "./styles.css";

import { Router } from "./Router/Router";
import { UseProvider } from "./providers/UseProvider";

export default function App() {
  return (
    <UseProvider>
      <Router />
    </UseProvider>
  );
}
