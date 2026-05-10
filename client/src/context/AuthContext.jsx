import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { api, clearStoredAuth, persistAuth, readStoredAuth } from '../api/client.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => readStoredAuth());
  const [isBootstrapping, setIsBootstrapping] = useState(Boolean(readStoredAuth()?.token));

  const logout = useCallback(() => {
    clearStoredAuth();
    setAuth(null);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const storedAuth = readStoredAuth();

    if (!storedAuth?.token) {
      setIsBootstrapping(false);
      return undefined;
    }

    api
      .get('/auth/me')
      .then(({ data }) => {
        if (!isMounted) return;
        const freshAuth = { token: storedAuth.token, user: data.user };
        persistAuth(freshAuth);
        setAuth(freshAuth);
      })
      .catch(() => {
        if (!isMounted) return;
        logout();
      })
      .finally(() => {
        if (isMounted) setIsBootstrapping(false);
      });

    return () => {
      isMounted = false;
    };
  }, [logout]);

  const login = useCallback(async (credentials) => {
    const { data } = await api.post('/auth/login', credentials);
    const nextAuth = { token: data.token, user: data.user };
    persistAuth(nextAuth);
    setAuth(nextAuth);
    return nextAuth;
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated: Boolean(auth?.token),
      isBootstrapping,
      login,
      logout,
      token: auth?.token || null,
      user: auth?.user || null,
    }),
    [auth, isBootstrapping, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider.');
  }

  return context;
}
