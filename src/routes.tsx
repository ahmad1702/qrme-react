import { createBrowserRouter, RouteObject } from "react-router-dom";
import Contact from "./pages/contact";
import CreateContact from "./pages/createcontact";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/notfound";
import SignUp from "./pages/signup";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "contact/:path",
    element: <Contact />,
  },
  {
    path: "createcontact",
    element: <CreateContact />,
  },
  {
    path: '*',
    element: <NotFound />
  }
];

const router = createBrowserRouter(routes);
export default router;
