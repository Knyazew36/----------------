import React from 'react';
import styles from '../../styles/Header.module.css';
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}></Link>
        <img src={LOGO} alt='logo' />
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{
              backgroundImage: `url(${AVATAR})`,
            }}
          />
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}></div>
        </form>
      </div>
    </div>
  );
};

export default Header;
