/* ==========================================================================
   CYBERPULSE ARENA - GAMING HUB & BOOKING LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    const inits = [
        initNavigation,
        initBookingCalculator,
        initDefaultDate
    ];

    inits.forEach(fn => {
        try {
            fn();
        } catch (err) {
            console.error(`CyberPulse init error in ${fn.name}:`, err);
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
                    navbar.style.background = 'rgba(11, 14, 23, 0.98)';
                    navbar.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.2)';
                } else {
                    navbar.style.background = 'rgba(11, 14, 23, 0.92)';
                    navbar.style.boxShadow = 'none';
                }
            }
        });
    }

    /* ==========================================
       2. BOOKING CALCULATOR & LIVE PRICING
       ========================================== */
    function initBookingCalculator() {
        const zoneSelect = document.getElementById('bookZoneSelect');
        const hoursRange = document.getElementById('hoursRange');
        const durationText = document.getElementById('durationText');
        const totalPriceText = document.getElementById('totalPriceText');

        if (hoursRange && durationText && zoneSelect && totalPriceText) {
            
            function updatePrice() {
                const rate = parseInt(zoneSelect.value, 10);
                const hours = parseInt(hoursRange.value, 10);
                const total = rate * hours;

                durationText.textContent = `${hours} ${hours === 1 ? 'Hour' : 'Hours'}`;
                totalPriceText.textContent = `${total} ₾`;
            }

            hoursRange.addEventListener('input', updatePrice);
            zoneSelect.addEventListener('change', updatePrice);

            updatePrice();
        }
    }

    /* ==========================================
       3. DEFAULT DATE INITIALIZER
       ========================================== */
    function initDefaultDate() {
        const dateInput = document.getElementById('bookDateInput');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.value = today;
            dateInput.min = today;
        }
    }

});

/* ==========================================
   GLOBAL BOOKING FUNCTIONS
   ========================================== */
function selectZoneInBooking(zoneKey) {
    const zoneSelect = document.getElementById('bookZoneSelect');
    if (zoneSelect) {
        if (zoneKey === 'basic') zoneSelect.value = '3';
        if (zoneKey === 'premium') zoneSelect.value = '5';
        if (zoneKey === 'pro') zoneSelect.value = '8';
        if (zoneKey === 'ultra') zoneSelect.value = '12';

        zoneSelect.dispatchEvent(new Event('change'));
    }
}

function submitBooking() {
    const zoneSelect = document.getElementById('bookZoneSelect');
    const hoursRange = document.getElementById('hoursRange');
    const dateInput = document.getElementById('bookDateInput');
    const gameSelect = document.getElementById('bookGameSelect');
    const timeSelect = document.getElementById('bookTimeSelect');

    const rate = parseInt(zoneSelect.value, 10);
    const hours = parseInt(hoursRange.value, 10);
    const total = rate * hours;
    const game = gameSelect.value;
    const date = dateInput.value || 'Today';
    const time = timeSelect.value;

    let zoneName = "PRO ARENA";
    if (rate === 3) zoneName = "BASIC ZONE";
    if (rate === 5) zoneName = "PREMIUM ZONE";
    if (rate === 8) zoneName = "PRO ARENA";
    if (rate === 12) zoneName = "ULTRA VIP POD";

    alert(`⚡ CYBERPULSE RESERVATION CONFIRMED!\n\n🎮 Zone: ${zoneName}\n📅 Date: ${date} at ${time}\n⏳ Duration: ${hours} Hours\n🎯 Main Game: ${game}\n💰 Total Amount: ${total} ₾\n\n📍 Location: Chavchavadze Ave #42, Tbilisi\nSee you in the Arena!`);
}
