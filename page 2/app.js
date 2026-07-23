// 1. DATA SOURCE FOR DESTINATIONS & TOURS
const DESTINATIONS = [
  {
    id: 'fuji',
    title: 'Mount Fuji',
    location: 'Honshu, Japan',
    category: 'Cultural',
    price: 1250,
    rating: 4.9,
    duration: '7 Days',
    image: 'assets/fuji.jpg',
    description: 'Experience the mystical beauty of Mount Fuji during cherry blossom season. Climb the sacred slopes, visit ancient torii gates, and relax in traditional hot spring onsens at the foot of the snow-capped peak.'
  },
  {
    id: 'amalfi',
    title: 'Amalfi Coast',
    location: 'Campania, Italy',
    category: 'Relaxation',
    price: 1890,
    rating: 4.8,
    duration: '5 Days',
    image: 'assets/amalfi.jpg',
    description: 'Journey along one of Europe\'s most dramatic coastlines. Wander through the vertical colorful towns of Positano and Amalfi, enjoy authentic Italian lemon cuisine, and cruise the deep blue Mediterranean sea.'
  },
  {
    id: 'petra',
    title: 'Ancient Petra',
    location: 'Ma\'an, Jordan',
    category: 'Cultural',
    price: 1450,
    rating: 4.95,
    duration: '6 Days',
    image: 'assets/petra.jpg',
    description: 'Step back in time to the capital of the Nabataean Kingdom. Walk through the narrow Siq canyon and witness the breathtaking Treasury building carved directly into the rose-red sandstone cliffs.'
  },
  {
    id: 'iceland',
    title: 'Icelandic Auroras',
    location: 'Reykjavik, Iceland',
    category: 'Adventure',
    price: 2100,
    rating: 4.75,
    duration: '8 Days',
    image: 'assets/iceland.jpg',
    description: 'Chase the ethereal Northern Lights across frozen lakes and volcanic plains. Soak in geothermal lagoons, explore majestic ice caves, and stand in awe of roaring, ice-framed waterfalls.'
  }
];

// 2. INITIALIZATION ON DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', () => {
  initGlobalUI();
  
  // Route specific initializers
  if (document.getElementById('carousel-scroller')) {
    initHomeCarousel();
  }
  
  if (document.getElementById('tours-container')) {
    initToursPage();
  }
  
  if (document.getElementById('destinations-container')) {
    initDestinationsPage();
  }
  
  if (document.getElementById('booking-wizard')) {
    initBookingPage();
  }
});

// 3. GLOBAL UI BEHAVIORS (Header scroll & Mobile menu)
function initGlobalUI() {
  // Scrolled Header Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });

  // Mobile Menu Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('mobile-open');
      if (isOpen) {
        navMenu.classList.remove('mobile-open');
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('mobile-open');
        navToggle.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // Active Link Highlighter based on pathname
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// 4. HOME PAGE CAROUSEL POPULATION & SCROLL FALLBACK
function initHomeCarousel() {
  const scroller = document.getElementById('carousel-scroller');
  scroller.innerHTML = DESTINATIONS.map(dest => `
    <li class="destination-card entry" data-id="${dest.id}">
      <div class="card-rating">
        <span>★</span> ${dest.rating}
      </div>
      <div class="card-img-wrapper">
        <img class="card-img" src="${dest.image}" alt="${dest.title}" loading="lazy">
      </div>
      <div class="card-overlay">
        <span class="card-tag">${dest.category}</span>
        <h3 class="card-title">${dest.title}</h3>
        <p class="card-meta">
          <span>📍 ${dest.location}</span>
          <span class="card-price">From $${dest.price}</span>
        </p>
      </div>
    </li>
  `).join('');

  // Add click listener to show details dialog
  scroller.addEventListener('click', (e) => {
    const card = e.target.closest('.destination-card');
    if (card) {
      const destId = card.getAttribute('data-id');
      openDestinationDetails(destId);
    }
  });

  // Fallback for browsers that don't support CSS scroll-driven animations
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    const entries = scroller.querySelectorAll('.entry');
    const animations = new Map();

    entries.forEach(entry => {
      // Create a paused Web Animation on each card
      const animation = entry.animate(
        [
          { scale: '0.9', opacity: '0.6' },
          { scale: '1', opacity: '1' },
          { scale: '0.9', opacity: '0.6' }
        ],
        {
          duration: 1,
          fill: 'both'
        }
      );
      animation.pause();
      animations.set(entry, animation);
    });

    const tick = () => {
      const scrollerRect = scroller.getBoundingClientRect();

      entries.forEach(entry => {
        const animation = animations.get(entry);
        if (!animation) return;

        const entryRect = entry.getBoundingClientRect();
        // Calculate progress of card center relative to scroller viewport
        const cardCenter = entryRect.left + entryRect.width / 2;
        const progress = (cardCenter - scrollerRect.left) / scrollerRect.width;
        
        // Clamp between 0 and 1
        const clampedProgress = Math.max(0, Math.min(1, progress));
        animation.currentTime = clampedProgress;
      });
    };

    scroller.addEventListener('scroll', tick);
    // Initial run after browser layout settles
    setTimeout(tick, 100);
  }
}

// 5. TOURS SEARCH AND FILTERING PAGE
function initToursPage() {
  const container = document.getElementById('tours-container');
  const searchInput = document.getElementById('tour-search');
  const categoryFilter = document.getElementById('tour-category');
  const priceFilter = document.getElementById('tour-price');
  
  function renderTours(filteredTours) {
    if (filteredTours.length === 0) {
      container.innerHTML = `
        <div class="glass-card text-center" style="grid-column: 1/-1; padding: var(--space-2xl);">
          <h3 class="card-title" style="margin-bottom: var(--space-sm);">No tours found</h3>
          <p style="color: var(--color-text-muted);">Try adjusting your search filters to find available adventures.</p>
        </div>
      `;
      return;
    }
    
    container.innerHTML = filteredTours.map(dest => `
      <div class="destination-card" data-id="${dest.id}" style="scroll-snap-align: none; flex: initial; animation: none;">
        <div class="card-rating">
          <span>★</span> ${dest.rating}
        </div>
        <div class="card-img-wrapper">
          <img class="card-img" src="${dest.image}" alt="${dest.title}" loading="lazy">
        </div>
        <div class="card-overlay">
          <span class="card-tag">${dest.category} | ${dest.duration}</span>
          <h3 class="card-title">${dest.title}</h3>
          <p style="color: var(--color-text-muted); font-size: 0.85rem; margin-bottom: var(--space-md);">
            ${dest.description.substring(0, 85)}...
          </p>
          <p class="card-meta">
            <span>📍 ${dest.location}</span>
            <span class="card-price">From $${dest.price}</span>
          </p>
        </div>
      </div>
    `).join('');
  }

  function applyFilters() {
    const query = searchInput.value.toLowerCase();
    const cat = categoryFilter.value;
    const maxPrice = parseInt(priceFilter.value) || Infinity;
    
    const filtered = DESTINATIONS.filter(t => {
      const matchQuery = t.title.toLowerCase().includes(query) || t.location.toLowerCase().includes(query);
      const matchCat = cat === 'all' || t.category === cat;
      const matchPrice = t.price <= maxPrice;
      return matchQuery && matchCat && matchPrice;
    });
    
    renderTours(filtered);
  }

  // Bind Events
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
  if (priceFilter) {
    const priceOutput = document.getElementById('price-val');
    priceFilter.addEventListener('input', (e) => {
      if (priceOutput) priceOutput.textContent = `$${e.target.value}`;
      applyFilters();
    });
  }

  // Card details trigger
  container.addEventListener('click', (e) => {
    const card = e.target.closest('.destination-card');
    if (card) {
      const destId = card.getAttribute('data-id');
      openDestinationDetails(destId);
    }
  });

  // Initial render
  renderTours(DESTINATIONS);
}

// 6. DESTINATIONS PAGEPOPULATION
function initDestinationsPage() {
  const container = document.getElementById('destinations-container');
  
  container.innerHTML = DESTINATIONS.map(dest => `
    <div class="destination-card" data-id="${dest.id}" style="scroll-snap-align: none; flex: initial; animation: none;">
      <div class="card-rating">
        <span>★</span> ${dest.rating}
      </div>
      <div class="card-img-wrapper">
        <img class="card-img" src="${dest.image}" alt="${dest.title}" loading="lazy">
      </div>
      <div class="card-overlay">
        <span class="card-tag">${dest.category}</span>
        <h3 class="card-title">${dest.title}</h3>
        <p class="card-meta">
          <span>📍 ${dest.location}</span>
          <span class="card-price">From $${dest.price}</span>
        </p>
      </div>
    </div>
  `).join('');

  container.addEventListener('click', (e) => {
    const card = e.target.closest('.destination-card');
    if (card) {
      const destId = card.getAttribute('data-id');
      openDestinationDetails(destId);
    }
  });
}

// 7. DIALOG HANDLER FOR DETAILS MODAL
function openDestinationDetails(destId) {
  const dest = DESTINATIONS.find(d => d.id === destId);
  if (!dest) return;

  // Check if dialog exists, otherwise create it
  let dialog = document.getElementById('details-dialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'details-dialog';
    dialog.className = 'detail-dialog glass-card';
    document.body.appendChild(dialog);
  }

  dialog.innerHTML = `
    <button class="dialog-close" aria-label="Close dialog">✕</button>
    <div class="dialog-banner">
      <img src="${dest.image}" alt="${dest.title}">
    </div>
    <div class="dialog-body">
      <div class="dialog-header">
        <div>
          <span class="card-tag" style="font-size: 0.85rem;">${dest.category}</span>
          <h2 class="dialog-title">${dest.title}</h2>
          <p style="color: var(--color-text-muted); font-size: 0.95rem;">📍 ${dest.location}</p>
        </div>
        <div class="card-rating" style="position: static; font-size: 1rem;">
          <span>★</span> ${dest.rating}
        </div>
      </div>
      
      <p class="dialog-desc">${dest.description}</p>
      
      <div class="dialog-info-row">
        <div class="info-item">
          <span class="info-label">Duration</span>
          <span class="info-val">${dest.duration}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Group Size</span>
          <span class="info-val">Max 12 People</span>
        </div>
        <div class="info-item">
          <span class="info-label">Price per person</span>
          <span class="info-val" style="color: var(--color-secondary);">$${dest.price}</span>
        </div>
      </div>
      
      <div class="dialog-actions">
        <button class="btn btn-secondary btn-close-trigger">Back to Explore</button>
        <a href="booking.html?dest=${dest.id}" class="btn btn-primary">Book This Voyage</a>
      </div>
    </div>
  `;

  // Close actions
  const closeBtn = dialog.querySelector('.dialog-close');
  const backBtn = dialog.querySelector('.btn-close-trigger');
  
  const closeDialog = () => {
    dialog.close();
  };

  closeBtn.addEventListener('click', closeDialog);
  backBtn.addEventListener('click', closeDialog);
  
  // Close on clicking backdrop
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      closeDialog();
    }
  });

  dialog.showModal();
}

// 8. BOOKING FORM WIZARD
function initBookingPage() {
  const wizard = document.getElementById('booking-wizard');
  const steps = wizard.querySelectorAll('.wizard-step');
  const nodes = document.querySelectorAll('.step-node');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  
  let currentStep = 0;
  
  // Read query params to prefill destination
  const urlParams = new URLSearchParams(window.location.search);
  const destParam = urlParams.get('dest');
  const destSelect = document.getElementById('book-destination');
  
  // Populate select options
  if (destSelect) {
    destSelect.innerHTML = `
      <option value="" disabled selected>Choose your sanctuary</option>
      ${DESTINATIONS.map(d => `<option value="${d.id}" data-price="${d.price}">${d.title} — $${d.price}</option>`).join('')}
    `;
    
    if (destParam) {
      destSelect.value = destParam;
      calculatePrice();
    }
    
    destSelect.addEventListener('change', calculatePrice);
  }

  // Calculate booking pricing dynamically
  const travelersInput = document.getElementById('book-travelers');
  if (travelersInput) {
    travelersInput.addEventListener('input', calculatePrice);
  }
  
  function calculatePrice() {
    const select = document.getElementById('book-destination');
    const travelers = parseInt(document.getElementById('book-travelers').value) || 1;
    const displayDest = document.getElementById('receipt-destination');
    const displayPrice = document.getElementById('receipt-price');
    const displayTravelers = document.getElementById('receipt-travelers');
    const displayTotal = document.getElementById('receipt-total');
    
    if (!select || !select.value) return;
    
    const selectedOption = select.options[select.selectedIndex];
    const unitPrice = parseFloat(selectedOption.getAttribute('data-price'));
    const destName = selectedOption.text.split(' — ')[0];
    
    const subtotal = unitPrice * travelers;
    const tax = subtotal * 0.08; // 8% local tourism tax/fees
    const total = subtotal + tax;
    
    if (displayDest) displayDest.textContent = destName;
    if (displayPrice) displayPrice.textContent = `$${unitPrice} USD`;
    if (displayTravelers) displayTravelers.textContent = travelers;
    if (displayTotal) displayTotal.textContent = `$${total.toFixed(2)} USD`;
    
    // Also save in travel pass container for final step
    const passDest = document.getElementById('pass-val-destination');
    const passGuests = document.getElementById('pass-val-guests');
    const passCost = document.getElementById('pass-val-cost');
    
    if (passDest) passDest.textContent = destName;
    if (passGuests) passGuests.textContent = travelers;
    if (passCost) passCost.textContent = `$${total.toFixed(2)}`;
  }

  function updateWizard() {
    // Show/Hide steps
    steps.forEach((step, idx) => {
      if (idx === currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    // Update progress nodes
    nodes.forEach((node, idx) => {
      if (idx < currentStep) {
        node.className = 'step-node completed';
        node.textContent = '✓';
      } else if (idx === currentStep) {
        node.className = 'step-node active';
        node.textContent = idx + 1;
      } else {
        node.className = 'step-node';
        node.textContent = idx + 1;
      }
    });

    // Handle button labels and visibility
    if (currentStep === 0) {
      btnPrev.style.visibility = 'hidden';
    } else {
      btnPrev.style.visibility = 'visible';
    }

    if (currentStep === steps.length - 1) {
      // Hide navigation buttons on success pass step
      document.querySelector('.wizard-nav').style.display = 'none';
      document.querySelector('.steps-indicator').style.display = 'none';
    } else if (currentStep === steps.length - 2) {
      btnNext.textContent = 'Confirm Booking & Pay';
      btnNext.className = 'btn btn-gold';
    } else {
      btnNext.textContent = 'Continue';
      btnNext.className = 'btn btn-primary';
    }
  }

  // Validate form fields in current step before moving forward
  function validateStep() {
    const inputs = steps[currentStep].querySelectorAll('[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        input.reportValidity();
        isValid = false;
      }
    });
    
    return isValid;
  }

  btnNext.addEventListener('click', () => {
    if (validateStep()) {
      currentStep++;
      if (currentStep < steps.length) {
        updateWizard();
        if (currentStep === steps.length - 1) {
          generateTravelPass();
        }
      }
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      updateWizard();
    }
  });

  function generateTravelPass() {
    // Fill in passenger names and boarding details
    const nameInput = document.getElementById('book-name').value;
    const dateInput = document.getElementById('book-date').value;
    const passPassenger = document.getElementById('pass-val-passenger');
    const passDate = document.getElementById('pass-val-date');
    const passCode = document.getElementById('pass-val-code');
    
    if (passPassenger) passPassenger.textContent = nameInput || 'Voyager';
    if (passDate) passDate.textContent = dateInput || 'TBD';
    
    // Generate unique travel voucher code
    if (passCode) {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = 'AE-';
      for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      passCode.textContent = code;
    }
  }

  // Initialize view
  updateWizard();
}
