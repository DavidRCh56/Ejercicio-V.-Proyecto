import React, { createContext, useState } from "react";
import axios from 'axios';

export const TOKEN_KEY = 'TOKEN';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLogged: false,
    email: '',
    id: 0,
    jwt: ''
  });

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      const userToken = response.data;
      if (response.status === 200) {
        localStorage.setItem(TOKEN_KEY, userToken.accessToken);
        setUser({
          isLogged: true,
          email: userToken.user.email,
          id: userToken.user.id,
          jwt: userToken.accessToken
        });
        return { error: false, data: 'Sesión iniciada correctamente' };
      } else {
        return { error: true, data: 'Usuario o contraseña incorrecta' };
      }
    } catch (error) {
      return { error: true, data: 'Usuario o contraseña incorrecta' };
    }
  };

  const logout = () => {
    setUser({
      isLogged: false,
      email: '',
      id: 0,
      jwt: ''
    });
    localStorage.removeItem(TOKEN_KEY);
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/register', { email, password });
      if (response.status === 201) {
        return { error: false, data: 'Usuario registrado correctamente' };
      } else {
        return { error: true, data: 'Error al registrar usuario' };
      }
    } catch (error) {
      return { error: true, data: 'Error al registrar el usuario' };
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
