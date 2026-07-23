/* ==========================================================================
   MUCHO COIN ($MCH) - 100% OFFLINE HIGH-PERFORMANCE APPLICATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Application State
    const state = {
        currentPage: 'home',
        chartMode: 'line', // 'line', 'candle', 'wave'
        selectedTimeframe: '60', // '15', '60', 'D', 'W'
        isConnected: false,
        walletAddress: null,
        solBalance: 1.50,
        mchBalance: 0,
        mchPriceUsd: 0.0004215
    };

    // Financial Chart Datasets for Timeframes (100% Local Offline Data)
    const timeframeData = {
        '15': {
            priceStr: '$0.0004215 MCH',
            changeStr: '+4.2% 15M',
            points: [
                { open: 0.000395, high: 0.000405, low: 0.000390, close: 0.000402, time: '12:00' },
                { open: 0.000402, high: 0.000412, low: 0.000400, close: 0.000410, time: '12:15' },
                { open: 0.000410, high: 0.000415, low: 0.000405, close: 0.000408, time: '12:30' },
                { open: 0.000408, high: 0.000422, low: 0.000406, close: 0.000418, time: '12:45' },
                { open: 0.000418, high: 0.000428, low: 0.000415, close: 0.000425, time: '13:00' },
                { open: 0.000425, high: 0.000427, low: 0.000418, close: 0.000420, time: '13:15' },
                { open: 0.000420, high: 0.000432, low: 0.000419, close: 0.0004215, time: 'NOW' }
            ]
        },
        '60': {
            priceStr: '$0.0004215 MCH',
            changeStr: '+14.2% 1H',
            points: [
                { open: 0.000360, high: 0.000375, low: 0.000355, close: 0.000370, time: '08:00' },
                { open: 0.000370, high: 0.000390, low: 0.000368, close: 0.000385, time: '09:00' },
                { open: 0.000385, high: 0.000388, low: 0.000378, close: 0.000380, time: '10:00' },
                { open: 0.000380, high: 0.000405, low: 0.000379, close: 0.000400, time: '11:00' },
                { open: 0.000400, high: 0.000418, low: 0.000398, close: 0.000415, time: '12:00' },
                { open: 0.000415, high: 0.000417, low: 0.000408, close: 0.000410, time: '13:00' },
                { open: 0.000410, high: 0.000435, low: 0.000409, close: 0.0004215, time: 'NOW' }
            ]
        },
        'D': {
            priceStr: '$0.0004215 MCH',
            changeStr: '+84.5% 1D',
            points: [
                { open: 0.000220, high: 0.000260, low: 0.000215, close: 0.000250, time: 'Mon' },
                { open: 0.000250, high: 0.000310, low: 0.000248, close: 0.000295, time: 'Tue' },
                { open: 0.000295, high: 0.000350, low: 0.000290, close: 0.000340, time: 'Wed' },
                { open: 0.000340, high: 0.000345, low: 0.000320, close: 0.000325, time: 'Thu' },
                { open: 0.000325, high: 0.000390, low: 0.000322, close: 0.000385, time: 'Fri' },
                { open: 0.000385, high: 0.000410, low: 0.000380, close: 0.000405, time: 'Sat' },
                { open: 0.000405, high: 0.000440, low: 0.000402, close: 0.0004215, time: 'Sun' }
            ]
        },
        'W': {
            priceStr: '$0.0004215 MCH',
            changeStr: '+320.4% 1W',
            points: [
                { open: 0.000090, high: 0.000120, low: 0.000085, close: 0.000110, time: 'W1' },
                { open: 0.000110, high: 0.000180, low: 0.000108, close: 0.000165, time: 'W2' },
                { open: 0.000165, high: 0.000230, low: 0.000160, close: 0.000210, time: 'W3' },
                { open: 0.000210, high: 0.000290, low: 0.000205, close: 0.000275, time: 'W4' },
                { open: 0.000275, high: 0.000360, low: 0.000270, close: 0.000345, time: 'W5' },
                { open: 0.000345, high: 0.000400, low: 0.000340, close: 0.000388, time: 'W6' },
                { open: 0.000388, high: 0.000450, low: 0.000385, close: 0.0004215, time: 'NOW' }
            ]
        }
    };

    // Safe Execution Wrapper - Individual Try/Catch blocks
    const inits = [
        initNavigation,
        initParticleCanvas,
        initNativeVectorChart,
        initStakingCalculator,
        initSwapTerminal,
        initAirdropChecker,
        initFaqAccordion,
        initWalletModal,
        initContractCopy,
        initExtraButtons
    ];

    inits.forEach(fn => {
        try {
            fn();
        } catch (err) {
            console.error(`App init error in ${fn.name}:`, err);
        }
    });

    // Window Hash Routing
    window.addEventListener('hashchange', handleHashRouting);
    handleHashRouting();

    /* ==========================================
       1. NAVIGATION & SPA PAGE SWITCHER
       ========================================== */
    function initNavigation() {
        const navLinks = document.querySelectorAll('[data-nav]');
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinksList = document.getElementById('navLinks');
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

        if (mobileToggle && navLinksList) {
            mobileToggle.addEventListener('click', () => {
                navLinksList.classList.toggle('active');
            });
        }

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetPage = link.getAttribute('data-nav');
                if (targetPage) {
                    if (navLinksList) navLinksList.classList.remove('active');
                    navigateTo(targetPage);
                }
            });
        });
    }

    function handleHashRouting() {
        const hash = window.location.hash.replace('#', '');
        const validPages = ['home', 'ecosystem', 'tokenomics', 'roadmap', 'swap', 'faq'];
        if (hash && validPages.includes(hash)) {
            navigateTo(hash);
        } else {
            navigateTo('home');
        }
    }

    function navigateTo(pageId) {
        state.currentPage = pageId;

        document.querySelectorAll('.nav-link-item').forEach(item => {
            const link = item.querySelector('a');
            if (link && link.getAttribute('data-nav') === pageId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        const sections = document.querySelectorAll('.page-section');
        sections.forEach(sec => {
            if (sec.id === `page-${pageId}`) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });

        window.scrollTo({ top: 0, behavior: 'instant' });

        if (pageId === 'home') {
            setTimeout(renderNativeChart, 30);
        }
    }

    /* ==========================================
       2. LIGHTWEIGHT PARTICLE CANVAS ENGINE
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
                color: Math.random() > 0.4 ? 'rgba(153, 69, 255, ' : (Math.random() > 0.5 ? 'rgba(20, 241, 149, ' : 'rgba(255, 215, 0, '),
                opacity: Math.random() * 0.4 + 0.15,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3
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
       3. 100% OFFLINE INSTANT VECTOR CHART ENGINE
       ========================================== */
    function initNativeVectorChart() {
        const modeBtns = document.querySelectorAll('.btn-chart-mode');
        const tfBtns = document.querySelectorAll('.timeframe-btn');
        const svgChart = document.getElementById('tradingViewSvgChart');

        // Mode Buttons (Line, Candles, Wave)
        modeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.chartMode = btn.getAttribute('data-mode') || 'line';
                renderNativeChart();
            });
        });

        // Timeframe Buttons (15M, 1H, 1D, 1W)
        tfBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                tfBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.selectedTimeframe = btn.getAttribute('data-tf') || '60';

                const cfg = timeframeData[state.selectedTimeframe] || timeframeData['60'];
                const priceDisp = document.getElementById('livePriceDisplay');
                const heroPrice = document.getElementById('liveHeroPrice');
                const changeDisp = document.getElementById('livePriceChange');
                
                if (priceDisp) priceDisp.textContent = cfg.priceStr;
                if (heroPrice) heroPrice.textContent = cfg.priceStr.replace(' MCH', '');
                if (changeDisp) changeDisp.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> ${cfg.changeStr}`;

                renderNativeChart();
            });
        });

        // Hover Crosshair
        if (svgChart) {
            const hoverGroup = document.getElementById('svgHoverGroup');
            const hoverLineX = document.getElementById('hoverLineX');
            const hoverLineY = document.getElementById('hoverLineY');
            const hoverDot = document.getElementById('hoverDot');
            const tooltipBg = document.getElementById('tooltipBg');
            const tooltipTextVal = document.getElementById('tooltipTextVal');
            const tooltipTextTime = document.getElementById('tooltipTextTime');

            svgChart.addEventListener('mousemove', (e) => {
                const rect = svgChart.getBoundingClientRect();
                if (rect.width === 0) return;
                const mouseX = ((e.clientX - rect.left) / rect.width) * 900;
                
                const cfg = timeframeData[state.selectedTimeframe] || timeframeData['60'];
                const data = cfg.points;

                const minX = 60;
                const maxX = 870;
                const minY = 50;
                const maxY = 260;

                if (mouseX >= minX && mouseX <= maxX) {
                    const ratio = (mouseX - minX) / (maxX - minX);
                    const idx = Math.min(data.length - 1, Math.max(0, Math.round(ratio * (data.length - 1))));
                    
                    const allVals = data.flatMap(d => [d.open, d.high, d.low, d.close]);
                    const minV = Math.min(...allVals) * 0.95;
                    const maxV = Math.max(...allVals) * 1.05;
                    
                    const pointX = minX + (idx / (data.length - 1)) * (maxX - minX);
                    const pointY = maxY - ((data[idx].close - minV) / (maxV - minV)) * (maxY - minY);

                    if (hoverGroup) hoverGroup.style.opacity = '1';
                    if (hoverLineX) { hoverLineX.setAttribute('x1', pointX); hoverLineX.setAttribute('x2', pointX); }
                    if (hoverLineY) { hoverLineY.setAttribute('y1', pointY); hoverLineY.setAttribute('y2', pointY); }
                    if (hoverDot) { hoverDot.setAttribute('cx', pointX); hoverDot.setAttribute('cy', pointY); }

                    let tipX = pointX - 65;
                    if (tipX < 60) tipX = 60;
                    if (tipX > 770) tipX = 770;
                    let tipY = pointY - 55;
                    if (tipY < 20) tipY = pointY + 15;

                    if (tooltipBg) { tooltipBg.setAttribute('x', tipX); tooltipBg.setAttribute('y', tipY); }
                    if (tooltipTextVal) { tooltipTextVal.setAttribute('x', tipX + 12); tooltipTextVal.setAttribute('y', tipY + 20); tooltipTextVal.textContent = `$${data[idx].close.toFixed(6)}`; }
                    if (tooltipTextTime) { tooltipTextTime.setAttribute('x', tipX + 12); tooltipTextTime.setAttribute('y', tipY + 36); tooltipTextTime.textContent = data[idx].time; }
                }
            });

            svgChart.addEventListener('mouseleave', () => {
                if (hoverGroup) hoverGroup.style.opacity = '0';
            });
        }

        renderNativeChart();
    }

    function renderNativeChart() {
        const svgLinePath = document.getElementById('svgLinePath');
        const svgAreaPath = document.getElementById('svgAreaPath');
        const svgPulseDot = document.getElementById('svgPulseDot');
        const svgXLabels = document.getElementById('svgXLabels');
        const svgCandlesGroup = document.getElementById('svgCandlesGroup');

        if (!svgLinePath || !svgAreaPath) return;

        const cfg = timeframeData[state.selectedTimeframe] || timeframeData['60'];
        const data = cfg.points;

        const minX = 60;
        const maxX = 870;
        const minY = 50;
        const maxY = 260;

        const allVals = data.reduce((acc, d) => {
            acc.push(d.open, d.high, d.low, d.close);
            return acc;
        }, []);
        const minV = Math.min(...allVals) * 0.95;
        const maxV = Math.max(...allVals) * 1.05;

        // Update Y-Axis Price Labels
        for (let i = 0; i < 4; i++) {
            const lbl = document.getElementById(`yLabel${i + 1}`);
            if (lbl) {
                const val = maxV - ((maxV - minV) / 3) * i;
                lbl.textContent = `$${val.toFixed(5)}`;
            }
        }

        // Calculate Points
        const points = data.map((d, idx) => {
            const x = minX + (idx / (data.length - 1)) * (maxX - minX);
            const yClose = maxY - ((d.close - minV) / (maxV - minV)) * (maxY - minY);
            const yOpen = maxY - ((d.open - minV) / (maxV - minV)) * (maxY - minY);
            const yHigh = maxY - ((d.high - minV) / (maxV - minV)) * (maxY - minY);
            const yLow = maxY - ((d.low - minV) / (maxV - minV)) * (maxY - minY);
            return { x, yClose, yOpen, yHigh, yLow, data: d };
        });

        // Render Line or Wave Mode
        if (state.chartMode === 'line' || state.chartMode === 'wave') {
            if (svgCandlesGroup) svgCandlesGroup.innerHTML = '';
            svgLinePath.style.display = 'block';
            svgAreaPath.style.display = 'block';

            if (state.chartMode === 'wave') {
                svgLinePath.setAttribute('stroke', '#00F2FE');
                svgLinePath.setAttribute('stroke-width', '5');
            } else {
                svgLinePath.setAttribute('stroke', '#14F195');
                svgLinePath.setAttribute('stroke-width', '4');
            }

            let pathStr = `M ${points[0].x.toFixed(1)},${points[0].yClose.toFixed(1)}`;
            for (let i = 1; i < points.length; i++) {
                pathStr += ` L ${points[i].x.toFixed(1)},${points[i].yClose.toFixed(1)}`;
            }

            const areaStr = `${pathStr} L ${points[points.length - 1].x.toFixed(1)},${maxY} L ${points[0].x.toFixed(1)},${maxY} Z`;

            svgLinePath.setAttribute('d', pathStr);
            svgAreaPath.setAttribute('d', areaStr);

            const lastP = points[points.length - 1];
            if (svgPulseDot) {
                svgPulseDot.style.display = 'block';
                svgPulseDot.setAttribute('cx', lastP.x.toFixed(1));
                svgPulseDot.setAttribute('cy', lastP.yClose.toFixed(1));
            }
        } 
        // Render Japanese Candlesticks Mode
        else if (state.chartMode === 'candle') {
            svgLinePath.style.display = 'none';
            svgAreaPath.style.display = 'none';
            if (svgPulseDot) svgPulseDot.style.display = 'none';

            if (svgCandlesGroup) {
                let candlesHTML = '';
                const candleWidth = 20;

                points.forEach(p => {
                    const isGreen = p.data.close >= p.data.open;
                    const colorClass = isGreen ? 'candle-green' : 'candle-red';
                    
                    const topY = Math.min(p.yOpen, p.yClose);
                    const height = Math.max(3, Math.abs(p.yOpen - p.yClose));

                    candlesHTML += `<line x1="${p.x.toFixed(1)}" y1="${p.yHigh.toFixed(1)}" x2="${p.x.toFixed(1)}" y2="${p.yLow.toFixed(1)}" class="${colorClass} candle-wick"/>`;
                    candlesHTML += `<rect x="${(p.x - candleWidth / 2).toFixed(1)}" y="${topY.toFixed(1)}" width="${candleWidth}" height="${height.toFixed(1)}" rx="3" class="${colorClass}"/>`;
                });

                svgCandlesGroup.innerHTML = candlesHTML;
            }
        }

        // Render X-Axis Labels
        if (svgXLabels) {
            let xLabelsHTML = '';
            points.forEach(p => {
                xLabelsHTML += `<text x="${p.x.toFixed(1)}" y="295" class="chart-axis-text" text-anchor="middle">${p.data.time}</text>`;
            });
            svgXLabels.innerHTML = xLabelsHTML;
        }
    }

    /* ==========================================
       4. INTERACTIVE STAKING APY CALCULATOR
       ========================================== */
    function initStakingCalculator() {
        const amountRange = document.getElementById('mchAmountRange');
        const daysRange = document.getElementById('lockDaysRange');
        const amountText = document.getElementById('mchAmountText');
        const daysText = document.getElementById('lockDaysText');
        const yieldText = document.getElementById('calculatedYieldText');
        const yieldUsdEstimate = document.getElementById('yieldUsdEstimate');

        if (!amountRange || !daysRange) return;

        function updateCalc() {
            const amount = parseInt(amountRange.value);
            const days = parseInt(daysRange.value);

            const apy = 12 + (days / 365) * 16.5;
            const yieldMch = Math.round(amount * (apy / 100) * (days / 365));
            const usdVal = (yieldMch * state.mchPriceUsd).toFixed(2);

            if (amountText) amountText.textContent = `${amount.toLocaleString()} MCH`;
            if (daysText) daysText.textContent = `${days} Days (${apy.toFixed(1)}% APY)`;
            if (yieldText) yieldText.textContent = `+${yieldMch.toLocaleString()} MCH`;
            if (yieldUsdEstimate) yieldUsdEstimate.textContent = `≈ $${usdVal} USD Solana Dividends`;
        }

        amountRange.addEventListener('input', updateCalc);
        daysRange.addEventListener('input', updateCalc);
        updateCalc();
    }

    /* ==========================================
       5. DEX SWAP TERMINAL LOGIC & CONTROLS
       ========================================== */
    function initSwapTerminal() {
        const solInput = document.getElementById('swapSolInput');
        const mchOutput = document.getElementById('swapMchOutput');
        const swapBtn = document.getElementById('executeSwapBtn');
        const reverseBtn = document.getElementById('swapReverseBtn');
        const btnMinus = document.getElementById('btnSolMinus');
        const btnPlus = document.getElementById('btnSolPlus');
        const presetPills = document.querySelectorAll('.btn-preset-pill');
        const tabSwap = document.getElementById('tabSwap');
        const tabLimit = document.getElementById('tabLimit');
        const swapSettingsBtn = document.getElementById('swapSettingsBtn');

        if (!solInput || !mchOutput) return;

        function recalculateSwap() {
            const solVal = Math.max(0.01, parseFloat(solInput.value) || 0);
            solInput.value = solVal.toFixed(2);
            const mchVal = Math.round(solVal * 369000);
            mchOutput.value = mchVal.toLocaleString();
        }

        solInput.addEventListener('input', () => {
            const solVal = parseFloat(solInput.value) || 0;
            const mchVal = Math.round(solVal * 369000);
            mchOutput.value = mchVal.toLocaleString();
        });

        // Decrement (-) Button
        if (btnMinus) {
            btnMinus.addEventListener('click', (e) => {
                e.preventDefault();
                let current = parseFloat(solInput.value) || 0.5;
                if (current > 0.1) {
                    solInput.value = (current - 0.1).toFixed(2);
                    recalculateSwap();
                }
            });
        }

        // Increment (+) Button
        if (btnPlus) {
            btnPlus.addEventListener('click', (e) => {
                e.preventDefault();
                let current = parseFloat(solInput.value) || 0.5;
                solInput.value = (current + 0.1).toFixed(2);
                recalculateSwap();
            });
        }

        // Preset Amount Pills (0.1, 0.5, 1.0, MAX)
        presetPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                const val = pill.getAttribute('data-sol');
                if (val === 'max') {
                    solInput.value = state.solBalance.toFixed(2);
                } else {
                    solInput.value = parseFloat(val).toFixed(2);
                }
                recalculateSwap();
            });
        });

        // Swap Tabs
        if (tabSwap) {
            tabSwap.addEventListener('click', () => {
                tabSwap.classList.add('active');
                if (tabLimit) tabLimit.classList.remove('active');
            });
        }

        if (tabLimit) {
            tabLimit.addEventListener('click', () => {
                tabLimit.classList.add('active');
                if (tabSwap) tabSwap.classList.remove('active');
                showToast('ℹ️ Limit Orders feature launching on Mainnet soon!');
            });
        }

        if (swapSettingsBtn) {
            swapSettingsBtn.addEventListener('click', () => {
                showToast('⚙️ Slippage Tolerance set to 0.5% (Auto-Protect)');
            });
        }

        // Reverse Swap Button
        if (reverseBtn) {
            reverseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showToast('🔄 Swap direction flipped (MCH ➔ SOL)');
            });
        }

        // Swap Execute Button
        if (swapBtn) {
            swapBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!state.isConnected) {
                    openWalletModal();
                    return;
                }

                const solVal = parseFloat(solInput.value) || 0;
                if (solVal > state.solBalance) {
                    showToast('⚠️ Insufficient SOL balance!');
                    return;
                }

                swapBtn.disabled = true;
                swapBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing on Solana...';

                setTimeout(() => {
                    const gainedMch = Math.round(solVal * 369000);
                    state.solBalance -= solVal;
                    state.mchBalance += gainedMch;

                    updateBalanceUI();

                    swapBtn.disabled = false;
                    swapBtn.innerHTML = '<i class="fa-solid fa-bolt"></i> Instant Swap (SOL ➔ MCH)';
                    
                    showToast(`✅ Swap Successful! Received ${gainedMch.toLocaleString()} $MCH`);
                    triggerConfetti();
                }, 1000);
            });
        }
    }

    /* ==========================================
       6. AIRDROP CHECKER & CLAIM LOGIC
       ========================================== */
    function initAirdropChecker() {
        const checkBtn = document.getElementById('checkAirdropBtn');
        const claimBtn = document.getElementById('claimAirdropBtn');
        const walletInput = document.getElementById('airdropWalletInput');
        const resultBox = document.getElementById('airdropResultBox');

        if (checkBtn) {
            checkBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const addr = walletInput ? walletInput.value.trim() : '';
                if (!addr && !state.isConnected) {
                    showToast('Please enter a valid Solana address');
                    return;
                }

                checkBtn.disabled = true;
                checkBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Scanning Solana Ledger...';

                setTimeout(() => {
                    checkBtn.disabled = false;
                    checkBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> Check Allocation';
                    if (resultBox) resultBox.style.display = 'block';
                    showToast('🎉 Your wallet is eligible for the Airdrop!');
                }, 800);
            });
        }

        if (claimBtn) {
            claimBtn.addEventListener('click', (e) => {
                e.preventDefault();
                claimBtn.disabled = true;
                claimBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Transferring Tokens...';

                setTimeout(() => {
                    state.mchBalance += 250000;
                    updateBalanceUI();
                    claimBtn.disabled = true;
                    claimBtn.innerHTML = '<i class="fa-solid fa-check"></i> Tokens Claimed!';
                    showToast('🥳 250,000 $MCH successfully credited to your wallet!');
                    triggerConfetti();
                }, 900);
            });
        }
    }

    /* ==========================================
       7. CONFETTI CELEBRATION EFFECT
       ========================================== */
    function triggerConfetti() {
        const count = 60;
        const colors = ['#FFD700', '#9945FF', '#14F195', '#00F2FE'];

        for (let i = 0; i < count; i++) {
            const conf = document.createElement('div');
            conf.style.position = 'fixed';
            conf.style.left = Math.random() * 100 + 'vw';
            conf.style.top = '-10px';
            conf.style.width = Math.random() * 8 + 5 + 'px';
            conf.style.height = Math.random() * 8 + 5 + 'px';
            conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            conf.style.borderRadius = '50%';
            conf.style.zIndex = '9999';
            conf.style.pointerEvents = 'none';
            conf.style.transition = 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 2.5s ease';

            document.body.appendChild(conf);

            setTimeout(() => {
                conf.style.transform = `translate(${(Math.random() - 0.5) * 250}px, ${window.innerHeight + 50}px) rotate(${Math.random() * 540}deg)`;
                conf.style.opacity = '0';
            }, 40);

            setTimeout(() => conf.remove(), 2700);
        }
    }

    /* ==========================================
       8. FAQ ACCORDION TOGGLE
       ========================================== */
    function initFaqAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => {
                    const isOpen = item.classList.contains('open');
                    faqItems.forEach(i => i.classList.remove('open'));
                    if (!isOpen) {
                        item.classList.add('open');
                    }
                });
            }
        });
    }

    /* ==========================================
       9. SOLANA WALLET MODAL CONNECT LOGIC
       ========================================== */
    function initWalletModal() {
        const modal = document.getElementById('walletModal');
        const connectBtn = document.getElementById('connectWalletBtn');
        const closeBtn = document.getElementById('closeModalBtn');
        const walletOptions = document.querySelectorAll('.wallet-option-btn');

        if (connectBtn) {
            connectBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (state.isConnected) {
                    state.isConnected = false;
                    state.walletAddress = null;
                    const btnText = document.getElementById('walletBtnText');
                    if (btnText) btnText.textContent = 'Connect Wallet';
                    showToast('Wallet disconnected');
                } else {
                    openWalletModal();
                }
            });
        }

        if (closeBtn) closeBtn.addEventListener('click', closeWalletModal);

        walletOptions.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.preventDefault();
                const walletName = opt.getAttribute('data-wallet');
                state.isConnected = true;
                state.walletAddress = '7xF9...4B2a';
                
                const btnText = document.getElementById('walletBtnText');
                if (btnText) btnText.textContent = '7xF9...4B2a';
                closeWalletModal();
                showToast(`✅ ${walletName} connected successfully!`);
                updateBalanceUI();
            });
        });
    }

    function openWalletModal() {
        const modal = document.getElementById('walletModal');
        if (modal) modal.classList.add('active');
    }

    function closeWalletModal() {
        const modal = document.getElementById('walletModal');
        if (modal) modal.classList.remove('active');
    }

    function updateBalanceUI() {
        const userSolBal = document.getElementById('userSolBal');
        const userMchBal = document.getElementById('userMchBal');
        if (userSolBal) userSolBal.textContent = `${state.solBalance.toFixed(2)} SOL`;
        if (userMchBal) userMchBal.textContent = `${state.mchBalance.toLocaleString()} MCH`;
    }

    /* ==========================================
       10. CONTRACT ADDRESS COPY, EXTRA BUTTONS & TOASTS
       ========================================== */
    function initContractCopy() {
        const copyBtn = document.getElementById('copyContractBtn');
        const addrText = document.getElementById('contractAddrText');

        if (copyBtn && addrText) {
            copyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(addrText.textContent.trim());
                showToast('📋 Smart Contract address copied to clipboard!');
            });
        }
    }

    function initExtraButtons() {
        const btnEcoPayBot = document.getElementById('btnEcoPayBot');
        const btnStakeAction = document.getElementById('btnStakeAction');
        const btnDownloadWhitepaper = document.getElementById('btnDownloadWhitepaper');

        if (btnEcoPayBot) {
            btnEcoPayBot.addEventListener('click', () => showToast('🤖 Mucho Pay Bot launching soon!'));
        }
        if (btnStakeAction) {
            btnStakeAction.addEventListener('click', () => showToast('🔒 Staking Vault launching on Mainnet soon!'));
        }
        if (btnDownloadWhitepaper) {
            btnDownloadWhitepaper.addEventListener('click', () => showToast('📄 Downloading Mucho Coin Whitepaper...'));
        }
    }

    window.showToast = function(msg) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color: var(--solana-green);"></i> <span>${msg}</span>`;

        container.appendChild(toast);
        setTimeout(() => toast.remove(), 2800);
    };

});
