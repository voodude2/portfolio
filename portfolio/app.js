/* ==========================================================================
   DEVELOPER PORTFOLIO & PROJECTS SHOWCASE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    const projectData = {
        'react-tailwind': {
            title: "React + Tailwind Project (AetherFlow AI SaaS Platform)",
            desc: "A state-of-the-art WebGL & React 19 Enterprise AI SaaS Automation Platform styled with Tailwind CSS v4. Features interactive multi-agent node pipeline simulator, millisecond latency tracing, dynamic ROI cost calculator engine, and responsive glassmorphic dark design system.",
            features: [
                "⚛️ Built with React 19, Tailwind CSS v4, Vite 8, and Lucide Icons",
                "🧠 Interactive Visual AI Node Pipeline Simulator (Ingestion -> LLM Reasoning -> Vector Search -> Webhook)",
                "📊 Telemetry Monitor with real-time latency graphs, token throughput, and circuit breaker metrics",
                "💰 Dynamic ROI & Annual Cost Savings Calculator Engine with interactive sliders",
                "⚡ Responsive Glassmorphic Dark UI Design with custom animations and interactive pricing tiers"
            ],
            link: "./page 8/index.html"
        },
        gaming: {
            title: "CyberPulse Arena - Next-Gen Esports & PC Gaming Lounge",
            desc: "A futuristic cyberpunk multi-page web application for a premier 24/7 gaming lounge. Features 4 distinct PC Hardware Tiers (Basic, Premium, Pro Arena, Ultra VIP Pods), a live station booking calculator with date & hour selection, and an interactive location map.",
            features: [
                "🕹️ 4 PC Hardware Tiers (RTX 4090 OC, i9-14900KS, 540Hz / 360Hz OLED monitors)",
                "⚡ Live PC Station Booking System (Real-time GEL fee calculator & receipt modal)",
                "📍 Location & Interactive Map Section (Chavchavadze Ave #42, Tbilisi, 24/7 Open)",
                "🌌 Cyberpunk Neon RGB Design System (#00F0FF, #FF0055, glowing borders)"
            ],
            link: "./page 6/index.html"
        },
        hunting: {
            title: "Apex Hunter - Premium Hunting & Firearms Outfitter",
            desc: "A tactical multi-page web application for a licensed hunting equipment outfitter. Features a dedicated Firearms Catalog page (catalog.html), caliber and optics filter, specification modal, and step-by-step licensing guide.",
            features: [
                "🎯 Multi-page architecture (Main Store index.html & Firearms Catalog catalog.html)",
                "🔍 Dual Filter Engine (Category filter & Caliber selector: .308, 6.5 Creedmoor, 12G)",
                "📋 Interactive Firearms Specification Modal (Weight, barrel length, magazine, range)",
                "🌲 Tactical Forest Green & Bronze Amber Design System"
            ],
            link: "./page 5/index.html"
        },
        pet: {
            title: "Pawfect Haven - Luxury Pet Shop & Care Hub",
            desc: "A vibrant, warm pet store and spa booking web application. Features an organic product catalog, interactive shopping cart drawer, grooming spa appointment cost calculator, and pet adoption matching tools.",
            features: [
                "🐾 Slide-over Shopping Cart Drawer with real-time subtotal & checkout",
                "🛁 Grooming Spa Calculator (Instant price & duration estimate based on pet & package)",
                "🦴 Product Catalog with category filtering (Dogs, Cats, Grooming, Vet)",
                "✨ Cheerful pastel design system with high-res pet imagery"
            ],
            link: "./page 4/index.html"
        },
        web3: {
            title: "Mucho Coin ($MCH) - Solana Crypto Platform",
            desc: "A futuristic Solana-powered cryptocurrency platform built with 100% offline Javascript architecture. Includes a DEX Swap simulator, APY Staking calculator, AirDrop verification module, and native SVG Trading View chart engine.",
            features: [
                "⚡ Solana Blockchain 65,000 TPS speed integration simulation",
                "📊 100% Native SVG vector chart with 15M/1H/1D/1W timeframes & Candles mode",
                "🔄 Interactive DEX Swap with SOL to MCH exchange calculation",
                "🔒 Staking Vault yield calculator with real-time APY estimates"
            ],
            link: "./page 3/index.html"
        },
        travel: {
            title: "GlobeTrotter Travel & Tours Hub",
            desc: "A luxury single page travel booking web application designed for discovering tropical destinations, booking custom tour packages, and exploring resort guides with a modern glassmorphism design system.",
            features: [
                "🏖️ Destination search & category filtering",
                "📅 Interactive tour booking form wizard",
                "⭐ Customer reviews and rating showcase",
                "📱 Responsive mobile-first layout with smooth CSS transitions"
            ],
            link: "./page 2/index.html"
        },
        saas: {
            title: "NextGen SaaS Corporate Platform",
            desc: "A corporate SaaS landing page template built with semantic HTML5 and clean CSS. Focuses on conversion rate optimization, pricing plan matrices, and lead generation.",
            features: [
                "💼 Multi-page architecture (Features, Pricing, About, Contact)",
                "💳 Tiered pricing plans with monthly/annual toggle",
                "📈 High-converting call-to-action sections and hero banners"
            ],
            link: "./page one/index.html"
        }
    };

    // Safe Execution Wrapper
    const inits = [
        initNavigation,
        initParticleCanvas,
        initProjectFiltering,
        initProjectModal,
        initContactForm
    ];

    inits.forEach(fn => {
        try {
            fn();
        } catch (err) {
            console.error(`Portfolio init error in ${fn.name}:`, err);
        }
    });

    /* ==========================================
       1. NAVBAR & SCROLL LOGIC
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
       2. PARTICLE CANVAS ENGINE
       ========================================== */
    let canvas, ctx, particles = [];

    function initParticleCanvas() {
        canvas = document.getElementById('particle-canvas');
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);

        const particleCount = Math.floor((canvas.width * canvas.height) / 25000);
        particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? 'rgba(153, 69, 255, ' : 'rgba(0, 242, 254, ',
                opacity: Math.random() * 0.3 + 0.1,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25
            });
        }

        animateParticles();
    }

    function resizeCanvas() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function animateParticles() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color + p.opacity + ')';
            ctx.fill();
        });

        requestAnimationFrame(animateParticles);
    }

    /* ==========================================
       3. PROJECT CATEGORY FILTERING LOGIC
       ========================================== */
    function initProjectFiltering() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
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
       4. PROJECT DETAILS MODAL
       ========================================== */
    function initProjectModal() {
        const modal = document.getElementById('projectModal');
        const closeBtn = document.getElementById('closeModalBtn');
        const detailBtns = document.querySelectorAll('.btn-card-details');

        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        const modalFeatures = document.getElementById('modalFeatures');
        const modalLaunchBtn = document.getElementById('modalLaunchBtn');

        detailBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const key = btn.getAttribute('data-modal');
                const info = projectData[key];

                if (info) {
                    if (modalTitle) modalTitle.textContent = info.title;
                    if (modalDesc) modalDesc.textContent = info.desc;
                    if (modalLaunchBtn) modalLaunchBtn.setAttribute('href', info.link);

                    if (modalFeatures) {
                        modalFeatures.innerHTML = `
                            <h4 style="margin-bottom: 10px; color: var(--color-green);">Key Features:</h4>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                                ${info.features.map(f => `<li style="font-size: 0.9rem; color: var(--text-secondary);"><i class="fa-solid fa-check" style="color: var(--color-green); margin-right: 8px;"></i> ${f}</li>`).join('')}
                            </ul>
                        `;
                    }

                    if (modal) modal.classList.add('active');
                }
            });
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                if (modal) modal.classList.remove('active');
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('active');
            });
        }
    }

    /* ==========================================
       5. CONTACT FORM & TOAST
       ========================================== */
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
                form.reset();
                showToast('🚀 Thank you! Your message has been sent successfully.');
            }, 1000);
        });
    }

    window.showToast = function(msg) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--color-green);"></i> <span>${msg}</span>`;

        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    };

});
