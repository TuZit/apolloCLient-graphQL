import { useState } from 'react';
import Layout from './components/Layout';
import Test from './components/Test';
import useSignIn from './hooks/mutations/useSignIn';

function App() {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  });

  const {
    loginMutate,
    loginResult: { data }
  }: any = useSignIn();

  const login = async ({ username, password }: any) => {
    await loginMutate({ username, password });
    localStorage.setItem('testEcotoken', data?.sign_in?.token);

    return Promise.resolve();
  };

  return (
    <div className='App'>
      <Layout>
        <Test name='Test' />
        <form
          style={{
            margin: '0 auto',
            width: '80%'
          }}
          onSubmit={(e) => {
            e.preventDefault();
            login(loginForm);
          }}>
          <div>
            <label>Email</label>
            <br />
            <input
              type='text'
              onChange={(e) =>
                setLoginForm((pre: any) => {
                  return {
                    ...pre,
                    username: e.target.value
                  };
                })
              }
            />
          </div>
          <div>
            <label>Pass</label>
            <br />
            <input
              type='text'
              onChange={(e) =>
                setLoginForm((pre: any) => {
                  return {
                    ...pre,
                    password: e.target.value
                  };
                })
              }
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      </Layout>
    </div>
  );
}

export default App;
