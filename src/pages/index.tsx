import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import repositoriesData from '@site/static/repositories.json';

interface Repository {
  username: string;
  repo: string;
  name: string;
  description: string;
  downloads: number;
  stars: number;
  latestRelease: {
    version: string;
    date: string;
  };
}

function RepositoryCard({ repo }: { repo: Repository }) {
  return (
    <div className={clsx(styles.repoCard, 'card')}>
      <a href={`https://github.com/${repo.username}/${repo.repo}`} target="_blank" rel="noopener noreferrer">
        <h2 className="card__title">{repo.repo}</h2>
      </a>
      <p className={styles.shortDesc}>{repo.description}</p>
      <div className={styles.badges}>
        <a href={`https://github.com/${repo.username}/${repo.repo}/releases`} target="_blank" rel="noopener noreferrer">
          <img 
            src={`https://img.shields.io/github/v/release/${repo.username}/${repo.repo}?include_prereleases&style=for-the-badge`} 
            alt="Latest Release" 
          />
        </a>
        <a href={`https://github.com/${repo.username}/${repo.repo}/releases`} target="_blank" rel="noopener noreferrer">
          <img 
            src={`https://img.shields.io/github/downloads/${repo.username}/${repo.repo}/total?style=for-the-badge`} 
            alt="Downloads" 
          />
        </a>
        {/* <a href={`https://github.com/${repo.username}/${repo.repo}/stargazers`} target="_blank" rel="noopener noreferrer">
          <img 
            src={`https://img.shields.io/badge/Stars-${repo.stars.toLocaleString()}-yellow?style=for-the-badge`} 
            alt="Stars" 
          />
        </a> */}
      </div>
    </div>
  );
}




function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const repositories: Repository[] = repositoriesData;

  return (
    <Layout
      description="Enhanced HLDS with bug fixes and new features to expand functionality.">
      <HomepageHeader />
      <main>
        <div className={styles.repoList}>
          {repositories.map((repo, index) => (
            <RepositoryCard key={index} repo={repo} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
