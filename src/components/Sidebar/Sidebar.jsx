import React from 'react';
import s from './Sidebar.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={s.sidebar}>
      <div className={s.sidebarWrapper}>
        <ul className={s.menuListWrapper}>
          <li className={s.menuListItem}>
            <HomeIcon className={s.sidebarIcon} />
            <Link to='/' style={{ textDecoration: 'none', color: '#000' }}>
              <span className={s.sidebarText}>ホーム</span>
            </Link>
          </li>
          <li className={s.menuListItem}>
            <SearchIcon className={s.sidebarIcon} />
            <span className={s.sidebarText}>検索</span>
          </li>
          <li className={s.menuListItem}>
            <NotificationsIcon className={s.sidebarIcon} />
            <span className={s.sidebarText}>通知</span>
          </li>
          <li className={s.menuListItem}>
            <MessageIcon className={s.sidebarIcon} />
            <span className={s.sidebarText}>メッセージ</span>
          </li>
          <li className={s.menuListItem}>
            <BookmarkIcon className={s.sidebarIcon} />
            <span className={s.sidebarText}>ブックマーク</span>
          </li>
          <li className={s.menuListItem}>
            <PersonIcon className={s.sidebarIcon} />
            <Link to='/profile/eiji' style={{ textDecoration: 'none', color: '#000' }}>
              <span className={s.sidebarText}>プロフィール</span>
            </Link>
          </li>
          <li className={s.menuListItem}>
            <SettingsIcon className={s.sidebarIcon} />
            <span className={s.sidebarText}>設定</span>
          </li>
        </ul>
        <hr className={s.hr} />
        <ul className={s.friendListWrapper}>
          {Users.map((friend) => (
            <li className={s.friendListItem} key={friend.id}>
              <img src={`${PUBLIC_FOLDER}${friend.profilePicture}`} alt='' className={s.friendImg} />
              <span className={s.friendName}>{friend.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
