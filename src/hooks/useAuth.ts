import { AuthContext } from 'auth/provider';
import React from 'react';

export function useAuth() {
  return React.useContext(AuthContext);
}
