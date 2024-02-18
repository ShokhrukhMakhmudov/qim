import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import News from "./components/News";

import Scientific from "./components/Scientific";

import Books from "./components/Books";

import Laws from "./components/Laws";

import { useSelector } from "react-redux";
function App() {
  const currentUser = useSelector((state) => state);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin></Admin>
            </RequireAuth>
          }>
          <Route path="news" element={<News />} />
          <Route path="laws" element={<Laws />} />
          <Route path="books" element={<Books />} />
          <Route path="scientific" element={<Scientific />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
