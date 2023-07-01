import React, { useEffect, useState } from "react";
import s from "./Profile.module.scss";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { RightBar } from "../../components/RightBar/RightBar";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Header />
      <div className={s.profile}>
        <Sidebar />
        <div className={s.profileRight}>
          <div className={s.top}>
            <div className={s.backgroundWrapper}>
              <img src={user.coverPicture || `${PUBLIC_FOLDER}/post/3.jpeg`} alt='' className={s.backgroundImage} />
              <img
                src={
                  user.profilePicture
                    ? `${PUBLIC_FOLDER}/${user.profilePicture}`
                    : `${PUBLIC_FOLDER}/person/noAvatar.png`
                }
                alt=''
                className={s.profileImage}
              />
            </div>
            <div className={s.profileInfo}>
              <h4 className={s.name}>{user.username}</h4>
              <span className={s.desc}>{user.description}</span>
            </div>
          </div>
          <div className={s.bottom}>
            <TimeLine username={username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};
