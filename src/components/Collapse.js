import React, { useState } from 'react';
import Arrow from '../assets/arrow.svg'; // Une seule image pour la flèche
import styles from '../styles/Collapse.module.scss';

const Collapse = ({ title, children, width }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${styles.collapseContainer} ${styles.responsiveCollapse}`}
      style={{ maxWidth: width }}
    >
      <div className={styles.cont} onClick={toggleCollapse}>
        <span>{title}</span>
        <span
          className={`${styles.arrow} ${isCollapsed ? '' : styles.rotated}`}
        >
          <img src={Arrow} alt="Toggle arrow" />
        </span>
      </div>
      <div
        className={`${styles.content} ${isCollapsed ? '' : styles.expanded}`}
      >
        <div className={styles.innerContent}>{children}</div>
      </div>
    </div>
  );
};

export default Collapse;
