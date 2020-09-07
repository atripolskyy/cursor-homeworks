import React from 'react';

import s from './PostList.module.scss';

import Post from '../Post/Post';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
// const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const postsList = [
  {
    author: {
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    date: "26 февр.",
    comments: 4,
  },
  {
    author: {
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
    },
    content: "Hello guys! Where are you now...?",
    image: "https://specials-images.forbesimg.com/imageserve/5d65b894fead2800089255b0/960x0.jpg?fit=scale",
    date: "12 март.",
    comments: 13,
  }
];

const PostList = () => {
  return (
    <>
      <div className={s.cardList}>
        { postsList.map(post => <Post {...post} />) }
      </div>
    </>
  );
}

export default PostList;
