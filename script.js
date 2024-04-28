let products = [];

window.onload = loadProducts;

function loadProducts() {
    fetch('/products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        products = data;
        console.log("Products loaded:", products);
        searchProducts('');
    })
    .catch(error => {
        console.error('Failed to load products:', error);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    adjustFooterPadding();
  }); 
  function adjustFooterPadding() {
    const footer = document.querySelector('footer');
    const resultsElement = document.getElementById('results');
    
    if (footer && resultsElement) {
      resultsElement.style.paddingBottom = footer.offsetHeight + 'px';
    }
  }

function searchProducts(input = '') {
    const searchInput = document.getElementById('searchInput');
    const inputValue = input || searchInput.value.toLowerCase();
    console.log("Searching for:", inputValue);

    const introSection = document.querySelector('.intro.content');
    const resultsContainer = document.getElementById('results');

    const filteredProducts = products.filter(product => {
        const productName = product.name.toLowerCase();
        const productBrand = product.brand.toLowerCase();
        return productName.includes(inputValue) || productBrand.includes(inputValue);
    });

    if (inputValue === '') {
        introSection.style.display = '';
        displayResults(products);
    } else if (filteredProducts.length > 0) {
        introSection.style.display = 'none';
        displayResults(filteredProducts);
    } else {
        introSection.style.display = '';
        resultsContainer.innerHTML = '<p>No products found.</p>';
    }
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No products found.';
        resultsContainer.appendChild(noResultsMessage);
    } else {
        results.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = "product";

            const productName = document.createElement('h2');
            productName.textContent = product.name;
            productElement.appendChild(productName);

            const productBrand = document.createElement('p');
            productBrand.textContent = "Brand: " + product.brand;
            productElement.appendChild(productBrand);

            const ecoFriendly = document.createElement('p');
            ecoFriendly.textContent = product.ecoFriendly ? "Eco-friendly: Yes" : "Eco-friendly: No";
            productElement.appendChild(ecoFriendly);

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            productImage.style.maxWidth = "100px";
            productElement.appendChild(productImage);

            resultsContainer.appendChild(productElement);
        });
    }

    adjustFooterPadding(); // Adjust padding after displaying results
}

function sendMessage() {
    const message = document.getElementById('chatInput').value;
    document.getElementById('chatOutput').innerText = 'Response to: ' + message;
}

// Adjust padding when the window resizes
window.onresize = adjustFooterPadding;
