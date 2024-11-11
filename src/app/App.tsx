import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/app-layout";
import HomePage from "@/pages/home/home-page";
import NotFound from "@/pages/auth/not-found/not-found";
import Landing from "@/pages/landing/landingPage";
import LoginPage from "@/pages/auth/sign-in/login-page";
import RegisterPage from "@/pages/auth/sign-up/register-page";
import Authentication from "./providers/authenication-provider";
import ProfilePage from "@/pages/auth/profile/profile-page";

export default function App() {
  return (
    <Routes>
      <Route path="/product" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/product/profile"
          element={
            <Authentication>
              <ProfilePage />
            </Authentication>
          }
        />
      </Route>

      <Route path="/*" element={<NotFound />} />
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
