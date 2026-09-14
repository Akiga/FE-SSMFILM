import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import { jwtDecode } from "jwt-decode";
function App() {
  const token = localStorage.getItem("token");

  if (token) {
      const decoded = jwtDecode(token);

      if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
      }
  }

  return (
    <>
      <ScrollToTop/>
      <AppRoutes />;
    </>
  )
}

export default App;