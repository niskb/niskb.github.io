document.getElementById('current-year').textContent = new Date().getFullYear();

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Toggle Light Mode';
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        toggleButton.textContent = 'Toggle Light Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        toggleButton.textContent = 'Toggle Dark Mode';
    }
});