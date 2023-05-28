import React from 'react';
import styles from '../../styles/Footer.module.css';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={ROUTES.HOME}></Link>
      <img src={LOGO} alt='logo' />
    </div>
    <div className={styles.rights}>Developed by ...</div>
    <div className={styles.socials}>
      <a href='' target='_blank'>
        <svg className='icon'>
          <use xlinkHref={'/sprite.svg#instagram'} />
        </svg>
      </a>
      <a href='' target='_blank'>
        <svg className='icon'>
          <use xlinkHref={'/sprite.svg#facebook'} />
        </svg>
      </a>
      <a href='' target='_blank'>
        <svg className='icon'>
          <use xlinkHref={'/sprite.svg#youtube'} />
        </svg>
      </a>
    </div>
  </section>
);
export default Footer;
