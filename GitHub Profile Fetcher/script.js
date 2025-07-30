document.getElementById('fetchBtn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    if (username) {
        fetchGitHubProfile(username);
    } else {
        alert('Please enter a GitHub username');
    }
});

function fetchGitHubProfile(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => displayProfile(data))
        .catch(error => {
            document.getElementById('profile').innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}

function displayProfile(user) {
    const profileDiv = document.getElementById('profile');
    profileDiv.innerHTML = `
        <img src="${user.avatar_url}" alt="Profile Picture" />
        <h2>${user.name || user.login}</h2>
        <p><strong>Bio:</strong> ${user.bio || 'No bio available'}</p>
        <p><strong>Public Repos:</strong> ${user.public_repos}</p>
        <p><a href="${user.html_url}" target="_blank">Visit GitHub Profile</a></p>
    `;
}
