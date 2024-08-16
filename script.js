function loadHTML(elementId, url) {
    console.log(`Loading ${url} into #${elementId}`);
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            console.log(`Loaded content from ${url}`);
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Load navbar and footer
loadHTML('navbar-placeholder', 'navbar.html');
loadHTML('footer-placeholder', 'footer.html');
