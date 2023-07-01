import React from 'react';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { TimeLine } from '../../components/TimeLine/TimeLine';
import { RightBar } from '../../components/RightBar/RightBar';
import s from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <Header />
      <div className={s.homeContainer}>
        <Sidebar />
        <TimeLine />
        <RightBar />
      </div>
    </>
  );
};
