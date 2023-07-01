import React, { useContext, useEffect, useState } from "react";
import s from "./Post.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

export const Post = (props) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const {
    post: { _id, createdAt, description, img, likes, userId },
  } = props;
  const [like, setLike] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [userId]);
  const handleLike = async () => {
    try {
      //いいねのAPIを叩く
      await axios.put(`/posts/${_id}/like`, { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className={s.post}>
      <div className={s.postWrapper}>
        <div className={s.postTop}>
          <div className={s.postTopLeft}>
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? `${PUBLIC_FOLDER}/${user.profilePicture}`
                    : `${PUBLIC_FOLDER}/person/noAvatar.png`
                }
                alt=''
                className={s.profileIcon}
              />
            </Link>
            <span className={s.userName}>{user.username}</span>
            <span className={s.postDate}>{format(createdAt)}</span>
          </div>
          <div className={s.postTopRight}>
            <MoreVertIcon />
          </div>
        </div>
        <div className={s.postCenter}>
          <span className={s.postText}>{description}</span>
          <img src={`${PUBLIC_FOLDER}${img}`} className={s.postImage} alt='' />
        </div>
        <div className={s.postBottom}>
          <div className={s.postBottomLeft}>
            <img src={`${PUBLIC_FOLDER}/heart.png`} alt='' className={s.likeIcon} onClick={() => handleLike()} />
            <span className={s.likedCount}>{like}人がいいねしました</span>
          </div>
          {/* <div className={s.postBottomRight}><span className={s.postComment}>{comment}:コメント</span></div> */}
        </div>
      </div>
    </div>
  );
};
