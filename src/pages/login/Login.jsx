import React, { useContext, useRef } from 'react';
import s from './Login.module.scss';
import { loginCall } from '../../actionCall';
import { AuthContext } from '../../state/AuthContext';

export const Login = () => {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  console.log(user);
  return (
    <div className={s.login}>
      <div className={s.loginWrapper}>
        <div className={s.loginLeft}>
          <h3 className={s.title}>Real SNS</h3>
          <span className={s.desc}>本格的なSNSを、自分の手で。</span>
        </div>
        <div className={s.loginRight}>
          <form className={s.loginFormContainer} onSubmit={(e) => handleSubmit(e)}>
            <p className={s.loginMessage}>ログインはこちら</p>
            <input type='email' className={s.loginInput} placeholder='email' required ref={email} />
            <input
              type='password'
              className={s.loginInput}
              placeholder='password'
              required
              minLength={6}
              ref={password}
            />
            <button className={s.loginButton} type='submit'>
              ログイン
            </button>
            <hr className={s.hr} />
            <span className={s.passwordForgot}>パスワードをお忘れの方</span>
            <button className={s.registerButton}>アカウント作成</button>
          </form>
        </div>
      </div>
    </div>
  );
};
