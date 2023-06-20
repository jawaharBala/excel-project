import { useContext, createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const AuthContext = createContext({ });

export const AuthProvider = ({ children }:any) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

 
  return <AuthContext.Provider value={true}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
