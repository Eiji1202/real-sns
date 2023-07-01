import React, { useContext, useEffect, useState } from "react";
import s from "./TimeLine.module.scss";
import { Share } from "../Share/Share";
import { Post } from "../Post/Post";
import axios from "axios";
import { AuthContext } from "../../state/AuthContext";

export const TimeLine = (props) => {
  const { username } = props;
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`) //プロフィール画面で表示するタイムライン
        : await axios.get(`/posts/timeline/${user._id}`); //ホーム画面で表示するタイムライン
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className={s.timeLine}>
      <div className={s.timeLineWrapper}>
        <Share />
        <div className={s.posts}>
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
