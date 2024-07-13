// src/components/ExampleComponent.js
import React from 'react';
import styles from '../styles/test.module.css';

function ExampleComponent() {
  return (
    <div className={styles.exampleComponent}>
      <p>This is an example component with scoped styles!</p>
    </div>
  );
}

export default ExampleComponent;
