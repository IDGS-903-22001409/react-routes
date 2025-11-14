import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog, { loaderBlogs } from "./Blog";
import NotFound from "./NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Post, { loaderPost } from "./Post";
import Login from "./Login";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        ),
        loader: loaderBlogs,
      },
      {
        path: "/blog/:id",
        element: (
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        ),
        loader: loaderPost,
      },
    ],
  },
]);
