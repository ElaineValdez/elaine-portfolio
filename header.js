fetch('header.html')
.then(response => response.text())
.then(html => {
    document.getElementById('headerContainer').innerHTML = html;
})
.catch(error => console.error('Error fetching header:', error));