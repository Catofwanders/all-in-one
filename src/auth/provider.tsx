import React from 'react';
import { fakeAuthProvider } from './auth';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export default function AuthProvider(
  { children }: { children: React.ReactNode },
) {
  const [user, setUser] = React.useState<any>(null);

  const signin = React.useCallback((
    newUser: string,
    callback: VoidFunction,
  ) => fakeAuthProvider.signin(() => {
    setUser(newUser);
    callback();
  }), []);

  const signout = React.useCallback((
    callback: VoidFunction,
  ) => fakeAuthProvider.signout(() => {
    setUser(null);
    callback();
  }), []);

  const value = React.useMemo(() => (
    { user, signin, signout }
  ), [user, signin, signout]);

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
