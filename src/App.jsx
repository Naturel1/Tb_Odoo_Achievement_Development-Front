import { useEffect } from 'react';
import { useAtom } from 'jotai';
import './App.css';
import AppRoutes from './AppRoutes';
import { Navbar, setAuthToken } from './shared';
import { tokenAtom, userAtom, getMe } from './features/auth';

function App() {
  const [token, setToken] = useAtom(tokenAtom);
  const [userConnected, setUserConnected] = useAtom(userAtom);

  useEffect(() => {
    if (token && !userConnected) {
      getMe()
        .then(profile => {
          if (profile) {
            setUserConnected({
              id: profile.user_id,
              username: profile.username,
              role: profile.role,
              ...profile
            });
          }
        })
        .catch(() => {
          setAuthToken(null);
          setToken('');
          setUserConnected(null);
        });
    }
  }, [token, userConnected, setToken, setUserConnected]);

  return (
    <>
      <Navbar/>
      <main>
        <AppRoutes/>
      </main>
    </>
  );
}

export default App;
