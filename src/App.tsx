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

  console.log(data);

  const login = async ({ username, password }: any) => {
    await loginMutate({ username, password });

    return Promise.resolve();
  };

  return (
    <div className='App'>
      <Layout>
        <Test name='Test' />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(loginForm);
          }}>
          <div>
            <label>Email</label>
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
