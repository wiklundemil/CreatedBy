const username = 'wiklundemil';  
const apiUrl = `https://api.github.com/users/${username}/repos?type=public&sort=created&direction=asc`;

export async function fetchRepoCount() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'User-Agent': 'JavaScript'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const repos = await response.json();
        const repoCount = repos.length;

        return repoCount;
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return null;
    }
}
