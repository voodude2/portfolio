/* ==========================================================================
   APEX HUNTER - HUNTING STORE & FIREARMS CATALOG LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Safe Execution Wrapper
    const inits = [
        initNavigation,
        initCatalogFiltering,
        initSpecModal
    ];

    inits.forEach(fn => {
        try {
            fn();
        } catch (err) {
            console.error(`Apex Hunter init error in ${fn.name}:`, err);
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
       2. CATALOG & CALIBER FILTERING LOGIC
       ========================================== */
    function initCatalogFiltering() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const caliberSelect = document.getElementById('caliberSelect');
        const cards = document.querySelectorAll('.firearm-card');

        let activeCat = 'all';
        let activeCaliber = 'all';

        // Read URL query params (e.g. catalog.html?cat=rifle)
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('cat');
        if (catParam) {
            activeCat = catParam;
            filterBtns.forEach(b => {
                if (b.getAttribute('data-filter') === catParam) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeCat = btn.getAttribute('data-filter');
                applyFilters();
            });
        });

        if (caliberSelect) {
            caliberSelect.addEventListener('change', () => {
                activeCaliber = caliberSelect.value;
                applyFilters();
            });
        }

        function applyFilters() {
            cards.forEach(card => {
                const cat = card.getAttribute('data-category');
                const cal = card.getAttribute('data-caliber');

                const matchCat = (activeCat === 'all' || activeCat === cat);
                const matchCal = (activeCaliber === 'all' || activeCaliber === cal || cal === 'all');

                if (matchCat && matchCal) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }
    }

    /* ==========================================
       3. FIREARMS SPECIFICATION MODAL
       ========================================== */
    function initSpecModal() {
        const modal = document.getElementById('specModal');
        const closeBtn = document.getElementById('closeSpecModalBtn');
        const specBtns = document.querySelectorAll('.btn-spec-modal');
        const quoteBtn = document.getElementById('btnRequestQuote');

        const modalTitle = document.getElementById('modalTitle');
        const modalPrice = document.getElementById('modalPrice');
        const modalDesc = document.getElementById('modalDesc');
        const modalCaliber = document.getElementById('modalCaliber');
        const modalBarrel = document.getElementById('modalBarrel');
        const modalWeight = document.getElementById('modalWeight');
        const modalMag = document.getElementById('modalMag');

        specBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const title = btn.getAttribute('data-title');
                const price = btn.getAttribute('data-price');
                const desc = btn.getAttribute('data-desc');
                const caliber = btn.getAttribute('data-caliber');
                const barrel = btn.getAttribute('data-barrel');
                const weight = btn.getAttribute('data-weight');
                const mag = btn.getAttribute('data-mag');

                if (modalTitle) modalTitle.textContent = title;
                if (modalPrice) modalPrice.textContent = price;
                if (modalDesc) modalDesc.textContent = desc;
                if (modalCaliber) modalCaliber.textContent = caliber;
                if (modalBarrel) modalBarrel.textContent = barrel;
                if (modalWeight) modalWeight.textContent = weight;
                if (modalMag) modalMag.textContent = mag;

                if (modal) modal.classList.add('active');
            });
        });

        if (closeBtn && modal) {
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('active');
            });
        }

        if (quoteBtn) {
            quoteBtn.addEventListener('click', () => {
                quoteBtn.disabled = true;
                quoteBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting Request...';

                setTimeout(() => {
                    quoteBtn.disabled = false;
                    quoteBtn.innerHTML = '<i class="fa-solid fa-file-invoice"></i> Request FFL Order Quote';
                    if (modal) modal.classList.remove('active');
                    alert('🎯 FFL Order Quote Requested! An Apex Hunter outfitter agent will contact you shortly.');
                }, 1000);
            });
        }
    }

});
