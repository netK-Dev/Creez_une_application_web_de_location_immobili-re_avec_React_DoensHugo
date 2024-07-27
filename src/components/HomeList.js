// src/components/HomeList.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomeListing.module.scss';

const HomeList = ({ properties }) => {
  return (
    <div className={styles.listContainer}>
      {properties.map((property) => (
        <div key={property.id} className={styles.listItem}>
          <Link to={`/property/${property.id}`} className={styles.link}>
            <div
              className={styles.listImage}
              style={{ backgroundImage: `url(${property.cover})` }}
            >
              <h2 className={styles.listTitle}>{property.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeList;
