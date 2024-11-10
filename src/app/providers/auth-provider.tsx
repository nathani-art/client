import { useLocalStorage } from "@/hooks/use-localStorage";
import instance from "@/shared/api/axios-instance";
import { createContext, ReactNode, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type LoginDto = {
  email: string;
  password: string;
};

type RegisterDto = {
  phone: string;
  name: string;
  email: string;
  password: string;
};

interface AuthContextProps {
  token: string | null;
  logIn: (data: LoginDto) => void;
  logOut: () => void;
  logUp: (data: RegisterDto) => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

// TODO: add profile page
// TODO: add toast on error login/register
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/product";
  //  "/product/profile"
  const [token, setToken] = useLocalStorage<string | null>("token", null);

  const logIn = async (data: LoginDto) => {
    // console.log("logIn request", data);

    await loginRequest("api/auth/login", data)
      .then((data) => {
        console.log("loginRequest", data);
        setToken(data.data.token);
        navigate(redirectPath, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const logUp = async (data: RegisterDto) => {
    // console.log("logUp request", data);

    await registerRequest("/api/auth/register", data)
      .then((data) => {
        console.log("registerRequest", data);
        setToken(data.data.token);
      })
      .catch((error) => console.error(error));

    // navigate(redirectPath, { replace: true });
  };
  const logOut = () => {
    console.log("logOut");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, logIn, logUp, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

function loginRequest(url: string, data: LoginDto) {
  return instance.post(`${url}`, data);
}

// TODO: тут нужно в сервере добавить phone как опционально свйство
function registerRequest(url: string, data: RegisterDto) {
  const requstData = {
    email: data.email,
    password: data.password,
    name: data.name,
  };
  return instance.post(`${url}`, requstData);
}
