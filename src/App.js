import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import MainPage from "./pages/MainPage";
import LoginModal from "./pages/LoginModal";
import NotFound from "./ui/NotFound";
import AuthPage from "./pages/AuthPage";
import SignUpForm from "./users/SignUpForm";
import RedirectPage from "./pages/RedirectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/redirect", element: <RedirectPage /> },
      { path: "/login", element: <LoginModal /> },
      { path: "/auth", element: <AuthPage /> },
      // TODO : SignupForm을 SignUpPage로 바꾸기.
      { path: "/signup", element: <SignUpForm /> },
      { path: "/main", element: <MainPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
