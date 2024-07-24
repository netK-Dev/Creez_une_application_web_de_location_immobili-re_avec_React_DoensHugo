import React from 'react';
import Collapse from '../components/Collapse';
import styles from '../styles/About.module.scss';

const About = () => {
  return (
    <div className={styles.page}>
      <div className={styles.contImg}>
        <img
          src="img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.webp"
          className={styles.img}
          alt="Vue panoramique d'une vallée entourée de montagnes enneigées avec un arbre vert à gauche"
        />
      </div>
      <div className={styles.contCollapse}>
        <Collapse title="Fiabilité" width="1023px">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect" width="1023px">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service" width="1023px">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Sécurité" width="1023px">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l’hôte qu’au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </div>
  );
};

export default About;
