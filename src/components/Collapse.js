import React, { useState } from 'react';
import Up from '../asset/arrowUp.svg';
import Down from '../asset/arrowDown.svg';
import styles from '../styles/Collapse.module.scss';

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.collapseContainer}>
      <div className={styles.cont} onClick={toggleCollapse}>
        <span>{title}</span>
        <span className={isCollapsed ? styles.arrowDown : styles.arrowUp}>
          <img src={isCollapsed ? Up : Down} alt="Toggle arrow" />
        </span>
      </div>
      <div
        className={`${styles.content} ${isCollapsed ? '' : styles.expanded}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
