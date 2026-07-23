/* ==========================================================================
   SNAKES OF GEORGIA - AUTHENTIC HERPETOLOGY SPECIES DATABASE
   All species & real photos verified scientifically for Georgia (Caucasus)
   ========================================================================== */

const SNAKES_DATABASE = [
    {
        id: "macrovipera-lebetina",
        latin: "Macrovipera lebetina obtusa",
        english: "Levantine Viper / Gorgan Viper",
        georgian: "გიურზა (Gyurza)",
        family: "Viperidae",
        toxicity: "high",
        toxicityLabel: "High Risk Venomous",
        length: "130 - 180 cm",
        habitat: "Arid semi-deserts, dry rocky hills, Kakheti (Vashlovani, Gareji) & Kvemo Kartli",
        diet: "Rodents, birds, lizards",
        activity: "Nocturnal during summer heat, diurnal in spring",
        conservation: "Red List of Georgia (Vulnerable)",
        desc: "Georgia's largest and most dangerous venomous snake. Heavy-bodied viper with grey-brown pattern and broad triangular head. Venom causes severe hemotoxic and cytotoxic tissue damage.",
        features: [
            "⚠️ Potent cytotoxic/hemotoxic venom requiring emergency medical intervention",
            "⛰️ Inhabits dry arid hillsides of Kakheti and Kvemo Kartli",
            "🛡️ Broad triangular head offset from narrow neck, vertical pupils",
            "🏥 Specific antivenom available in Georgian emergency hospitals"
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
        habitat: "Humid Colchis rainforests, Adjara, Guria, Samegrelo, Mtirala National Park",
        diet: "Small mammals, lizards, amphibians",
        activity: "Diurnal",
        conservation: "IUCN Endangered / Red List of Georgia",
        desc: "A striking, rare viper endemic to the humid Western Caucasus. Known for its brilliant orange-red lateral flanks and broad black dorsal stripe.",
        features: [
            "🌿 Endemic to the humid Colchis rainforest ecosystem of Western Georgia",
            "🎨 Bright red/orange flank coloration with contrasting dark zigzag band",
            "⚠️ Venom contains strongly hemotoxic components",
            "🛡️ Highly endangered and strictly protected species"
        ],
        image: "assets/images/kaznakovi.jpg"
    },
    {
        id: "vipera-dinniki",
        latin: "Vipera dinniki",
        english: "Dinnik's Viper / Caucasian Subalpine Viper",
        georgian: "დინიკის გველგესლა",
        family: "Viperidae",
        toxicity: "high",
        toxicityLabel: "High Risk Venomous",
        length: "45 - 55 cm",
        habitat: "Subalpine meadows & rocky screes above 1,800m (Svaneti, Kazbegi, Tusheti)",
        diet: "Alpine lizards, small rodents",
        activity: "Diurnal",
        conservation: "IUCN Vulnerable",
        desc: "High-altitude mountain viper adapted to harsh subalpine climates of the High Caucasus mountains. Exhibits variable coloration from greenish to melanistic black.",
        features: [
            "🏔️ Alpine species restricted to high Caucasus mountain ridges",
            "❄️ Active during cool mountain sunshine hours",
            "⚠️ Venomous bite causes local necrosis and systemic pain",
            "🔍 Short, compact body with upturned snout scale"
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
        habitat: "Dry open steppes, grassy plains, Shida Kartli & Javakheti",
        diet: "Orthopteran insects (crickets/grasshoppers), lizards, mice",
        activity: "Diurnal",
        conservation: "IUCN Vulnerable",
        desc: "A small greyish viper with a dark wavy zig-zag dorsal pattern, native to dry continental grasslands of Central and Southern Georgia.",
        features: [
            "🌾 Inhabits continental steppe habitats of Georgia",
            "🦗 Juveniles feed heavily on grasshoppers and crickets",
            "⚠️ Venomous; bite causes localized swelling and severe pain",
            "🔍 Narrow triangular head with wavy dorsal stripe"
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
        habitat: "Volcanic highlands & rocky slopes of Javakheti plateau (2,000m+)",
        diet: "Lizards, small mice, crickets",
        activity: "Diurnal",
        conservation: "IUCN Vulnerable",
        desc: "Small alpine steppe viper native to the volcanic plateau of Javakheti in Southern Georgia and neighboring Armenia.",
        features: [
            "🌋 Restricted to high altitude volcanic steppes of Southern Georgia",
            "📏 Smallest viper species native to Georgia",
            "⚠️ Venomous bite requires medical evaluation",
            "🛡️ Threatened by habitat degradation from overgrazing"
        ],
        image: "assets/images/eriwanensis.jpg"
    },
    {
        id: "vipera-ammodytes",
        latin: "Vipera ammodytes",
        english: "Horned Viper / Nose-horned Viper",
        georgian: "ცხვირრქოსანი გველგესლა (რინქოფი)",
        family: "Viperidae",
        toxicity: "high",
        toxicityLabel: "High Risk Venomous",
        length: "60 - 90 cm",
        habitat: "Dry rocky hillsides, extreme Southeastern Georgia",
        diet: "Small mammals, birds, lizards",
        activity: "Diurnal / Crepuscular",
        conservation: "Red List of Georgia",
        desc: "Famous for the soft fleshy 'horn' on the tip of its snout. Possesses long fangs and high venom yield. Extremely rare in Georgia.",
        features: [
            "🦏 Distinctive fleshy horn scale on snout tip",
            "⚠️ High venom toxicity and yield",
            "⛰️ Found on sunny rocky slopes and dry gorges",
            "🛡️ Strictly protected rare viper in Georgia"
        ],
        image: "assets/images/ammodytes.jpg"
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
        habitat: "Arid hillsides, semi-deserts, Vashlovani & Kakheti scrub",
        diet: "Lizards, rodents, other snakes",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "Large, fast-moving snake with prominent brow ridges giving it an intense expression. Rear-fanged grooved teeth deliver mild venom harmless to humans.",
        features: [
            "⚡ Extremely fast diurnal hunter across semi-deserts",
            "👁️ Deep-set eyes with prominent brow ridges",
            "🧪 Grooved rear fangs in back of jaw; harmless to humans",
            "🐍 Often raises front of body like a cobra when cornered"
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
        habitat: "Rocky outcrops, stone ruins, old walls in Tbilisi & Kakheti",
        diet: "Lizards, geckos",
        activity: "Nocturnal",
        conservation: "Least Concern",
        desc: "Slender nocturnal snake with vertical cat-like pupils. Specialized in hunting sleeping geckos and wall lizards on warm stones at night.",
        features: [
            "🐱 Vertical slit cat pupils",
            "🌙 Strictly nocturnal rock-climber",
            "🧪 Mild rear-fanged venom immobilizes small lizards",
            "🏢 Common around ancient stone fortresses in Georgia"
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
        diet: "Amphibians (frogs, toads), small fish",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "Georgia's most ubiquitous harmless snake. Identified by bright yellow or orange collar patches behind its head. Expert swimmer.",
        features: [
            "🟡 Bright yellow or orange neck collar patches",
            "🏊 Excellent swimmer in freshwater rivers and lakes",
            "🛡️ 100% harmless; feigns death (thanatosis) when threatened",
            "🐸 Vital predator controlling frog populations"
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
        habitat: "Rivers, reservoirs, Black Sea coastal river mouths",
        diet: "Fish",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "Semi-aquatic non-venomous snake with a dark checkerboard pattern. Spends long periods diving underwater hunting small fish.",
        features: [
            "🐟 Specialized aquatic fish hunter",
            "🎲 Checkerboard spot pattern on dorsal scales",
            "🛡️ Completely harmless and gentle",
            "🌊 Abundant along Mtkvari river and Georgian coast"
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
        habitat: "Deciduous mountain forests, Borjomi, Imereti & Racha",
        diet: "Rodents, birds",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "Elegant, long smooth-scaled snake that excels at climbing trees. Historically famous as the classical Rod of Aesculapius medical symbol.",
        features: [
            "⚕️ Classical symbol of medicine and healing",
            "🌳 Exceptional forest canopy climber",
            "🛡️ Non-venomous gentle constrictor",
            "✨ Smooth olive-brown scales with delicate light flecks"
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
        habitat: "Open grassy steppes, dry scrub, Eastern Georgia",
        diet: "Rodents, lizards, birds",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "One of Georgia's largest non-venomous snakes. Fast-moving and feisty — will hiss and perform bluff strikes if cornered, but non-venomous.",
        features: [
            "📏 Reaches up to 2.2 meters in length",
            "⚡ Lightning-fast runner across open terrain",
            "🛡️ Non-venomous despite loud threat displays",
            "🌾 Important natural pest control in farmland"
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
        habitat: "Dry open woodlands, Kakheti vineyards, Alazani Valley",
        diet: "Rodents, eggs, birds",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "A heavy non-venomous rat snake with yellow-brown body and dark square blotches. Constricts prey and raids rodent burrows.",
        features: [
            "🎨 Distinctive dark blotch pattern on yellowish background",
            "🥚 Swallows bird eggs whole",
            "🛡️ Beneficial non-venomous agricultural ally",
            "🌿 Widespread in Kakheti wine region"
        ],
        image: "assets/images/blotched.jpg"
    },
    {
        id: "hemorrhois-nummifer",
        latin: "Hemorrhois nummifer",
        english: "Coin-marked Snake / Asian Racer",
        georgian: "მონეტისებრი მცურავი",
        family: "Colubridae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "80 - 120 cm",
        habitat: "Dry rocky canyons & arid hillsides of Southern Georgia",
        diet: "Lizards, small rodents",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "Slender non-venomous racer with round coin-like dark spots along its back. Frequently mimics viper threat postures when cornered.",
        features: [
            "🪙 Distinctive coin-shaped dorsal spots",
            "🎭 Mimics viper defensive behavior when threatened",
            "🛡️ Completely non-venomous",
            "⛰️ Inhabits dry rocky ravines"
        ],
        image: "assets/images/nummifer.jpg"
    },
    {
        id: "platyceps-najadum",
        latin: "Platyceps najadum",
        english: "Dahl's Whipsnake / Slender Whipsnake",
        georgian: "წითელმუცელა მცურავი (წვრილი მცურავი)",
        family: "Colubridae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "100 - 140 cm",
        habitat: "Sun-warmed rocky slopes & dry scrublands",
        diet: "Lizards",
        activity: "Diurnal",
        conservation: "Least Concern",
        desc: "An exceptionally slender, elegant snake with a olive-grey head and neck adorned with dark black spots bordered in white.",
        features: [
            "🥢 Extremely slender pencil-like neck and body",
            "🎨 Black neck spots with white outer rings",
            "⚡ Incredibly agile and fast across rocks",
            "🛡️ Completely harmless lizard specialist"
        ],
        image: "assets/images/najadum.jpg"
    },
    {
        id: "eirenis-collaris",
        latin: "Eirenis collaris",
        english: "Collared Dwarf Snake",
        georgian: "საყელოიანი ეირენისი",
        family: "Colubridae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "25 - 40 cm",
        habitat: "Dry rocky hillsides under stones, Kakheti & Kvemo Kartli",
        diet: "Insects, spiders, scorpions",
        activity: "Crepuscular / Secretive",
        conservation: "Least Concern",
        desc: "A small harmless snake with a prominent black collar band on its neck. Secretive species hiding under flat rocks.",
        features: [
            "🖤 Dark collar band behind head",
            "📏 Small size, under 40 cm long",
            "🦂 Feeds on scorpions and insects under stones",
            "🛡️ Completely harmless and docile"
        ],
        image: "assets/images/collaris.jpg"
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
        desc: "Georgia's single native Boa species! A thick burrowing constrictor with eyes set high on its head and a blunt tail for pushing through sand.",
        features: [
            "🏺 Georgia's only true native Boa species",
            "⏳ Burrows beneath loose soil and sand",
            "🛡️ Non-venomous constrictor, gentle temperament",
            " Highly rare and protected in Kakheti semi-deserts"
        ],
        image: "assets/images/sand_boa.jpg"
    },
    {
        id: "typhlops-vermicularis",
        latin: "Xerotyphlops vermicularis",
        english: "European Blind Snake / Worm Snake",
        georgian: "ჭიაგველა (Chiagvela)",
        family: "Typhlopidae",
        toxicity: "safe",
        toxicityLabel: "Harmless (Non-venomous)",
        length: "20 - 35 cm",
        habitat: "Subterranean burrows under flat stones, Eastern Georgia",
        diet: "Ants, termites, pupae",
        activity: "Subterranean",
        conservation: "Least Concern",
        desc: "A tiny subterranean snake resembling a shiny pinkish earthworm. Lacks functional teeth and feeds exclusively on ant colonies.",
        features: [
            "🪱 Resembles a large pink earthworm",
            "🐜 Specialized ant and termite nest feeder",
            "🛡️ 100% harmless, cannot bite humans",
            "🪨 Found beneath warm stones on dry hills"
        ],
        image: "assets/images/blind_snake.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
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
            countDisplay.innerText = `Showing ${filtered.length} of ${SNAKES_DATABASE.length} native Georgian species`;
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 14px;">
                    <i class="fa-solid fa-ghost" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 16px;"></i>
                    <h3>No species found</h3>
                    <p style="color: var(--text-muted);">Try adjusting your search query or filter settings.</p>
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
                        <img src="${snake.image}" alt="${snake.english}" loading="lazy">
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
                            <span class="meta-item"><i class="fa-solid fa-ruler-horizontal"></i> ${snake.length}</span>
                            <span class="meta-item"><i class="fa-solid fa-dna"></i> ${snake.family}</span>
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

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentToxicity = btn.getAttribute('data-filter');
            renderCards();
        });
    });

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

                <div style="margin-bottom: 24px; border-radius: 12px; overflow: hidden; max-height: 360px;">
                    <img src="${snake.image}" alt="${snake.english}" style="width: 100%; height: 100%; object-fit: cover;">
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
            q: "Which viper species in Georgia is the largest and carries the most dangerous hemotoxic venom?",
            options: ["A) Vipera kaznakovi", "B) Macrovipera lebetina obtusa (Levantine Viper / Gyurza)", "C) Natrix natrix", "D) Coronella austriaca"],
            correct: 1,
            exp: "Macrovipera lebetina obtusa (Gyurza) is Georgia's largest and most dangerous venomous snake, inhabiting dry Kakheti and Kvemo Kartli hills."
        },
        {
            q: "How can you distinguish a harmless Grass Snake (Natrix natrix) from a Caucasian Viper?",
            options: ["A) Grass Snake has round pupils and yellow neck collar patches", "B) Vipers have round pupils and green spots", "C) Water snakes always rattle their tail", "D) Vipers have no scales"],
            correct: 0,
            exp: "Grass Snakes have round pupils and distinctive yellow/orange collar patches behind their head, unlike the vertical pupils and broad triangular head of vipers."
        },
        {
            q: "What is the FIRST recommended action if someone is bitten by a Levantine Viper in Georgia?",
            options: ["A) Cut the bite mark and suck the venom", "B) Apply a tight tourniquet", "C) Keep victim calm, immobilize the limb, and call 112 emergency services immediately", "D) Apply ice directly on the wound"],
            correct: 2,
            exp: "Never cut, suck, or apply tourniquets. Immobilize the limb below heart level and call Georgia's emergency services (112) for hospital antivenom."
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
