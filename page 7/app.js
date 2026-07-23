/* ==========================================================================
   SNAKES OF GEORGIA - SPECIES DATABASE & INTERACTIVE LOGIC
   ========================================================================== */

const SNAKES_DATABASE = [
    {
        id: "macrovipera-lebetina",
        latin: "Macrovipera lebetina",
        english: "Levantine Viper / Gorgan Viper",
        georgian: "გიურზა (Gyurza)",
        family: "Viperidae",
        toxicity: "high", // high, mild, safe
        toxicityLabel: "High Risk Venomous",
        length: "130 - 180 cm",
        habitat: "Arid semi-deserts, rocky hills, scrublands, Kakheti & Kvemo Kartli",
        diet: "Rodents, birds, lizards",
        activity: "Nocturnal during summer, diurnal in spring/autumn",
        conservation: "Red List of Georgia (Vulnerable)",
        desc: "The largest and most dangerous venomous snake in Georgia. Recognizable by its thick body, triangular head, and sandy-grey coloration with darker transverse bars. Its bite produces cytotoxic and hemotoxic venom that requires immediate hospital treatment.",
        features: [
            "⚠️ Potent cytotoxic/hemotoxic venom capable of severe tissue damage",
            "⛰️ Commonly inhabits David Gareji, Vashlovani, and Kvemo Kartli hills",
            "🛡️ Triangular head distinct from thin neck, vertical slit pupils",
            "🏥 Requires Levantine Viper antivenom (available in Georgian emergency centers)"
        ],
        image: "assets/images/gyurza.jpg"
    },
    {
        id: "vipera-kaznakovi",
        latin: "Vipera kaznakovi",
        english: "Caucasian Viper / Colchis Viper",
        georgian: "კავკასიური გველგესლა",
        family: "Viperidae",
        toxicity: "high",
        toxicityLabel: "High Risk Venomous",
        length: "55 - 70 cm",
        habitat: "Humid Colchis rainforests, Adjara, Guria, Samegrelo, up to 1,500m",
        diet: "Small mammals, lizards, amphibians",
        activity: "Diurnal",
        conservation: "IUCN Endangered / Red List of Georgia",
        desc: "A striking, rare viper endemic to the Western Caucasus humid subtropical zone. Characterized by vibrant orange, reddish, or bright yellow lateral flanks with a dark zig-zag dorsal stripe. Highly protected species.",
        features: [
            "🌿 Endemic to the humid Colchis ecological zone of Western Georgia",
            "🎨 Bright red/orange flank coloration with contrasting dark zigzag pattern",
            "⚠️ Venom is strongly hemotoxic; medical assistance required if bitten",
            "🛡️ Highly endangered due to habitat fragmentation"
        ],
        image: "assets/images/kaznakovi.jpg"
    },
    {
        id: "vipera-dinniki",
        latin: "Vipera dinniki",
        english: "Dinnik's Viper / Subalpine Caucasian Viper",
        georgian: "დინიკის გველგესლა",
        family: "Viperidae",
        toxicity: "high",
        toxicityLabel: "High Risk Venomous",
        length: "45 - 55 cm",
        habitat: "Subalpine meadows & rocky screes of High Caucasus (Svaneti, Kazbegi, Tusheti)",
        diet: "Small rodents, alpine lizards",
        activity: "Diurnal",
        conservation: "IUCN Vulnerable",
        desc: "High-altitude mountain viper adapted to harsh subalpine climates above 1,800m elevation. Displays extreme color variation ranging from lemon yellow to olive green and melanistic black.",
        features: [
            "🏔️ Alpine species found in Svaneti, Kazbegi, and Tusheti alpine meadows",
            "❄️ Extremely cold-tolerant, active even during chilly mountain days",
            "⚠️ Venom contains cytotoxic and neurotoxic components",
            "🔍 Short, heavy-bodied viper with upturned snout"
        ],
        image: "assets/images/dinniki.jpg"
    },
    {
        id: "vipera-renardi",
        latin: "Vipera renardi",
        english: "Steppe Viper",
        georgian: "ველის გველგესლა",
        family: "Viperidae",
        toxicity: "high",
        toxicityLabel: "High Risk Venomous",
        length: "40 - 60 cm",
        habitat: "Dry steppes, grasslands, Shida Kartli & Samtskhe-Javakheti",
        diet: "Insects (crickets/grasshoppers), lizards, rodents",
        activity: "Diurnal",
        conservation: "IUCN Vulnerable",
        desc: "A small, greyish viper with a characteristic dark zig-zag line down its back, typical of European steppe environments. Primarily feeds on orthopteran insects and small lizards.",
        features: [
            "🌾 Inhabits continental steppe habitats of Eastern & Southern Georgia",
            "🦗 Uniquely feeds heavily on large grasshoppers and crickets as juveniles",
            "⚠️ Venomous bite causes localized pain and swelling",
            "🔍 Narrow head with wavy dark dorsal pattern"
        ],
        image: "assets/images/renardi.jpg"
    },
    {
        id: "vipera-eriwanensis",
        latin: "Vipera eriwanensis",
        english: "Yerevan Viper / Armenian Steppe Viper",
        georgian: "ერევნის გველგესლა",
        family: "Viperidae",
        toxicity: "high",
        toxicityLabel: "High Risk Venomous",
        length: "35 - 50 cm",
        habitat: "Dry mountain slopes & Javakheti plateau grasslands (2,000m+)",
        diet: "Lizards, small mice, insects",
        activity: "Diurnal",
        conservation: "IUCN Vulnerable",
        desc: "A high-elevation steppe viper closely related to Vipera renardi, native to the volcanic highlands of Southern Georgia (Javakheti) and neighboring Armenia.",
        features: [
            "🌋 Native to the high volcanic plateaus of Javakheti",
            "📏 Smallest viper species in Georgia (rarely exceeds 50cm)",
            "⚠️ Mild to moderate envenomation risk to humans",
            "🛡️ Protected species due to overgrazing of mountain habitats"
        ],
        image: "assets/images/eriwanensis.jpg"
    },
    {
        id: "malpolon-insignitus",
        latin: "Malpolon insignitus",
        english: "Eastern Montpellier Snake",
        georgian: "ჩვეულებრივი მგელთვალა",
        family: "Psammophiidae",
        toxicity: "mild",
        toxicityLabel: "Mildly Venomous (Rear-fanged)",
        length: "140 - 200 cm",
        habitat: "Arid hillsides, semi-deserts, scrub, Vashlovani & Kakheti",
        diet: "Lizards, rodents, other snakes",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "A large, fast, impressive snake with prominent brow ridges giving it a fierce 'expression'. Rear-fanged venom is harmless to humans unless bitten deep inside the mouth.",
        features: [
            "⚡ Extremely fast-moving diurnal hunter in semi-deserts",
            "👁️ Distinctive deep-set eyes with prominent supraocular scales ('prominent brow')",
            "🧪 Rear-fanged grooved teeth in back of jaw; harmless to humans",
            "🐍 Often raises front body like a cobra when cornered"
        ],
        image: "assets/images/montpellier.jpg"
    },
    {
        id: "telescopus-fallax",
        latin: "Telescopus fallax",
        english: "European Cat Snake",
        georgian: "კატათვალა გველი",
        family: "Colubridae",
        toxicity: "mild",
        toxicityLabel: "Mildly Venomous (Rear-fanged)",
        length: "60 - 90 cm",
        habitat: "Rocky hills, stone walls, old ruins, Tbilisi & Kakheti",
        diet: "Lizards, geckos",
        activity: "Nocturnal",
        conservation: "Least Concern",
        desc: "A slender nocturnal snake named for its vertical cat-like pupils. Specialized in hunting sleeping lizards and geckos at night on sun-warmed rocks.",
        features: [
            "🐱 Vertical slit pupils like a cat",
            "🌙 Strictly nocturnal, hunts sleeping wall lizards on stone structures",
            "🧪 Rear-fanged venom incapacitates small lizards quickly",
            "🏢 Frequently encountered around rocky heritage ruins in Tbilisi"
        ],
        image: "assets/images/cat_snake.jpg"
    },
    {
        id: "natrix-natrix",
        latin: "Natrix natrix",
        english: "Grass Snake / Ringed Snake",
        georgian: "ჩვეულებრივი ანკარა",
        family: "Colubridae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "90 - 130 cm",
        habitat: "Rivers, lakes, marshes, damp woodlands throughout Georgia",
        diet: "Amphibians (frogs/toads), fish",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "Georgia's most common non-venomous snake. Easily identified by bright yellow, orange, or white collar marks behind its head. Excellent swimmer that feeds on frogs.",
        features: [
            "🟡 Distinctive yellow/orange collar patches behind the head",
            "🏊 Superb swimmer, frequents rivers, lakes, and garden ponds",
            "🛡️ Completely harmless to humans; feigns death (thanatosis) if captured",
            "🐸 Feeds almost exclusively on amphibians"
        ],
        image: "assets/images/grass_snake.jpg"
    },
    {
        id: "natrix-tessellata",
        latin: "Natrix tessellata",
        english: "Dice Snake / Water Snake",
        georgian: "წყლის ანკარა",
        family: "Colubridae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "80 - 110 cm",
        habitat: "Rivers, reservoirs, Black Sea coastal estuaries",
        diet: "Fish",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "A semi-aquatic harmless snake that spends most of its life in water. Features a checkerboard 'dice' pattern of dark spots on an olive or grey body.",
        features: [
            "🐟 Highly specialized fish hunter, capable of diving under water for 30+ minutes",
            "🎲 Checkerboard spot pattern along dorsal scales",
            "🛡️ Completely non-venomous and gentle",
            "🌊 Abundant along the Mtkvari river and Black Sea coast"
        ],
        image: "assets/images/dice_snake.jpg"
    },
    {
        id: "zamenis-longissimus",
        latin: "Zamenis longissimus",
        english: "Aesculapian Snake",
        georgian: "ესკულაპის გველი",
        family: "Colubridae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "140 - 200 cm",
        habitat: "Deciduous forests, overgrown ruins, Borjomi & Imereti",
        diet: "Rodents, birds",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "An elegant, long, smooth-scaled snake that is an adept climber. Famous historically as the symbol of medicine (Rod of Aesculapius).",
        features: [
            "⚕️ Ancient symbol of medicine and healing",
            "🌳 Exceptional tree climber, often found in high forest canopies",
            "🛡️ Non-venomous constrictor, very calm temperament",
            "✨ Uniform olive-brown coloration with fine white spots on scales"
        ],
        image: "assets/images/aesculapian.jpg"
    },
    {
        id: "dolichophis-caspius",
        latin: "Dolichophis caspius",
        english: "Caspian Whipsnake",
        georgian: "კასპიური მცურავი",
        family: "Colubridae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "160 - 220 cm",
        habitat: "Open scrublands, grassy plains, Eastern Georgia",
        diet: "Rodents, lizards, birds",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "One of Europe and Georgia's largest snakes. Non-venomous but famously feisty and territorial — will stand its ground, hiss loudly, and bite if harassed.",
        features: [
            "📏 Longest non-venomous snake species in Georgia (up to 2.2 meters)",
            "⚡ Lightning-fast speed across open grasslands",
            "🛡️ Non-venomous despite aggressive threat displays",
            "🌾 Crucial predator controlling agricultural rodent pests"
        ],
        image: "assets/images/caspian.jpg"
    },
    {
        id: "elaphe-sauromates",
        latin: "Elaphe sauromates",
        english: "Blotched Snake",
        georgian: "ჭრელი მცურავი",
        family: "Colubridae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "130 - 180 cm",
        habitat: "Dry open woodlands, steppes, Kakheti vineyards",
        diet: "Rodents, eggs, birds",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "A heavy-bodied non-venomous rat snake with striking blotched markings. Constricts prey and frequently raids rodent burrows in agricultural lands.",
        features: [
            "🎨 Beautiful yellow-brown pattern with dark square dorsal blotches",
            "🥚 Capable of swallowing whole bird eggs intact",
            "🛡️ Non-venomous constrictor, beneficial for farmers",
            "🌿 Inhabits Kakheti wine regions and Alazani valley"
        ],
        image: "assets/images/blotched.jpg"
    },
    {
        id: "eryx-jaculus",
        latin: "Eryx jaculus",
        english: "Javelin Sand Boa",
        georgian: "დასავლური მახრჩობელა",
        family: "Boidae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "50 - 80 cm",
        habitat: "Sandy steppes, loose soil, Vashlovani National Park",
        diet: "Small rodents, lizards",
        activity: "Nocturnal / Burrowing",
        conservation: "Red List of Georgia",
        desc: "Georgia's only native boa species! A burrowing constrictor with small eyes and a blunt tail designed for pushing through sand and loose earth.",
        features: [
            "🏺 Georgia's single true Boa species (Boidae family)",
            "⏳ Burrows underneath sand and loose soil to ambush prey",
            "🛡️ Non-venomous constrictor, completely harmless",
            " Protected rare species in Kakheti semi-deserts"
        ],
        image: "assets/images/sand_boa.jpg"
    },
    {
        id: "typhlops-vermicularis",
        latin: "Typhlops vermicularis",
        english: "European Blind Snake / Worm Snake",
        georgian: "ჭიაგველა (Chiagvela)",
        family: "Typhlopidae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "20 - 35 cm",
        habitat: "Subterranean burrows under stones, Eastern Georgia",
        diet: "Ants, termites, pupae",
        activity: "Subterranean",
        conservation: "Least Concern",
        desc: "A tiny, harmless subterranean snake resembling a shiny pinkish earthworm. Possesses vestigial eyes covered by scales and feeds on ant nests.",
        features: [
            "🪱 Resembles a large pink earthworm; subterranean burrower",
            "🐜 Specialized feeder on ants, ant larvae, and termites",
            "🛡️ 100% harmless, lacks functional teeth for biting humans",
            "🪨 Found beneath flat stones on warm dry hillsides"
        ],
        image: "assets/images/blind_snake.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Check which page we are on
    if (document.getElementById('species-container')) {
        initSpeciesPage();
    }
    
    if (document.getElementById('quiz-container')) {
        initQuizPage();
    }
});

/* ==========================================================================
   SPECIES CATALOG & FILTERING ENGINE
   ========================================================================== */
function initSpeciesPage() {
    const container = document.getElementById('species-container');
    const searchInput = document.getElementById('search-input');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const countDisplay = document.getElementById('species-count');

    let currentToxicity = 'all';
    let searchQuery = '';

    function renderCards() {
        const filtered = SNAKES_DATABASE.filter(snake => {
            const matchesToxicity = (currentToxicity === 'all') || (snake.toxicity === currentToxicity);
            const matchesSearch = snake.english.toLowerCase().includes(searchQuery) ||
                                  snake.latin.toLowerCase().includes(searchQuery) ||
                                  snake.georgian.toLowerCase().includes(searchQuery) ||
                                  snake.habitat.toLowerCase().includes(searchQuery);
            return matchesToxicity && matchesSearch;
        });

        if (countDisplay) {
            countDisplay.innerText = `Showing ${filtered.length} of ${SNAKES_DATABASE.length} species`;
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 14px;">
                    <i class="fa-solid fa-ghost" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px;"></i>
                    <h3>No species found</h3>
                    <p style="color: var(--text-muted);">Try adjusting your search criteria or filters.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(snake => {
            let badgeClass = 'badge-safe';
            if (snake.toxicity === 'high') badgeClass = 'badge-high';
            if (snake.toxicity === 'mild') badgeClass = 'badge-mild';

            return `
                <div class="snake-card">
                    <div class="snake-img-wrapper">
                        <img src="${snake.image}" alt="${snake.english}" onerror="this.src='https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80'">
                        <span class="badge-toxic ${badgeClass}" style="position: absolute; top: 16px; right: 16px;">
                            ${snake.toxicity === 'high' ? '⚠️ ' : ''}${snake.toxicityLabel}
                        </span>
                    </div>
                    <div class="snake-card-body">
                        <div class="scientific-name">${snake.latin}</div>
                        <h3 class="snake-title">${snake.english}</h3>
                        <div style="font-weight: 700; color: var(--accent-orange); margin-bottom: 12px; font-size: 0.95rem;">
                            🇬🇪 ${snake.georgian}
                        </div>
                        <div class="snake-meta">
                            <span class="meta-item"><i class="fa-solid fa-[#0D2818] fa-ruler-horizontal"></i> ${snake.length}</span>
                            <span class="meta-item"><i class="fa-solid fa-tree"></i> ${snake.family}</span>
                        </div>
                        <p class="snake-desc">${snake.desc}</p>
                        <button class="btn-details" onclick="openSnakeModal('${snake.id}')">
                            <i class="fa-solid fa-book-open"></i> Full Profile & Specs
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Filter Buttons Listener
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentToxicity = btn.getAttribute('data-filter');
            renderCards();
        });
    });

    // Search Input Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderCards();
        });
    }

    renderCards();
}

/* ==========================================================================
   MODAL DIALOG ENGINE
   ========================================================================== */
function openSnakeModal(id) {
    const snake = SNAKES_DATABASE.find(s => s.id === id);
    if (!snake) return;

    let badgeClass = 'badge-safe';
    if (snake.toxicity === 'high') badgeClass = 'badge-high';
    if (snake.toxicity === 'mild') badgeClass = 'badge-mild';

    const modalHTML = `
        <div class="modal-overlay active" id="snake-modal" onclick="closeSnakeModal(event)">
            <div class="modal-card" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeSnakeModalDirect()"><i class="fa-solid fa-xmark"></i></button>
                
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; gap: 16px; flex-wrap: wrap;">
                    <div>
                        <span class="badge-toxic ${badgeClass}" style="margin-bottom: 8px;">${snake.toxicityLabel}</span>
                        <h2 style="font-size: 2.2rem; color: var(--primary);">${snake.english}</h2>
                        <div style="font-style: italic; color: var(--text-muted); font-size: 1.1rem;">${snake.latin} • 🇬🇪 ${snake.georgian}</div>
                    </div>
                </div>

                <div style="margin-bottom: 24px; border-radius: 12px; overflow: hidden; max-height: 320px;">
                    <img src="${snake.image}" alt="${snake.english}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=800&q=80'">
                </div>

                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px; background: #F8F6F0; padding: 20px; border-radius: 12px;">
                    <div>
                        <strong style="color: var(--primary);">📏 Average Length:</strong> ${snake.length}
                    </div>
                    <div>
                        <strong style="color: var(--primary);">🧬 Taxonomy Family:</strong> ${snake.family}
                    </div>
                    <div>
                        <strong style="color: var(--primary);">🏞️ Habitat in Georgia:</strong> ${snake.habitat}
                    </div>
                    <div>
                        <strong style="color: var(--primary);">🛡️ IUCN Red List:</strong> ${snake.conservation}
                    </div>
                </div>

                <h4 style="margin-bottom: 12px; font-size: 1.2rem; color: var(--primary);">Species Key Features & Identification</h4>
                <ul style="list-style: none; margin-bottom: 24px; display: flex; flex-direction: column; gap: 10px;">
                    ${snake.features.map(f => `<li style="display: flex; gap: 10px; font-size: 0.95rem; color: var(--text-dark);">${f}</li>`).join('')}
                </ul>

                <button class="btn-details" onclick="closeSnakeModalDirect()">
                    Close Profile
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function closeSnakeModal(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeSnakeModalDirect();
    }
}

function closeSnakeModalDirect() {
    const modal = document.getElementById('snake-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

/* ==========================================================================
   SAFETY QUIZ ENGINE
   ========================================================================== */
function initQuizPage() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    const questions = [
        {
            q: "Which viper species in Georgia is the largest and carries the most potent venom?",
            options: ["A) Vipera kaznakovi", "B) Macrovipera lebetina (Levantine Viper)", "C) Natrix natrix", "D) Coronella austriaca"],
            correct: 1,
            exp: "Macrovipera lebetina (Gyurza) is Georgia's largest and most dangerous venomous snake, reaching up to 1.8 meters in Kakheti and Kvemo Kartli."
        },
        {
            q: "How can you distinguish a harmless Water Snake (Natrix) from a Viper?",
            options: ["A) Natrix has round pupils; Vipers have vertical slit pupils", "B) Vipers are bright green", "C) Water snakes always rattle their tail", "D) Vipers have no scales"],
            correct: 0,
            exp: "Colubrids like Natrix have round pupils and slender heads, whereas Caucasian Vipers have vertical slit pupils and wide triangular heads."
        },
        {
            q: "What is the FIRST recommended action if someone is bitten by a Levantine Viper in Georgia?",
            options: ["A) Cut the bite mark and suck the venom", "B) Apply a tight tourniquet", "C) Keep the victim calm, immobilize the limb, and call 112 for hospital antivenom", "D) Apply ice directly on the wound"],
            correct: 2,
            exp: "Never cut, suck, or apply tourniquets. Immobilize the affected limb and seek emergency hospital care (112 emergency hotline) immediately."
        }
    ];

    let currentQ = 0;
    let score = 0;

    function renderQuestion() {
        if (currentQ >= questions.length) {
            quizContainer.innerHTML = `
                <div style="text-align: center; padding: 40px; background: #fff; border-radius: 16px; border: 2px solid var(--accent-orange);">
                    <i class="fa-solid fa-award" style="font-size: 3.5rem; color: var(--accent-gold); margin-bottom: 16px;"></i>
                    <h3 style="font-size: 2rem; margin-bottom: 12px;">Quiz Completed!</h3>
                    <p style="font-size: 1.2rem; color: var(--text-dark); margin-bottom: 24px;">Your Score: <strong>${score} / ${questions.length}</strong></p>
                    <button class="btn-details" onclick="location.reload()" style="max-width: 240px; margin: 0 auto;">Try Quiz Again</button>
                </div>
            `;
            return;
        }

        const qData = questions[currentQ];
        quizContainer.innerHTML = `
            <div style="background: #fff; padding: 32px; border-radius: 16px; border: 1px solid var(--border-light); box-shadow: var(--shadow-soft);">
                <span style="font-weight: 700; color: var(--accent-orange); font-size: 0.9rem; text-transform: uppercase;">Question ${currentQ + 1} of ${questions.length}</span>
                <h3 style="font-size: 1.4rem; margin: 12px 0 24px; color: var(--primary);">${qData.q}</h3>
                
                <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
                    ${qData.options.map((opt, idx) => `
                        <button class="filter-btn" style="text-align: left; padding: 14px 20px; font-size: 1rem;" onclick="checkAnswer(${idx})">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
                <div id="quiz-feedback"></div>
            </div>
        `;
    }

    window.checkAnswer = function(idx) {
        const qData = questions[currentQ];
        const feedback = document.getElementById('quiz-feedback');
        if (idx === qData.correct) {
            score++;
            feedback.innerHTML = `<div style="padding: 14px; background: rgba(16, 185, 129, 0.15); color: #059669; border-radius: 8px; font-weight: 700; margin-top: 16px;">✓ Correct! ${qData.exp}</div>`;
        } else {
            feedback.innerHTML = `<div style="padding: 14px; background: rgba(220, 38, 38, 0.15); color: #DC2626; border-radius: 8px; font-weight: 700; margin-top: 16px;">✗ Incorrect. ${qData.exp}</div>`;
        }
        setTimeout(() => {
            currentQ++;
            renderQuestion();
        }, 3000);
    };

    renderQuestion();
}
