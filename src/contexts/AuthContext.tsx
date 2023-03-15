import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api } from "../api/apiMethods";
import { getCookie, setCookie } from "../app/helpers/helperFunctions";

export interface UserContextInterface {
  hasToken: boolean;
  setHasToken: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<Partial<UserContextInterface>>({
  hasToken: getCookie("token") ? true : false,
});

interface AuthContextProps {
  children: React.ReactNode[] | React.ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      try {
        const {
          data: { token },
        } = await api.getToken();

        setCookie("genesisToken", token);
        setHasToken(true);
      } catch (error) {
        setHasToken(false);
      }
    };

    getToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        hasToken,
        setHasToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
