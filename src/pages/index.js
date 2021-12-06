import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: '',
    description: (
      <>
        Just specify your skills and interests in RadGrad, and it will automatically show you matching Internships.
      </>
    ),
  },
  {
    title: 'Save time',
    imageUrl: '',
    description: (
      <>
        We search dozens of sites so you don't have to.
      </>
    ),
  },
  {
    title: 'Focused on Hawaii',
    imageUrl: '',
    description: (
      <>
        Our site helps you find local internships better than Google or those mainland sites can.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
      <div id="container">
        <div style={{width: "100%", height: "100%"}}>
          <form action="/docs/dedication">
            <input type="submit" value="Hi" style={{backgroundColor: 'black', border: 'none', color: 'black'}}/>
          </form>
        </div>
      </div>
  );
}

export default Home;
