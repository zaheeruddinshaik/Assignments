const products = [
    {
        id: 1,
        title: "iPhone 14 Pro",
        price: 129999,
        image: "https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png",
        description: "Latest iPhone with dynamic island and 48MP camera"
    },
    {
        id: 2,
        title: "MacBook Air M2",
        price: 114900,
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433",
        description: "Lightweight laptop with powerful M2 chip"
    },
    {
        id: 3,
        title: "Sony WH-1000XM4",
        price: 24999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDm_Ljg1dlH4aPIHwiJiRuxf5ys6tNgWxCkQ&s",
        description: "Premium noise cancelling headphones"
    },
    {
        id: 4,
        title: "Samsung Galaxy Watch 5",
        price: 27999,
        image: "https://images-cdn.ubuy.co.in/66ae2d8b254e7253411c1f35-samsung-galaxy-watch5-40mm-smart-watch.jpg",
        description: "Advanced smartwatch with health tracking"
    },
    {
        id: 5,
        title: "Dell XPS 15",
        price: 149999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsE3hUvHFOpmw0IVv6hdPa5Vp2KHDeVMCmg&s",
        description: "Premium laptop with 4K OLED display"
    },
    {
        id: 6,
        title: "iPad Air 5th Gen",
        price: 54900,
        image: "https://media.croma.com/image/upload/v1685968727/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264356_iyyy1g.png",
        description: "Versatile tablet for work and play"
    },
    {
        id: 7,
        title: "Samsung 55\" QLED TV",
        price: 89999,
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/qa55qe1daulxl/gallery/in-qled-qe1d-qa55qe1daulxl-540555150?$684_547_PNG$",
        description: "4K Smart TV with quantum dot technology"
    },
    {
        id: 8,
        title: "Logitech MX Master 3",
        price: 9495,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkpDEyZWDzPDQ2rsCTdJ8CiOpB6SE2Ss-AA&s",
        description: "Premium wireless mouse for productivity"
    },
    {
        id: 9,
        title: "Google Pixel 7 Pro",
        price: 84999,
        image: "https://m.media-amazon.com/images/I/61ni3t1ryQL.jpg",
        description: "Android flagship with exceptional camera"
    },
    {
        id: 10,
        title: "Amazon Echo Dot 5",
        price: 4999,
        image: "https://www.reliancedigital.in/akamai/images/products/Amazon-Echo-Dot-5th-Gen-2023-Blue-21.png",
        description: "Smart speaker with improved sound"
    },
    {
        id: 11,
        title: "Nintendo Switch OLED",
        price: 34999,
        image: "https://www.nintendo.com/eu/media/images/08_content_images/systems_5/nintendo_switch_3/nintendo_switch_oled/CI_NSwitch_main.jpg",
        description: "Gaming console with vibrant display"
    },
    {
        id: 12,
        title: "Canon EOS R6",
        price: 215999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQfJf_ub60P_5eF8ooLZDQ3asywNZjbihrA&s",
        description: "Professional mirrorless camera"
    },
    {
        id: 13,
        title: "Dyson V15 Detect",
        price: 44999,
        image: "https://accessworld.in/cdn/shop/products/Dyson-V15-Direct-7_blue.jpg?v=1678878070&width=1200",
        description: "Advanced cordless vacuum cleaner"
    },
    {
        id: 14,
        title: "Samsung Galaxy S23 Ultra",
        price: 124999,
        image: "https://m.media-amazon.com/images/I/71lD7eGdW-L.jpg",
        description: "Premium Android phone with S Pen"
    },
    {
        id: 15,
        title: "LG 34\" Ultrawide Monitor",
        price: 39999,
        image: "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/2b38680d-f325-4511-a761-e104a111286a/md08000462-zoom-04-jpg",
        description: "QHD curved gaming monitor"
    },
    {
        id: 16,
        title: "Bose QuietComfort Earbuds II",
        price: 24999,
        image: "https://assets.bosecreative.com/transform/c141c393-c70a-4581-ae51-7dcbad123077/blue.webp",
        description: "Premium wireless noise-cancelling earbuds"
    },
    {
        id: 17,
        title: "ASUS ROG Gaming Laptop",
        price: 149999,
        image: "https://m.media-amazon.com/images/I/811QpiYXe-L.jpg",
        description: "Powerful gaming laptop with RTX 4080"
    },
    {
        id: 18,
        title: "GoPro Hero 11 Black",
        price: 45999,
        image: "https://m.media-amazon.com/images/I/51t6c5t0nDL.AC_UF1000,1000_QL80.jpg",
        description: "Advanced action camera with 5.3K video"
    },
    {
        id: 19,
        title: "Microsoft Surface Pro 9",
        price: 109999,
        image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Surface-Pro-9-Platinum:VP2-859x540",
        description: "Versatile 2-in-1 laptop tablet"
    },
    {
        id: 20,
        title: "Sony PS5",
        price: 49999,
        image: "https://sgp1.digitaloceanspaces.com/relay-bl-in-records/GameNation/EA_976",
        description: "Next-gen gaming console"
    },
    {
        id: 21,
        title: "Fitbit Sense 2",
        price: 24999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfE_8p-DsqiCNKEXOp0LxBs1dtMe9htyENzg&s",
        description: "Advanced health and fitness smartwatch"
    },
    {
        id: 22,
        title: "Samsung Galaxy Tab S8+",
        price: 74999,
        image: "https://fdn.gsmarena.com/imgroot/news/22/01/galaxy-tab-s8-plus-renders/inline/-1200/gsmarena_002.jpg",
        description: "Premium Android tablet with S Pen"
    },
    {
        id: 23,
        title: "Philips Hue Starter Kit",
        price: 9999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5M8zypsxghMgT7FS6CT-uKdTxmxWWGmNq7Q&s",
        description: "Smart lighting system with bridge"
    },
    {
        id: 24,
        title: "DJI Mini 3 Pro",
        price: 89999,
        image: "https://www.team-bhp.com/forum/attachments/gadgets-computers-software/2387518d1687047883t-dji-mini-3-pro-review-best-nano-drone-coverpics-2.jpg",
        description: "Compact drone with 4K camera"
    },
    {
        id: 25,
        title: "Razer Blade 15",
        price: 179999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVpQ5UrjEw7zY8TLJVevo6RKr35w8jnCOlw&s",
        description: "Premium gaming laptop with RTX 4090"
    },
    {
        id: 26,
        title: "Sonos Arc Soundbar",
        price: 89999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU8uXhQWE-I9sfXdlZ4ecoKODI0dmYDSOOA&s",
        description: "Premium Dolby Atmos soundbar"
    },
    {
        id: 27,
        title: "OnePlus 11",
        price: 64999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWnaLKYM9QSxIBk2w18xjWWKXSsomyDl-SVA&s",
        description: "Flagship killer with Hasselblad cameras"
    },
    {
        id: 28,
        title: "Kindle Paperwhite",
        price: 13999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEq0Yn-eHYKGLUkqjnLvP90mjD6svP3v-q2w&s",
        description: "E-reader with warm light and waterproofing"
    },
    {
        id: 29,
        title: "Keychron K2 Keyboard",
        price: 8999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHl3tDDF33dz43Q_xIj05AD6-cC9binc9bYQ&s",
        description: "Wireless mechanical keyboard"
    },
    {
        id: 30,
        title: "Ring Video Doorbell Pro",
        price: 18999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsvo_0rRbqIQYQW8UnylQGnBHBn2Z45CMPNQ&s",
        description: "Smart doorbell with HD video"
    }
];

let cart = [];
const productsPerPage = 6; // Number of products to display per page
let currentPage = 1;




function filterByPrice(priceRange) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    let filteredProducts;
    
    if (priceRange === 'all') {
        displayAllProducts(currentPage);
        document.getElementById('pagination').style.display = 'flex';
        return;
    }
    
    // Hide pagination when filtering
    document.getElementById('pagination').style.display = 'none';
    
    const [min, max] = priceRange.split('-').map(Number);
    
    if (!max) {
        // For "Above 100000" option
        filteredProducts = products.filter(product => product.price >= min);
    } else {
        filteredProducts = products.filter(product => 
            product.price >= min && product.price <= max
        );
    }
    
    if (filteredProducts.length === 0) {
        container.innerHTML = '<div class="no-results">No products found in this price range.</div>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title"${product.title}</h3>
            <p class="product-price">₹${product.price}</p>
            <p>${product.description}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(productCard);
    });
}

// Add this event listener after your existing event listeners
document.querySelector('.price-filter').addEventListener('change', (event) => {
    filterByPrice(event.target.value);
});
// 11


function displayAllProducts(page) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">₹${product.price}</p>
            <p>${product.description}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(productCard);
    });

    updatePaginationButtons();
}

// Function to display search results without pagination
function displaySearchResults(searchInput) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    // Hide pagination when showing search results
    document.getElementById('pagination').style.display = 'none';

    // Filter products based on search input
    const matchingProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        product.price.toString().includes(searchInput)
    );

    if (matchingProducts.length === 0) {
        container.innerHTML = '<div class="no-results">No products found matching your search.</div>';
        return;
    }

    matchingProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">₹${product.price}</p>
            <p>${product.description}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(productCard);
    });
}

// Search function
function handleSearch() {
    const searchInput = document.querySelector('.search-box').value.trim();
    
    if (searchInput === '') {
        // If search is empty, show all products with pagination
        document.getElementById('pagination').style.display = 'flex';
        displayAllProducts(currentPage);
    } else {
        // Show only matching products without pagination
        displaySearchResults(searchInput);
    }
}

// corsel
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.querySelector('.indicators');

let currentSlide = 0;
const totalSlides = slides.length;

// Create indicators
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => goToSlide(i));
    indicatorsContainer.appendChild(indicator);
}

const indicators = document.querySelectorAll('.indicator');

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(n) {
    currentSlide = n;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateIndicators();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    goToSlide(currentSlide);
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto-advance every 5 seconds
setInterval(nextSlide, 5000);

// Create pagination buttons
function createPaginationButtons() {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    const totalPages = Math.ceil(products.length / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            displayAllProducts(currentPage);
        });
        paginationDiv.appendChild(button);
    }
}

// Update pagination buttons to highlight active page
function updatePaginationButtons() {
    const buttons = document.querySelectorAll('.pagination button');
    buttons.forEach((button, index) => {
        if (index + 1 === currentPage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Add event listeners for search
document.querySelector('.search-btn').addEventListener('click', handleSearch);
document.querySelector('.search-box').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Clear search when input is empty
document.querySelector('.search-box').addEventListener('input', (event) => {
    if (event.target.value === '') {
        document.getElementById('pagination').style.display = 'flex';
        displayAllProducts(currentPage);
    }
});

// Initialize the display
createPaginationButtons();
displayAllProducts(currentPage);

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cart-total-amount');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div>
                <h4>${item.title}</h4>
                <p>₹${item.price} × ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotal.textContent = total;
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'none' ? 'block' : 'none';
}

// Initial display
displayProducts(products);
