import React, { useEffect } from 'react';
import styles from '../../styles/Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const { list } = useSelector(({ categories }) => categories);
  console.log(list);
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}> Categories</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={`/categories/${1}`}>Link</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href='/help' target='_blank' className={styles.link}>
          Help
        </a>
        <a
          href='/help'
          target='_blank'
          className={styles.link}
          style={{ textDecoration: 'underline' }}
        >
          Trms & Conditions
        </a>
      </div>
    </section>
  );
};
export default Sidebar;
