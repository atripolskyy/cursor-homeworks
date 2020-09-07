import React from 'react';

import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.header}>
      <span className={s.headerShadow}>blog</span>
      <h1>Blog Posts</h1>
    </div>
  );
}

export default Header;
