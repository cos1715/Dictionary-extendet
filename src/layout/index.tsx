import React from 'react';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';

import styles from './index.module.scss';

export const LayoutMain: React.FC = ({ children }) => (
  <div className={styles['app']}>
    <Header />
    <div className={styles['app-wrapper']}>
      <SideBar />
      <main className={styles['app-main']}>{children}</main>
    </div>
  </div>
);
