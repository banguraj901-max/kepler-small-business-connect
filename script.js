
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
      ["Ladies Dress", 250, "Freetown", "images/ladies-dress.png"],
      ["Men's Shirt", 180, "Bo", "images/mens-shirt.png"],
      ["School Uniform", 220, "Makeni", "images/school-uniform.png"],
      ["African Print Dress", 300, "Kenema", "images/african-print-dress.png"],
      ["Men's Traditional Wear", 350, "Freetown", "images/mens-traditional-wear.png"],
      ["Ladies Skirt", 150, "Mile 91", "images/ladies-skirt.png"],
      ["Children's Clothes", 120, "Bo", "images/childrens-clothes.png"],
      ["Tailoring Service", 200, "Freetown", "images/tailoring-service.png"],
      ["Ladies Blouse", 180, "Makeni", "images/ladies-blouse.png"],
      ["Traditional Outfit", 400, "Kenema", "images/traditional-outfit.png"]
    ]
  },

  {
    category: "Agriculture & Local Products",
    icon: "🌾",
    description: "Rice, cassava, palm oil and local produce.",
    items: [
      ["Fresh Rice", 250, "Bo","images/fresh-rice.png"],
      ["Cassava", 80, "Mile 91","images/cassava.png"],
      ["Palm Oil", 150, "Kenema","images/palm-oil.png"],
      ["Groundnuts", 100, "Makeni","images/groundnuts.png"],
      ["Fresh Sweet Potatoes", 90, "Bo","images/fresh-sweet-potatoes.png"],
      ["Local Pepper", 40, "Freetown","images/local-pepper.png"],
      ["Cocoa", 300, "Kenema","images/cocoa.png"],
      ["Fresh Tomatoes", 70, "Mile 91","images/fresh-tomatoes.png"],
      ["Gari", 100, "Bo","images/gari.png"],
      ["Fresh Vegetables", 60, "Freetown","images/fresh-vegetables.png"]
    ]
  },

  {
    category: "Phones & Accessories",
    icon: "📱",
    description: "Phones, chargers and electronic accessories.",
    items: [
      ["Android Smartphone", 2500, "Freetown","images/android-smartphone.png"],
      ["Phone Charger", 120, "Bo","images/phone-charger.png"],
      ["Power Bank", 350, "Makeni","images/power-bank.png"],
      ["Phone Earphones", 100, "Kenema","images/phone-earphones.png"],
      ["Phone Cover", 80, "Freetown","images/phone-cover.png"],
      ["Bluetooth Speaker", 400, "Bo","images/bluetooth-speaker.png"],
      ["Memory Card", 150, "Mile 91","images/memory-card.png"],
      ["USB Cable", 60, "Makeni","images/usb-cable.png"],
      ["Smart Watch", 500, "Freetown","images/smart-watch.png"],
      ["Phone Screen Protector", 50, "Kenema","images/phone-screen-protector.png"]
    ]
  },

  {
    category: "Accommodation",
    icon: "🏠",
    description: "Rooms, apartments and guest houses.",
    items: [
      ["Single Room", 800, "Freetown","images/single-room.png"],
      ["Self-Contained Room", 1500, "Bo","images/self-contained-room.png"],
      ["Two-Bedroom Apartment", 3500, "Makeni","images/two-bedroom-apartment.png"],
      ["Guest House Room", 600, "Kenema","images/guest-house-room.png"],
      ["Family Apartment", 4000, "Freetown","images/family-apartment.png"],
      ["Student Accommodation", 700, "Mile 91","images/student-accommodation.png"],
      ["Short-Stay Room", 500, "Bo","images/short-stay-room.png"],
      ["Lodge Room", 900, "Makeni","images/lodge-room.png"],
      ["One-Bedroom Apartment", 2000, "Kenema","images/one-bedroom-apartment.png"],
      ["Guest House Apartment", 2500, "Freetown","images/guest-house-apartment.png"]
    ]
  },

  {
    category: "Food & Groceries",
    icon: "🛒",
    description: "Food, groceries and everyday household supplies.",
    items: [
      ["Bag of Rice", 650, "Freetown", "images/bag-of-rice.png"],
      ["Cooking Oil", 180, "Bo", "images/cooking-oil.png"],
      ["Fresh Fish", 120, "Kenema", "images/fresh-fish.png"],
      ["Frozen Chicken", 250, "Makeni", "images/frozen-chicken.png"],
      ["Onions", 80, "Mile 91", "images/onions.png"],
      ["Sugar", 100, "Freetown", "images/sugar.png"],
      ["Milk Powder", 150, "Bo", "images/milk-powder.png"],
      ["Eggs", 120, "Kenema", "images/eggs.png"],
      ["Spaghetti", 90, "Makeni", "images/spaghetti.png"],
      ["Tomato Paste", 70, "Mile 91", "images/tomato-paste.png"]
    ]
  },

  {
    category: "Beauty & Personal Care",
    icon: "💄",
    description: "Skincare, makeup, hair products and toiletries.",
    items: [
      ["Body Lotion", 120, "Freetown","images/body-lotion.png"],
      ["Face Cream", 100, "Bo","images/face-cream.png"],
      ["Hair Shampoo", 90, "Kenema","images/hair-shampoo.png"],
      ["Conditioner", 110, "Makeni","images/conditioner.png"],
      ["Perfume", 250, "Freetown","images/perfume.png"],
      ["Makeup Kit", 300, "Bo","images/makeup-kit.png"],
      ["Hair Attachment", 180, "Mile 91","images/hair-attachment.png"],
      ["Bathing Soap", 40, "Kenema","images/bathing-soap.png"],
      ["Hair Dryer", 450, "Makeni","images/hair-dryer.png"],
      ["Skin Care Set", 350, "Freetown","images/skin-care-set.png"]
    ]
  },

  {
    category: "Furniture & Home Appliances",
    icon: "🛋️",
    description: "Furniture and household appliances.",
    items: [
      ["Plastic Chair", 150, "Freetown","images/plastic-chair.png"],
      ["Wooden Table", 600, "Bo","images/wooden-table.png"],
      ["Bed Frame", 1200, "Makeni","images/bed-frame.png"],
      ["Mattress", 900, "Kenema","images/mattress.png"],
      ["Standing Fan", 500, "Freetown","images/standing-fan.png"],
      ["Electric Kettle", 250, "Bo","images/electric-kettle.png"],
      ["Refrigerator", 4500, "Makeni","images/refrigerator.png"],
      ["Wardrobe", 1800, "Kenema","images/wardrobe.png"],
      ["Television Stand", 700, "Mile 91","images/television-stand.png"],
      ["Dining Table", 1500, "Freetown","images/dining-table.png"]
    ]
  },

  {
    category: "Building Materials",
    icon: "🧱",
    description: "Cement, roofing sheets, paint and construction supplies.",
    items: [
      ["Bag of Cement", 120, "Freetown","images/bag-of-cement.png"],
      ["Roofing Sheets", 180, "Bo","images/roofing-sheets.png"],
      ["Wall Paint", 350, "Kenema","images/wall-paint.png"],
      ["Building Blocks", 15, "Makeni","images/building-blocks.png"],
      ["Iron Rods", 100, "Mile 91","images/iron-rods.png"],
      ["Ceiling Boards", 250, "Freetown","images/ceiling-boards.png"],
      ["Floor Tiles", 300, "Bo","images/floor-tiles.png"],
      ["Plumbing Pipes", 120, "Kenema","images/plumbing-pipes.png"],
      ["Nails", 50, "Makeni","images/nails.png"],
      ["Electrical Wires", 200, "Freetown","images/electrical-wires.png"]
    ]
  },

  {
    category: "Vehicles & Spare Parts",
    icon: "🏍️",
    description: "Motorcycles, car parts, tyres and accessories.",
    items: [
      ["Motorcycle Tyre", 350, "Freetown","images/motorcycle-tyre.png"],
      ["Motorcycle Battery", 500, "Bo","images/motorcycle-battery.png"],
      ["Car Battery", 900, "Kenema","images/car-battery.png"],
      ["Engine Oil", 180, "Makeni","images/engine-oil.png"],
      ["Motorcycle Helmet", 250, "Mile 91","images/motorcycle-helmet.png"],
      ["Car Tyre", 1200, "Freetown","images/car-tyre.png"],
      ["Brake Pads", 300, "Bo","images/brake-pads.png"],
      ["Motorcycle Chain", 220, "Kenema","images/motorcycle-chain.png"],
      ["Car Headlight", 450, "Makeni","images/car-headlight.png"],
      ["Motorcycle Spare Parts", 400, "Freetown","images/motorcycle-spare-parts.png"]
    ]
  },

  {
    category: "Computers & Office Equipment",
    icon: "💻",
    description: "Laptops, printers, office supplies and accessories.",
    items: [
      ["Laptop Computer", 4500, "Freetown","images/laptop-computer.png"],
      ["Desktop Computer", 5000, "Bo","images/desktop-computer.png"],
      ["Computer Mouse", 120, "Kenema","images/computer-mouse.png"],
      ["Computer Keyboard", 180, "Makeni","images/computer-keyboard.png"],
      ["Printer", 1600, "Freetown","images/printer.png"],
      ["Laptop Charger", 250, "Bo","images/laptop-charger.png"],
      ["USB Flash Drive", 100, "Mile 91","images/flash-drive.png"],
      ["Computer Monitor", 1200, "Kenema","images/monitor.png"],
      ["Office Chair", 800, "Makeni","images/chair.png"],
      ["Printer Paper", 90, "Freetown","images/paper.png"]
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
      location: item[3],
      category: group.category,
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

// const services = serviceData.map((item, index) => ({
//   id: index + 1,
//   name: item[0],
//   price: item[1],
//   location: item[2],
//   image: item[3],
//   category: group.category,
//   seller: "sample seller",
//   phone: PLATFORM_PHONE,
//   description:'contact the seller for more information about ' + item[0]
// }));
products.push({
  id: productNumber++,
  name: item[0],
  price: item[1],
  location: item[2],
  image: item[3],
  category: group.category,
  seller: "Sample Seller",
  phone: PLATFORM_PHONE,
  description: `Contact the seller for more information about ${item[0]}.`
});
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

