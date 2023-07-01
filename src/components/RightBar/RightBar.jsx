import React from 'react';
import s from './RightBar.module.scss';
import { Users } from '../../dummyData';

export const RightBar = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return (
      <>
        <div className={s.eventWrapper}>
          <div className={s.eventTitle}>
            <img src={`${PUBLIC_FOLDER}/star.png`} alt='' className={s.starImage} />
            <span className={s.eventText}>
              <b>フォロワー限定</b>イベント開催中！
            </span>
          </div>
          <img src={`${PUBLIC_FOLDER}/event.jpeg`} alt='' className={s.eventImage} />
        </div>
        <div className={s.onlineFriendWrapper}>
          <h4 className={s.onlineFriendTitle}>オンラインの友達</h4>
          <ul className={s.friendListWrapper}>
            {Users.map((friend) => (
              <li className={s.friendListItem} key={friend.id}>
                <div className={s.isOnline}>
                  <img src={`${PUBLIC_FOLDER}${friend.profilePicture}`} alt='' className={s.friendImg} />
                  <span className={s.isOnlineSign}></span>
                </div>
                <span className={s.friendName}>{friend.username}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.promotionWrapper}>
          <h4 className={s.promotionTitle}>プロモーション広告</h4>
          <ul className={s.promotionListWrapper}>
            <li className={s.promotionItem}>
              <img src={`${PUBLIC_FOLDER}/promotion/promotion1.jpeg`} alt='' className={s.promotionImage} />
              <p className={s.promotionName}>ショッピング</p>
            </li>
            <li className={s.promotionItem}>
              <img src={`${PUBLIC_FOLDER}/promotion/promotion2.jpeg`} alt='' className={s.promotionImage} />
              <p className={s.promotionName}>カーショップ</p>
            </li>
            <li className={s.promotionItem}>
              <img src={`${PUBLIC_FOLDER}/promotion/promotion3.jpeg`} alt='' className={s.promotionImage} />
              <p className={s.promotionName}>株式会社Eiji</p>
            </li>
          </ul>
        </div>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <div className={s.profileRightBarWrapper}>
        <div className={s.profileRightBarInfoWrapper}>
          <h4 className={s.profileRightBarTitle}>ユーザー情報</h4>
          <div className={s.info}>
            <span>出身：</span>
            <span>福岡</span>
          </div>
        </div>
        <div className={s.profileRightBarFollowingWrapper}>
          <h4 className={s.profileRightBarTitle}>あなたの友達</h4>
          <div className={s.profileRightBarFollowingUsers}>
            <div className={s.followingUser}>
              <img src={`${PUBLIC_FOLDER}/person/1.jpeg`} alt='' className={s.followingImage} />
              <span className={s.followingName}>Eiji</span>
            </div>
            <div className={s.followingUser}>
              <img src={`${PUBLIC_FOLDER}/person/2.jpeg`} alt='' className={s.followingImage} />
              <span className={s.followingName}>Yamaki</span>
            </div>
            <div className={s.followingUser}>
              <img src={`${PUBLIC_FOLDER}/person/3.jpeg`} alt='' className={s.followingImage} />
              <span className={s.followingName}>Koga</span>
            </div>
            <div className={s.followingUser}>
              <img src={`${PUBLIC_FOLDER}/person/4.jpeg`} alt='' className={s.followingImage} />
              <span className={s.followingName}>Matukubo</span>
            </div>
            <div className={s.followingUser}>
              <img src={`${PUBLIC_FOLDER}/person/5.jpeg`} alt='' className={s.followingImage} />
              <span className={s.followingName}>Kikukawa</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={s.rightBar}>
      <div className={s.rightBarWrapper}>{user ? <ProfileRightBar /> : <HomeRightBar />}</div>
    </div>
  );
};
