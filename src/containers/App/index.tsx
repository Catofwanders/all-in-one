import AuthProvider from 'auth/provider';
import {
  Routes,
  Route,
} from 'react-router-dom';
import AboutPage from 'containers/About';
import Layout from 'containers/Layout';
import React from 'react';
import RequireAuth from 'auth/RequireAuth';

const LoginPage = React.lazy(() => import('containers/Login'));
const MainPage = React.lazy(() => import('containers/Main'));

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={(
              <RequireAuth>
                <MainPage />
              </RequireAuth>
          )}
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
