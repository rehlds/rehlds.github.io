import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import Translate from '@docusaurus/Translate';
import * as React from 'react';

interface Repository {
  repo: any;
  latestRelease: any;
}

const repos = [
  { author: 'rehlds', repo: 'rehlds' },
  { author: 'rehlds', repo: 'ReGameDLL_CS' },
  { author: 'rehlds', repo: 'reapi' },
  { author: 'rehlds', repo: 'metamod-r' },
  // { author: 'rehlds', repo: 'metamod-r' },
  // { author: 'rehlds', repo: 'resemiclip' },
  // { author: 'rehlds', repo: 'reunion' },
  // { author: 'rehlds', repo: 'rechecker' },
  // { author: 'rehlds', repo: 'revoice' },
  // { author: 'rehlds', repo: 'refreelook' },
  // { author: 'rehlds', repo: 'localizebugfix' },
  // { author: 'WPMGPRoSToTeMa', repo: 'SafeNameAndChat' },
  // { author: 'rehlds', repo: 'relocalizebugfix' },
  // { author: 'rehlds', repo: 'hitboxtracker' },
];

function RepositoryCard({ repoData }: { repoData: Repository }) {
  const { repo, latestRelease } = repoData;

  return (
    <div className={clsx(styles.repoCard, 'card')}>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <h2 className="card__title">{repo.name}</h2>
      </a>
      <p className={styles.shortDesc}>{repo.description || 'No description available.'}</p>
      <div className={styles.badges}>
        <a href={`${repo.html_url}/releases`} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://img.shields.io/github/v/release/${repo.owner.login}/${repo.name}?include_prereleases&style=for-the-badge`}
            alt="Latest Release"
          />
        </a>
        <a href={`${repo.html_url}/releases`} target="_blank" rel="noopener noreferrer">
          <img
            src={`https://img.shields.io/github/downloads/${repo.owner.login}/${repo.name}/total?style=for-the-badge`}
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
          <Link className="button button--secondary button--lg" to="/docs">
            <Translate description="CTA button on main page">Get Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const repoDataPromises = repos.map(async ({ author, repo: repoName }) => {
        const [repoResponse, releaseResponse] = await Promise.all([
          fetch(`https://api.github.com/repos/${author}/${repoName}`, { cache: 'force-cache' }),
          fetch(`https://api.github.com/repos/${author}/${repoName}/releases/latest`, { cache: 'force-cache' }),
        ]);

        const repo = await repoResponse.json();
        const latestRelease = releaseResponse.ok ? await releaseResponse.json() : { tag_name: 'N/A', published_at: 'N/A' };

        return { repo, latestRelease };
      });

      const allRepoData = await Promise.all(repoDataPromises);
      setRepositories(allRepoData);
    };

    fetchRepositories();
  }, []);

  return (
    <Layout
      description="Enhanced HLDS with bug fixes and new features to expand functionality.">
      <HomepageHeader />
      <main>
        <div className={styles.repoList}>
          {repositories.map((repo, index) => (
            <RepositoryCard key={index} repoData={repo} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
