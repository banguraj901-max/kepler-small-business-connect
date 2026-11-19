
// PLATFORM CONTACT NUMBER
const PLATFORM_PHONE = "23299619224";

// PAYMENT RECEIVING NUMBERS
// Replace these placeholders with your confirmed numbers.
const PAYMENT_ACCOUNTS = {
  "Afrimoney": {
    name: "Kepler Small Business Connect SL",
    number: "ADD_YOUR_AFRIMONEY_NUMBER"
  },

  "Orange Money": {
    name: "Kepler Small Business Connect SL",
    number: "ADD_YOUR_ORANGE_MONEY_NUMBER"
  }
};

let selectedCategory = "";
let selectedProduct = null;
let buyerLatitude = "";
let buyerLongitude = "";

// CATEGORY INFORMATION AND PRODUCTS
// Each category contains exactly 10 sample products.

const productData = [

  {
    category: "Fashion & Tailoring",
    icon: "👗",
    description: "Clothes, tailoring and fashion items.",
    items: [
      ["Ladies Dress", 250, "Freetown"],
      ["Men's Shirt", 180, "Bo"],
      ["School Uniform", 220, "Makeni"],
      ["African Print Dress", 300, "Kenema"],
      ["Men's Traditional Wear", 350, "Freetown"],
      ["Ladies Skirt", 150, "Mile 91"],
      ["Children's Clothes", 120, "Bo"],
      ["Tailoring Service", 200, "Freetown"],
      ["Ladies Blouse", 180, "Makeni"],
      ["Traditional Outfit", 400, "Kenema"]
    ]
  },

  {
    category: "Agriculture & Local Products",
    icon: "🌾",
    description: "Rice, cassava, palm oil and local produce.",
    items: [
      ["Fresh Rice", 250, "Bo"],
      ["Cassava", 80, "Mile 91"],
      ["Palm Oil", 150, "Kenema"],
      ["Groundnuts", 100, "Makeni"],
      ["Fresh Sweet Potatoes", 90, "Bo"],
      ["Local Pepper", 40, "Freetown"],
      ["Cocoa", 300, "Kenema"],
      ["Fresh Tomatoes", 70, "Mile 91"],
      ["Gari", 100, "Bo"],
      ["Fresh Vegetables", 60, "Freetown"]
    ]
  },

  {
    category: "Phones & Accessories",
    icon: "📱",
    description: "Phones, chargers and electronic accessories.",
    items: [
      ["Android Smartphone", 2500, "Freetown"],
      ["Phone Charger", 120, "Bo"],
      ["Power Bank", 350, "Makeni"],
      ["Phone Earphones", 100, "Kenema"],
      ["Phone Cover", 80, "Freetown"],
      ["Bluetooth Speaker", 400, "Bo"],
      ["Memory Card", 150, "Mile 91"],
      ["USB Cable", 60, "Makeni"],
      ["Smart Watch", 500, "Freetown"],
      ["Phone Screen Protector", 50, "Kenema"]
    ]
  },

  {
    category: "Accommodation",
    icon: "🏠",
    description: "Rooms, apartments and guest houses.",
    items: [
      ["Single Room", 800, "Freetown"],
      ["Self-Contained Room", 1500, "Bo"],
      ["Two-Bedroom Apartment", 3500, "Makeni"],
      ["Guest House Room", 600, "Kenema"],
      ["Family Apartment", 4000, "Freetown"],
      ["Student Accommodation", 700, "Mile 91"],
      ["Short-Stay Room", 500, "Bo"],
      ["Lodge Room", 900, "Makeni"],
      ["One-Bedroom Apartment", 2000, "Kenema"],
      ["Guest House Apartment", 2500, "Freetown"]
    ]
  },

  {
    category: "Food & Groceries",
    icon: "🛒",
    description: "Food, groceries and everyday household supplies.",
    items: [
      ["Bag of Rice", 650, "Freetown"],
      ["Cooking Oil", 180, "Bo"],
      ["Fresh Fish", 120, "Kenema"],
      ["Frozen Chicken", 250, "Makeni"],
      ["Onions", 80, "Mile 91"],
      ["Sugar", 100, "Freetown"],
      ["Milk Powder", 150, "Bo"],
      ["Eggs", 120, "Kenema"],
      ["Spaghetti", 90, "Makeni"],
      ["Tomato Paste", 70, "Mile 91"]
    ]
  },

  {
    category: "Beauty & Personal Care",
    icon: "💄",
    description: "Skincare, makeup, hair products and toiletries.",
    items: [
      ["Body Lotion", 120, "Freetown"],
      ["Face Cream", 100, "Bo"],
      ["Hair Shampoo", 90, "Kenema"],
      ["Conditioner", 110, "Makeni"],
      ["Perfume", 250, "Freetown"],
      ["Makeup Kit", 300, "Bo"],
      ["Hair Attachment", 180, "Mile 91"],
      ["Bathing Soap", 40, "Kenema"],
      ["Hair Dryer", 450, "Makeni"],
      ["Skin Care Set", 350, "Freetown"]
    ]
  },

  {
    category: "Furniture & Home Appliances",
    icon: "🛋️",
    description: "Furniture and household appliances.",
    items: [
      ["Plastic Chair", 150, "Freetown"],
      ["Wooden Table", 600, "Bo"],
      ["Bed Frame", 1200, "Makeni"],
      ["Mattress", 900, "Kenema"],
      ["Standing Fan", 500, "Freetown"],
      ["Electric Kettle", 250, "Bo"],
      ["Refrigerator", 4500, "Makeni"],
      ["Wardrobe", 1800, "Kenema"],
      ["Television Stand", 700, "Mile 91"],
      ["Dining Table", 1500, "Freetown"]
    ]
  },

  {
    category: "Building Materials",
    icon: "🧱",
    description: "Cement, roofing sheets, paint and construction supplies.",
    items: [
      ["Bag of Cement", 120, "Freetown"],
      ["Roofing Sheets", 180, "Bo"],
      ["Wall Paint", 350, "Kenema"],
      ["Building Blocks", 15, "Makeni"],
      ["Iron Rods", 100, "Mile 91"],
      ["Ceiling Boards", 250, "Freetown"],
      ["Floor Tiles", 300, "Bo"],
      ["Plumbing Pipes", 120, "Kenema"],
      ["Nails", 50, "Makeni"],
      ["Electrical Wires", 200, "Freetown"]
    ]
  },

  {
    category: "Vehicles & Spare Parts",
    icon: "🏍️",
    description: "Motorcycles, car parts, tyres and accessories.",
    items: [
      ["Motorcycle Tyre", 350, "Freetown"],
      ["Motorcycle Battery", 500, "Bo"],
      ["Car Battery", 900, "Kenema"],
      ["Engine Oil", 180, "Makeni"],
      ["Motorcycle Helmet", 250, "Mile 91"],
      ["Car Tyre", 1200, "Freetown"],
      ["Brake Pads", 300, "Bo"],
      ["Motorcycle Chain", 220, "Kenema"],
      ["Car Headlight", 450, "Makeni"],
      ["Motorcycle Spare Parts", 400, "Freetown"]
    ]
  },

  {
    category: "Computers & Office Equipment",
    icon: "💻",
    description: "Laptops, printers, office supplies and accessories.",
    items: [
      ["Laptop Computer", 4500, "Freetown"],
      ["Desktop Computer", 5000, "Bo"],
      ["Computer Mouse", 120, "Kenema"],
      ["Computer Keyboard", 180, "Makeni"],
      ["Printer", 1600, "Freetown"],
      ["Laptop Charger", 250, "Bo"],
      ["USB Flash Drive", 100, "Mile 91"],
      ["Computer Monitor", 1200, "Kenema"],
      ["Office Chair", 800, "Makeni"],
      ["Printer Paper", 90, "Freetown"]
    ]
  }

];

// CREATE CATEGORY CARDS
function createCategories() {

  const container = document.getElementById("categoryContainer");

  container.innerHTML = "";

  productData.forEach(group => {

    const card = document.createElement("div");

    card.className = "category";

    const icon = document.createElement("div");
    icon.className = "category-icon";
    icon.textContent = group.icon;

    const title = document.createElement("h3");
    title.textContent = group.category;

    const description = document.createElement("p");
    description.textContent = group.description;

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);

    card.onclick = () => openCategory(group.category);

    container.appendChild(card);

  });

}

// GENERATE THE 100 PRODUCTS
const products = [];
let productNumber = 1;

productData.forEach(group => {

  group.items.forEach(item => {

    const slug = item[0].toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");

    products.push({
      id: productNumber++,
      name: item[0],
      price: item[1],
      location: item[2],
      category: group.category,
      image: `https://picsum.photos/seed/kepler-${slug}/600/400`,
      seller: "Sample Seller",
      phone: PLATFORM_PHONE,
      description: `Contact the seller for more information about ${item[0]}.`
    });

  });

});

// OPEN A CATEGORY
function openCategory(category) {

  selectedCategory = category;

  document.getElementById("categoryPage").classList.add("hidden");
  document.getElementById("shopPage").classList.remove("hidden");
  document.getElementById("servicesPage").classList.add("hidden");

  document.getElementById("selectedCategoryTitle").textContent = category;

  const group = productData.find(item => item.category === category);

  document.getElementById("categoryDescription").textContent =
    group ? group.description : "";

  document.getElementById("searchInput").value = "";
  document.getElementById("locationFilter").value = "";

  displayProducts();

  document.getElementById("shopPage").scrollIntoView({
    behavior: "smooth"
  });

}

// RETURN TO CATEGORY PAGE
function showCategories() {

  selectedCategory = "";

  document.getElementById("categoryPage").classList.remove("hidden");
  document.getElementById("shopPage").classList.add("hidden");
  document.getElementById("servicesPage").classList.add("hidden");

  document.getElementById("searchInput").value = "";
  document.getElementById("locationFilter").value = "";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// DISPLAY PRODUCTS FROM SELECTED CATEGORY
function displayProducts() {

  const container = document.getElementById("productContainer");
  const search = document.getElementById("searchInput").value.toLowerCase();
  const location = document.getElementById("locationFilter").value;

  container.innerHTML = "";

  if (!selectedCategory) return;

  const filtered = products.filter(product => {

    const matchesCategory = product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesLocation =
      location === "" || product.location === location;

    return matchesCategory && matchesSearch && matchesLocation;

  });

  if (filtered.length === 0) {
    container.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  filtered.forEach(product => {

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}"
        onerror="this.src='https://placehold.co/600x400?text=Product+Photo'">

      <div class="product-info">

        <h3>${product.name}</h3>

        <p class="small-detail">${product.category}</p>

        <p class="price">NLe ${product.price.toLocaleString()}</p>

        <p class="small-detail">Location: ${product.location}</p>

        <p class="small-detail">Seller: ${product.seller}</p>

        <p class="small-detail">Phone: ${product.phone}</p>

        <button class="primary-btn"
          onclick="showProduct(${product.id})">
          View Product
        </button>

        <button class="whatsapp-btn"
          onclick="contactSeller(${product.id})">
          WhatsApp Seller
        </button>

        <button class="call-btn"
          onclick="callSeller(${product.id})">
          Call Seller
        </button>

      </div>
    `;

    container.appendChild(card);

  });

}

// FIND PRODUCT
function findProduct(id) {
  return products.find(product => product.id === id);
}

// OPEN PRODUCT DETAILS
function showProduct(id) {

  const product = findProduct(id);

  if (!product) return;

  selectedProduct = product;

  document.getElementById("productDetails").innerHTML = `

    <h2>${product.name}</h2>

    <img class="product-large"
      src="${product.image}"
      alt="${product.name}"
      onerror="this.src='https://placehold.co/600x400?text=Product+Photo'">

    <p class="price">NLe ${product.price.toLocaleString()}</p>

    <p><strong>Category:</strong> ${product.category}</p>

    <p><strong>Location:</strong> ${product.location}</p>

    <p><strong>Description:</strong> ${product.description}</p>

    <div class="seller-box">

      <h3>Seller Contact Details</h3>

      <p><strong>Seller:</strong> ${product.seller}</p>

      <p><strong>Phone:</strong> ${product.phone}</p>

      <button class="whatsapp-btn"
        onclick="contactSeller(${product.id})">
        WhatsApp Seller
      </button>

      <button class="call-btn"
        onclick="callSeller(${product.id})">
        Call Seller
      </button>

    </div>

    <button class="primary-btn"
      onclick="openOrder(${product.id})">
      Place an Order
    </button>

  `;

  document.getElementById("productModal").style.display = "block";

}

// WHATSAPP SELLER
function contactSeller(id) {

  const product = findProduct(id);

  if (!product) return;

  const message =
    `Hello ${product.seller}, I am interested in your ${product.name}. Please provide more details.`;

  window.open(
    `https://wa.me/${product.phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

}

// CALL SELLER
function callSeller(id) {

  const product = findProduct(id);

  if (!product) return;

  window.location.href = `tel:${product.phone}`;

}

// SERVICES INFORMATION
const serviceData = [

  ["Electrical Services", "💡", "Freetown", "Electrical installation and repairs."],
  ["Plumbing Services", "🚰", "Bo", "Water pipes, taps and plumbing repairs."],
  ["Motorcycle Mechanic", "🏍️", "Mile 91", "Motorcycle repairs and maintenance."],
  ["Car Mechanic", "🚗", "Kenema", "Vehicle inspection and mechanical repairs."],
  ["Photography", "📸", "Freetown", "Events, portraits and professional photography."],
  ["Graphic Design", "🎨", "Makeni", "Logos, posters, banners and graphic design."],
  ["Hairdressing", "💇", "Bo", "Hair styling, braiding and hair treatment."],
  ["Cleaning Services", "🧹", "Freetown", "Home and office cleaning services."],
  ["Construction Services", "🏗️", "Kenema", "Building and construction work."],
  ["Transport Services", "🚕", "Makeni", "Local transport and delivery services."]
];

const services = serviceData.map((item, index) => ({
  id: index + 1,
  name: item[0],
  icon: item[1],
  location: item[2],
  description: item[3],
  provider: "Sample Service Provider",
  phone: PLATFORM_PHONE
}));

// OPEN SERVICES PAGE
function showServices() {

  document.getElementById("categoryPage").classList.add("hidden");
  document.getElementById("shopPage").classList.add("hidden");
  document.getElementById("servicesPage").classList.remove("hidden");

  document.getElementById("serviceSearch").value = "";
  document.getElementById("serviceLocationFilter").value = "";

  displayServices();

  document.getElementById("servicesPage").scrollIntoView({
    behavior: "smooth"
  });

}

// DISPLAY SERVICES
function displayServices() {

  const container = document.getElementById("serviceContainer");

  const search =
    document.getElementById("serviceSearch").value.toLowerCase();

  const location =
    document.getElementById("serviceLocationFilter").value;

  container.innerHTML = "";

  const filtered = services.filter(service => {

    const matchesSearch =
      service.name.toLowerCase().includes(search) ||
      service.description.toLowerCase().includes(search);

    const matchesLocation =
      location === "" || service.location === location;

    return matchesSearch && matchesLocation;

  });

  if (filtered.length === 0) {
    container.innerHTML = "<p>No services found.</p>";
    return;
  }

  filtered.forEach(service => {

    const card = document.createElement("div");

    card.className = "service-card";

    card.innerHTML = `
      <div class="service-icon">${service.icon}</div>

      <h3>${service.name}</h3>

      <p class="small-detail">${service.description}</p>

      <p class="small-detail">Location: ${service.location}</p>

      <p class="small-detail">Provider: ${service.provider}</p>

      <button class="primary-btn"
        onclick="showServiceDetails(${service.id})">
        View Service
      </button>

      <button class="whatsapp-btn"
        onclick="contactService(${service.id})">
        WhatsApp Provider
      </button>

      <button class="call-btn"
        onclick="callService(${service.id})">
        Call Provider
      </button>
    `;

    container.appendChild(card);

  });

}

// FIND SERVICE
function findService(id) {
  return services.find(service => service.id === id);
}

// SERVICE DETAILS
function showServiceDetails(id) {

  const service = findService(id);

  if (!service) return;

  document.getElementById("serviceDetails").innerHTML = `

    <h2>${service.icon} ${service.name}</h2>

    <div class="seller-box">
      <p><strong>Description:</strong> ${service.description}</p>
      <p><strong>Location:</strong> ${service.location}</p>
      <p><strong>Provider:</strong> ${service.provider}</p>
      <p><strong>Phone:</strong> ${service.phone}</p>
    </div>

    <p>Contact the service provider to discuss the work and price.</p>

    <button class="whatsapp-btn"
      onclick="contactService(${service.id})">
      WhatsApp Provider
    </button>

    <button class="call-btn"
      onclick="callService(${service.id})">
      Call Provider
    </button>

  `;

  document.getElementById("serviceModal").style.display = "block";

}

// CONTACT SERVICE PROVIDER
function contactService(id) {

  const service = findService(id);

  if (!service) return;

  const message =
    `Hello, I am interested in your ${service.name}. Please provide more details.`;

  window.open(
    `https://wa.me/${service.phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

}

function callService(id) {

  const service = findService(id);

  if (!service) return;

  window.location.href = `tel:${service.phone}`;

}

// OPEN ORDER FORM
function openOrder(id) {

  selectedProduct = findProduct(id);

  if (!selectedProduct) return;

  document.getElementById("orderForm").reset();

  document.getElementById("selectedProductInfo").innerHTML = `
    <h3>${selectedProduct.name}</h3>
    <p>Seller: ${selectedProduct.seller}</p>
    <p>Seller phone: ${selectedProduct.phone}</p>
    <p>Location: ${selectedProduct.location}</p>
    <p>Price: NLe ${selectedProduct.price.toLocaleString()}</p>
  `;

  document.getElementById("quantity").value = 1;

  document.getElementById("screenshotPreview").style.display = "none";
  document.getElementById("screenshotPreview").src = "";

  document.getElementById("locationStatus").textContent =
    "Location has not been shared.";

  buyerLatitude = "";
  buyerLongitude = "";

  showDeliveryFields();
  showPaymentDetails();
  updateTotal();

  closeModal("productModal");

  document.getElementById("orderModal").style.display = "block";

}

// CALCULATE TOTAL
function updateTotal() {

  if (!selectedProduct) return;

  let quantity = Number(document.getElementById("quantity").value);

  if (!Number.isFinite(quantity) || quantity < 1) {
    quantity = 1;
  }

  const total = selectedProduct.price * quantity;

  document.getElementById("orderTotal").textContent =
    `Total: NLe ${total.toLocaleString()}`;

}

// DELIVERY OPTIONS
function showDeliveryFields() {

  const option = document.getElementById("deliveryOption").value;

  const addressFields = document.getElementById("addressFields");
  const locationFields = document.getElementById("locationFields");
  const addressInput = document.getElementById("deliveryAddress");

  addressFields.classList.add("hidden");
  locationFields.classList.add("hidden");

  addressInput.required = false;

  if (
    option === "Doorstep delivery" ||
    option === "Agreed pickup location"
  ) {

    addressFields.classList.remove("hidden");
    locationFields.classList.remove("hidden");

    addressInput.required = true;

  }

}

// SHARE BUYER LOCATION
function getBuyerLocation() {

  const status = document.getElementById("locationStatus");

  if (!navigator.geolocation) {

    status.textContent =
      "Your browser does not support location sharing.";

    return;

  }

  status.textContent = "Getting your location...";

  navigator.geolocation.getCurrentPosition(

    position => {

      buyerLatitude = position.coords.latitude;
      buyerLongitude = position.coords.longitude;

      status.textContent =
        "Location captured successfully.";

    },

    error => {

      status.textContent =
        "Could not get your location. Please allow location permission.";

    }

  );

}

// PAYMENT DETAILS
function showPaymentDetails() {

  const method = document.getElementById("paymentMethod").value;

  const receivingDetails = document.getElementById("receivingDetails");
  const senderFields = document.getElementById("senderNumberFields");
  const screenshotFields = document.getElementById("screenshotFields");

  receivingDetails.classList.add("hidden");
  senderFields.classList.add("hidden");
  screenshotFields.classList.add("hidden");

  document.getElementById("senderNumber").required = false;
  document.getElementById("paymentScreenshot").required = false;

  if (method === "Afrimoney" || method === "Orange Money") {

    const account = PAYMENT_ACCOUNTS[method];

    receivingDetails.classList.remove("hidden");
    senderFields.classList.remove("hidden");
    screenshotFields.classList.remove("hidden");

    document.getElementById("senderNumber").required = true;
    document.getElementById("paymentScreenshot").required = true;

    receivingDetails.innerHTML = `

      <h3>${method} Payment Details</h3>

      <p><strong>Send payment to:</strong> ${account.name}</p>

      <p><strong>Receiving Network:</strong> ${method}</p>

      <p><strong>Receiving Number:</strong> ${account.number}</p>

      <p class="notice">
        Check the receiving number before sending money.
        Enter your own sender number below and upload your screenshot.
      </p>

    `;

  }

  if (method === "Cash") {

    receivingDetails.classList.remove("hidden");

    receivingDetails.innerHTML = `

      <h3>Cash Payment</h3>

      <p>You selected cash payment.</p>

      <p>Arrange payment with the seller when collecting your order
      or receiving delivery.</p>

    `;

  }

}

// SCREENSHOT PREVIEW
function previewScreenshot() {

  const file = document.getElementById("paymentScreenshot").files[0];
  const preview = document.getElementById("screenshotPreview");

  preview.style.display = "none";
  preview.src = "";

  if (!file) return;

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp"
  ];

  if (!allowedTypes.includes(file.type)) {

    alert("Please upload a JPG, PNG or WEBP image.");

    document.getElementById("paymentScreenshot").value = "";

    return;

  }

  if (file.size > 5 * 1024 * 1024) {

    alert("Your screenshot must be 5 MB or smaller.");

    document.getElementById("paymentScreenshot").value = "";

    return;

  }

  const reader = new FileReader();

  reader.onload = function(event) {

    preview.src = event.target.result;
    preview.style.display = "block";

  };

  reader.readAsDataURL(file);

}

// SUBMIT ORDER
document.getElementById("orderForm").addEventListener("submit", function(event) {

  event.preventDefault();

  if (!selectedProduct) {

    alert("Please select a product first.");

    return;

  }

  const buyerName =
    document.getElementById("buyerName").value.trim();

  const buyerPhone =
    document.getElementById("buyerPhone").value.trim();

  const quantity =
    Number(document.getElementById("quantity").value);

  const delivery =
    document.getElementById("deliveryOption").value;

  const address =
    document.getElementById("deliveryAddress").value.trim();

  const payment =
    document.getElementById("paymentMethod").value;

  const senderNumber =
    document.getElementById("senderNumber").value.trim();

  const screenshot =
    document.getElementById("paymentScreenshot").files[0];

  if (!buyerName || !buyerPhone || !delivery || !payment ||
      !Number.isInteger(quantity) || quantity < 1) {

    alert("Please complete all required fields.");

    return;

  }

  if (
    (delivery === "Doorstep delivery" ||
     delivery === "Agreed pickup location") &&
    !address
  ) {

    alert("Please enter your delivery or pickup address.");

    return;

  }

  if (
    payment === "Afrimoney" ||
    payment === "Orange Money"
  ) {

    if (!senderNumber || !screenshot) {

      alert("Please enter your payment number and upload your screenshot.");

      return;

    }

  }

  const total = selectedProduct.price * quantity;

  const reference =
    "KSC" + Date.now().toString().slice(-8);

  let paymentStatus = "Payment pending verification";
  let receivingMessage = "";

  if (payment === "Afrimoney" || payment === "Orange Money") {

    const account = PAYMENT_ACCOUNTS[payment];

    receivingMessage =
      `Receiving Network: ${payment}\n` +
      `Receiving Account: ${account.name}\n` +
      `Receiving Number: ${account.number}\n` +
      `Buyer's Sender Number: ${senderNumber}\n` +
      `Screenshot Filename: ${screenshot.name}\n`;

  } else {

    paymentStatus =
      "Cash payment selected - payment not yet received";

  }

  let locationMessage = "Location not shared.";

  if (buyerLatitude && buyerLongitude) {

    locationMessage =
      `https://www.google.com/maps?q=${buyerLatitude},${buyerLongitude}`;

  }

  const message =

    `NEW ORDER - KEPLER SMALL BUSINESS CONNECT SL\n\n` +

    `Reference: ${reference}\n` +

    `Buyer: ${buyerName}\n` +

    `Buyer Phone: ${buyerPhone}\n\n` +

    `Product: ${selectedProduct.name}\n` +

    `Seller: ${selectedProduct.seller}\n` +

    `Seller Phone: ${selectedProduct.phone}\n` +

    `Quantity: ${quantity}\n` +

    `Unit Price: NLe ${selectedProduct.price}\n` +

    `TOTAL: NLe ${total}\n\n` +

    `Delivery: ${delivery}\n` +

    `Address: ${address || "Collect from seller"}\n` +

    `Buyer Location: ${locationMessage}\n\n` +

    `Payment Method: ${payment}\n` +

    receivingMessage +

    `Payment Status: ${paymentStatus}`;

  document.getElementById("successReference").textContent =
    "Order Reference: " + reference;

  document.getElementById("successPaymentStatus").textContent =
    paymentStatus;

  closeModal("orderModal");

  document.getElementById("successModal").style.display = "block";

  window.open(
    `https://wa.me/${PLATFORM_PHONE}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  this.reset();

  showPaymentDetails();
  showDeliveryFields();

});

// CLOSE MODALS
function closeModal(id) {

  document.getElementById(id).style.display = "none";

}

// CLOSE MODAL WHEN CLICKING OUTSIDE
window.addEventListener("click", function(event) {

  ["productModal", "serviceModal", "orderModal", "successModal"].forEach(id => {

    const modal = document.getElementById(id);

    if (event.target === modal) {
      modal.style.display = "none";
    }

  });

});

// LOAD CATEGORY CARDS WHEN WEBSITE OPENS
createCategories();

