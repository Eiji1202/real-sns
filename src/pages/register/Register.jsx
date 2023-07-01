import React, { useRef } from 'react';
import s from './Register.module.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // パスワードと確認用パスワードが一致しているか
    if (password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity('パスワードが一致しません');
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        // registerAPIを叩く
        await axios.post('auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className={s.signUp}>
      <div className={s.signUpWrapper}>
        <div className={s.signUpLeft}>
          <h3 className={s.title}>Real SNS</h3>
          <span className={s.desc}>本格的なSNSを、自分の手で。</span>
        </div>
        <div className={s.signUpRight}>
          <form className={s.signUpFormContainer} onSubmit={(e) => handleSubmit(e)}>
            <p className={s.signUpMessage}>新規登録はこちら</p>
            <input type='text' className={s.signUpInput} placeholder='username' required ref={username} />
            <input type='email' className={s.signUpInput} placeholder='email' required ref={email} />
            <input
              type='password'
              className={s.signUpInput}
              placeholder='password'
              required
              minLength={6}
              ref={password}
            />
            <input
              type='password'
              className={s.signUpInput}
              placeholder='confirm-password'
              required
              minLength={6}
              ref={confirmPassword}
            />
            <button className={s.registerButton} type='submit'>
              登録
            </button>
            <hr className={s.hr} />
            <span className={s.loginMessage}>ログインはこちら</span>
            <button className={s.loginButton}>ログイン</button>
          </form>
        </div>
      </div>
    </div>
  );
};
