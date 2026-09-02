const jokeBtn = document.getElementById('joke-btn');
const jokeText = document.getElementById('joke-text');
const copyBtn = document.getElementById('copy-btn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');

// Fetch joke from Official Joke API
const fetchJoke = async () => {
    jokeBtn.disabled = true;
    loading.style.display = 'block';
    error.style.display = 'none';
    copyBtn.style.display = 'none';

    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }

        const data = await response.json();
        const joke = `${data.setup}\n\n${data.punchline}`;
        
        jokeText.textContent = joke;
        copyBtn.style.display = 'inline-block';
        loading.style.display = 'none';
    } catch (err) {
        error.textContent = '😞 Oops! Could not load a joke. Please try again.';
        error.style.display = 'block';
        loading.style.display = 'none';
        console.error('Error fetching joke:', err);
    } finally {
        jokeBtn.disabled = false;
    }
};

// Copy joke to clipboard
const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(jokeText.textContent);
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    } catch (err) {
        error.textContent = '❌ Failed to copy joke';
        error.style.display = 'block';
        console.error('Error copying to clipboard:', err);
    }
};

// Event listeners
jokeBtn.addEventListener('click', fetchJoke);
copyBtn.addEventListener('click', copyToClipboard);

// Load a joke on page load
window.addEventListener('load', () => {
    setTimeout(fetchJoke, 500);
});