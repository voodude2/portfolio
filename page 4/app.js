/* ==========================================================================
   PAWFECT HAVEN - PET SHOP & SPA LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    const state = {
        cart: [],
        spaPet: 'dog_large',
        spaPackage: 'full'
    };

    // Safe Execution Wrapper
    const inits = [
        initNavigation,
        initCart,
        initCatalogFilter,
        initSpaCalculator
    ];

    inits.forEach(fn => {
        try {
            fn();
        } catch (err) {
            console.error(`Pet shop init error in ${fn.name}:`, err);
        }
    });

    /* ==========================================
       1. NAVIGATION LOGIC
       ========================================== */
    function initNavigation() {
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (navbar) {
                if (window.scrollY > 40) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    }

    /* ==========================================
       2. SHOPPING CART DRAWER LOGIC
       ========================================== */
    function initCart() {
        const openCartBtn = document.getElementById('openCartBtn');
        const closeCartBtn = document.getElementById('closeCartBtn');
        const cartDrawer = document.getElementById('cartDrawer');
        const cartOverlay = document.getElementById('cartOverlay');
        const addCartBtns = document.querySelectorAll('.btn-add-cart');
        const btnCheckout = document.getElementById('btnCheckout');

        if (openCartBtn && cartDrawer && cartOverlay) {
            openCartBtn.addEventListener('click', toggleCart);
            if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
            cartOverlay.addEventListener('click', toggleCart);
        }

        function toggleCart() {
            cartDrawer.classList.toggle('active');
            cartOverlay.classList.toggle('active');
        }

        addCartBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.getAttribute('data-id');
                const name = btn.getAttribute('data-name');
                const price = parseFloat(btn.getAttribute('data-price')) || 0;
                const img = btn.getAttribute('data-img');

                addToCart(id, name, price, img);
                showToast(`🐾 Added "${name}" to cart!`);
            });
        });

        if (btnCheckout) {
            btnCheckout.addEventListener('click', () => {
                if (state.cart.length === 0) {
                    showToast('⚠️ Your cart is empty!');
                    return;
                }

                btnCheckout.disabled = true;
                btnCheckout.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Order...';

                setTimeout(() => {
                    btnCheckout.disabled = false;
                    btnCheckout.innerHTML = '<i class="fa-solid fa-credit-card"></i> Proceed to Checkout';
                    state.cart = [];
                    updateCartUI();
                    toggleCart();
                    showToast('🎉 Order Placed Successfully! Thank you for choosing Pawfect Haven.');
                    triggerConfetti();
                }, 1200);
            });
        }
    }

    function addToCart(id, name, price, img) {
        const existing = state.cart.find(item => item.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            state.cart.push({ id, name, price, img, qty: 1 });
        }
        updateCartUI();
    }

    function updateCartUI() {
        const badge = document.getElementById('cartBadgeCount');
        const list = document.getElementById('cartItemsList');
        const totalText = document.getElementById('cartTotalPrice');

        const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
        const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

        if (badge) badge.textContent = totalItems;
        if (totalText) totalText.textContent = `$${totalPrice.toFixed(2)}`;

        if (list) {
            if (state.cart.length === 0) {
                list.innerHTML = `<div style="text-align: center; color: var(--text-muted); margin-top: 40px;"><i class="fa-solid fa-bag-shopping" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--border-light);"></i><p>Your shopping cart is empty</p></div>`;
            } else {
                list.innerHTML = state.cart.map(item => `
                    <div class="cart-item-row">
                        <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                        <div style="flex-grow: 1;">
                            <div style="font-weight: 700; font-size: 0.95rem;">${item.name}</div>
                            <div style="color: var(--primary-coral); font-weight: 800; font-size: 0.9rem;">$${item.price.toFixed(2)} x ${item.qty}</div>
                        </div>
                        <button onclick="window.removeCartItem('${item.id}')" style="background: none; border: none; color: var(--text-muted); cursor: pointer;"><i class="fa-solid fa-trash-can"></i></button>
                    </div>
                `).join('');
            }
        }
    }

    window.removeCartItem = function(id) {
        state.cart = state.cart.filter(item => item.id !== id);
        updateCartUI();
    };

    /* ==========================================
       3. CATALOG CATEGORY FILTERING LOGIC
       ========================================== */
    function initCatalogFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                productCards.forEach(card => {
                    const cat = card.getAttribute('data-category');
                    if (filter === 'all' || filter === cat) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    /* ==========================================
       4. GROOMING SPA CALCULATOR LOGIC
       ========================================== */
    function initSpaCalculator() {
        const petSelect = document.getElementById('petTypeSelect');
        const pkgSelect = document.getElementById('spaPackageSelect');
        const priceText = document.getElementById('spaPriceText');
        const durText = document.getElementById('spaDurationText');
        const bookBtn = document.getElementById('btnBookSpaNow');

        if (!petSelect || !pkgSelect) return;

        const prices = {
            dog_small: { base: 45, time: 60 },
            dog_large: { base: 65, time: 90 },
            cat: { base: 50, time: 75 }
        };

        const packages = {
            basic: { add: 0, timeAdd: 0 },
            full: { add: 30, timeAdd: 30 },
            deluxe: { add: 50, timeAdd: 45 }
        };

        function recalculateSpa() {
            const petKey = petSelect.value;
            const pkgKey = pkgSelect.value;

            const petInfo = prices[petKey] || prices.dog_large;
            const pkgInfo = packages[pkgKey] || packages.full;

            const totalCost = petInfo.base + pkgInfo.add;
            const totalDuration = petInfo.time + pkgInfo.timeAdd;

            if (priceText) priceText.textContent = `$${totalCost.toFixed(2)}`;
            if (durText) durText.textContent = `Estimated Spa Time: ~${totalDuration} Minutes`;
        }

        petSelect.addEventListener('change', recalculateSpa);
        pkgSelect.addEventListener('change', recalculateSpa);
        recalculateSpa();

        if (bookBtn) {
            bookBtn.addEventListener('click', () => {
                bookBtn.disabled = true;
                bookBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Reserving Time Slot...';

                setTimeout(() => {
                    bookBtn.disabled = false;
                    bookBtn.innerHTML = '<i class="fa-solid fa-calendar-plus"></i> Confirm Spa Reservation';
                    showToast('🫧 Spa Reservation Confirmed! We look forward to seeing your pet.');
                    triggerConfetti();
                }, 1000);
            });
        }
    }

    /* ==========================================
       5. CONFETTI & TOAST UTILITIES
       ========================================== */
    function triggerConfetti() {
        const count = 50;
        const colors = ['#FF6B6B', '#FFD166', '#06D6A0', '#4EA8DE'];

        for (let i = 0; i < count; i++) {
            const conf = document.createElement('div');
            conf.style.position = 'fixed';
            conf.style.left = Math.random() * 100 + 'vw';
            conf.style.top = '-10px';
            conf.style.width = Math.random() * 8 + 6 + 'px';
            conf.style.height = Math.random() * 8 + 6 + 'px';
            conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            conf.style.borderRadius = '50%';
            conf.style.zIndex = '9999';
            conf.style.pointerEvents = 'none';
            conf.style.transition = 'transform 2.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 2.4s ease';

            document.body.appendChild(conf);

            setTimeout(() => {
                conf.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`;
                conf.style.opacity = '0';
            }, 40);

            setTimeout(() => conf.remove(), 2600);
        }
    }

    window.showToast = function(msg) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<span>${msg}</span>`;

        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    };

});
