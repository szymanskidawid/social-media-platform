import { useContext } from 'react';
import Logo from '../../small-components/Logo';
import { PageContext } from '../../../contexts/PageContext';
import { LoginViewContext } from '../../../contexts/LoginViewContext';
import InputField from '../../small-components/InputField';

const LoginPage = () => {
  const { setPage } = useContext(PageContext);
  const { loginPageView, setLoginPageView } =
    useContext(LoginViewContext);

  const selectedLoginView = (selection) => {
    if (selection === 'loginView') {
      return (
        <form method="POST">
          <div className="login-page-input-container">
            <label htmlFor="login">Login</label>
            <InputField
              style={{ height: '30px', width: '200px' }}
              placeholder={'Enter username'}
              name={'login'}
              required
            />
          </div>
          <div className="login-page-input-container">
            <label htmlFor="password">Password</label>
            <InputField
              style={{ height: '30px', width: '200px' }}
              placeholder={'Enter password'}
              name={'password'}
              required
            />
          </div>
          <button type="submit" onClick={() => setPage('main')}>
            Login
          </button>
          <p onClick={() => setLoginPageView('forgotPasswordView')}>
            Forgot password?
          </p>
          <p onClick={() => setLoginPageView('registerView')}>
            Don't have an account? Time to register!
          </p>
        </form>
      );
    } else if (selection === 'forgotPasswordView') {
      return (
        <>
          <div className="login-page-input-container">
            <label htmlFor="email">Email</label>
            <InputField
              style={{ height: '30px', width: '200px' }}
              placeholder={'Enter username'}
              name={'email'}
              required
            />
          </div>
          <button type="submit">Send</button>
        </>
      );
    } else if (selection === 'registerView') {
      return (
        <form method="POST">
          <div className="login-page-input-container">
            <label htmlFor="login">Email</label>
            <InputField
              style={{ height: '30px', width: '200px' }}
              placeholder={'Enter username'}
              name={'login'}
              required
            />
          </div>
          <div className="login-page-input-container">
            <label htmlFor="password">Password</label>
            <InputField
              style={{ height: '30px', width: '200px' }}
              placeholder={'Enter password'}
              name={'password'}
              required
            />
          </div>
          <div className="login-page-input-container">
            <label htmlFor="repeatPassword">Repeat Password</label>
            <InputField
              style={{ height: '30px', width: '200px' }}
              placeholder={'Enter password'}
              name={'repeatPassword'}
              required
            />
          </div>
          <button type="submit" onClick={() => setPage('main')}>
            Register
          </button>
        </form>
      );
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page-content-container">
        <div className="login-page-logo">
          <Logo />
        </div>
        <div className="login-page-form-container">
          {selectedLoginView(loginPageView)}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
