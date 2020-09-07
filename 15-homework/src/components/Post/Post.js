import React from 'react';

import s from './Post.module.scss';

import Icon from '../Icon/Icon';

const Post = ({author, content, image, date, comments}) => {
  const authorImgStyle = {
    backgroundImage: `url(${author.photo})`
  }

  return (
    <article className={s.card}>
      <div className={s.cardAuthor}>
        <div className={s.cardAuthorImg} style={authorImgStyle}></div>
        <div className={s.cardAuthorMeta}>
          <span className={s.cardAuthorName}>{author.name} <span className={s.cardAuthorNick}>{author.nickname}</span></span>
          <time itemProp="datePublished" dateTime="{date}">{date}</time>
        </div>
      </div>
      <header>
        <h3 className={s.cardTitle} itemProp="headline">{content}</h3>
      </header>
      <img className={s.cardImg} src={image} alt=""/>
      <div className={s.cardComments}><Icon width={18} />{comments}</div>
    </article>
  );
}

export default Post;
