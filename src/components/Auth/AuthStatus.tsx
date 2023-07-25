import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome
      {' '}
      {auth.user}
      !
      {' '}
      <button
        type="button"
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
