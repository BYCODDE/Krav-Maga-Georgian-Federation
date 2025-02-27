import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Aboutkravmaga from "./pages/Aboutkravmaga";
import Training from "./pages/Training";
import Instructor from "./pages/Instructor";

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <Aboutkravmaga /> },
      { path: "/training", element: <Training /> },
      { path: "/instructor", element: <Instructor /> },
    ],
  },
];

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, idx) => (
              <Route key={idx} path={child.path} element={child.element} />
            ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
