function handleClick() {
    var element = document.querySelector('.header-container');
    // Toggle between yellow and the default color
    element.style.backgroundColor = (element.style.backgroundColor === 'yellow') ? '' : 'yellow';
}

 // Use Fetch API to import header.html
 fetch('header.html')
 .then(response => response.text())
 .then(html => {
     document.getElementById('headerContainer').innerHTML = html;
 })
 .catch(error => console.error('Error fetching header:', error));