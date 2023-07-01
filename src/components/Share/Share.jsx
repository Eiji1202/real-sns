import React, { useContext, useRef, useState } from "react";
import s from "./Share.module.scss";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

export const Share = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      description: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;

      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        // 画像アップロードのAPIを叩く
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={s.share}>
      <form className={s.shareWrapper} onSubmit={(e) => handleSubmit(e)}>
        <div className={s.shareTop}>
          <img
            src={`${PUBLIC_FOLDER}/${user.profilePicture}` || `${PUBLIC_FOLDER}/person/noAvatar.png`}
            alt=''
            className={s.profileIcon}
          />
          <input type='text' className={s.shareInput} placeholder='いま何してるの？' ref={desc} />
        </div>
        <hr className={s.hr} />
        <div className={s.shareBottom}>
          <div className={s.optionWrapper}>
            <label className={s.option} htmlFor='file'>
              <ImageIcon className={s.optionIcon} htmlColor='blue' />
              <span className={s.optionText}>写真</span>
              <input
                type='file'
                name='file'
                id='file'
                accept='.png, .jpg, .jpeg'
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className={s.option}>
              <GifBoxIcon className={s.optionIcon} htmlColor='hotpink' />
              <span className={s.optionText}>GIF</span>
            </div>
            <div className={s.option}>
              <FaceIcon className={s.optionIcon} htmlColor='green' />
              <span className={s.optionText}>気持ち</span>
            </div>
            <div className={s.option}>
              <AnalyticsIcon className={s.optionIcon} htmlColor='red' />
              <span className={s.optionText}>投票</span>
            </div>
          </div>
          <button className={s.shareButton} type='submit'>
            投稿
          </button>
        </div>
      </form>
    </div>
  );
};
