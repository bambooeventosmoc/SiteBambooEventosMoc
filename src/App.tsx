import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <AppRoutes />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
