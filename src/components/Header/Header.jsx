import React, { useContext } from "react";
import s from "./Header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

export const Header = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

  return (
    <div className={s.container}>
      <div className={s.leftWrapper}>
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className={s.logo}>Real SNS</span>
        </Link>
      </div>
      <div className={s.searchWrapper}>
        <div className={s.searchBar}>
          <SearchIcon className={s.searchIcon} />
          <input type='text' className={s.searchInput} placeholder='検索' />
        </div>
      </div>
      <div className={s.rightWrapper}>
        <div className={s.itemIcons}>
          <div className={s.item}>
            <ChatIcon className={s.icon} />
            <span className={s.badge}>1</span>
          </div>
          <div className={s.item}>
            <NotificationsIcon className={s.icon} />
            <span className={s.badge}>2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture ? `${PUBLIC_FOLDER}/${user.profilePicture}` : `${PUBLIC_FOLDER}/person/noAvatar.png`
              }
              alt=''
              className={s.profileIcon}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
