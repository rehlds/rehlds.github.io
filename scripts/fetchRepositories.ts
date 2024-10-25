import { writeFileSync } from 'fs';

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

const repos: { author: string; repo: string }[] = [
    { author: 'rehlds', repo: 'rehlds' },
    { author: 's1lentq', repo: 'ReGameDLL_CS' },
    { author: 's1lentq', repo: 'reapi' },
    { author: 's1lentq', repo: 'resemiclip' },
    { author: 's1lentq', repo: 'reunion' },
    { author: 's1lentq', repo: 'rechecker' },
    { author: 's1lentq', repo: 'revoice' },
    { author: 's1lentq', repo: 'refreelook' },
    { author: 's1lentq', repo: 'localizebugfix' },
    { author: 'WPMGPRoSToTeMa', repo: 'SafeNameAndChat' },
    { author: 'rehlds', repo: 'relocalizebugfix' },
    { author: 's1lentq', repo: 'hitboxtracker' }
];

async function fetchLatestRelease(author: string, repo: string): Promise<{ version: string; date: string }> {
    try {
        const response = await fetch(`https://api.github.com/repos/${author}/${repo}/releases/latest`);
        if (!response.ok) {
            throw new Error(`Error fetching latest release for ${repo}: ${response.statusText}`);
        }
        const data = await response.json();
        return {
            version: data.tag_name || 'No version available',
            date: data.published_at || 'No date available'
        };
    } catch (error) {
        console.error(error);
        return { version: 'No version available', date: 'No date available' };
    }
}

async function fetchRepoData({ author, repo }: { author: string; repo: string }): Promise<Repository | null> {
    const apiUrl = `https://api.github.com/repos/${author}/${repo}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching data for ${repo}: ${response.statusText}`);
        }
        const data = await response.json();

        const latestRelease = await fetchLatestRelease(author, repo);

        return {
            username: author,
            repo: repo,
            name: data.name,
            description: data.description || 'No description available.',
            downloads: data.subscribers_count || 0,
            stars: data.stargazers_count || 0,
            latestRelease: latestRelease
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function main() {
    const repoDataPromises = repos.map(fetchRepoData);
    const allRepoData = await Promise.all(repoDataPromises);
    const filteredRepoData = allRepoData.filter((repo): repo is Repository => repo !== null);

    // Get output path from environment variables or use default
    const outputPath = process.env.OUTPUT_PATH || 'static/repositories.json';
    
    writeFileSync(outputPath, JSON.stringify(filteredRepoData, null, 2));
    console.log(`Repositories data saved to ${outputPath}`);
}

main();
