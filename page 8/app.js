/* ==========================================================================
   CYBERFORGE 3D PC BUILDER - HYPER-DETAILED WEBGL 3D STAGE ENGINE
   ========================================================================== */

// Component Data Store
const HARDWARE_PARTS = {
    cpu: [
        { id: "i9-14900ks", name: "Intel Core i9-14900KS", specs: "24-Cores • 6.2GHz Unlocked", tdp: 253, price: 1850, socket: "LGA1700" },
        { id: "r7-7800x3d", name: "AMD Ryzen 7 7800X3D", specs: "8-Cores • 96MB 3D V-Cache", tdp: 120, price: 1250, socket: "AM5" },
        { id: "i7-14700k", name: "Intel Core i7-14700K", specs: "20-Cores • 5.6GHz Boost", tdp: 190, price: 1100, socket: "LGA1700" },
        { id: "r9-7950x3d", name: "AMD Ryzen 9 7950X3D", specs: "16-Cores • 144MB Cache", tdp: 162, price: 1950, socket: "AM5" }
    ],
    gpu: [
        { id: "rtx-4090", name: "NVIDIA GeForce RTX 4090 OC 24GB", specs: "24GB GDDR6X • DLSS 3.5", tdp: 450, price: 5800, color: 0x00f0ff, brand: "NVIDIA" },
        { id: "rtx-4080s", name: "NVIDIA GeForce RTX 4080 Super 16GB", specs: "16GB GDDR6X • Ray Tracing", tdp: 320, price: 3400, color: 0xff0055, brand: "NVIDIA" },
        { id: "rx-7900xtx", name: "AMD Radeon RX 7900 XTX 24GB", specs: "24GB GDDR6 • RDNA 3", tdp: 355, price: 3100, color: 0x8b5cf6, brand: "AMD" },
        { id: "rtx-4070ti", name: "NVIDIA GeForce RTX 4070 Ti Super", specs: "16GB GDDR6X • 2K/4K Beast", tdp: 285, price: 2450, color: 0x10b981, brand: "NVIDIA" }
    ],
    ram: [
        { id: "ram-64gb", name: "Corsair Dominator Titanium 64GB", specs: "2x32GB DDR5 7200MHz RGB", tdp: 15, price: 950, color: 0x00f0ff },
        { id: "ram-32gb", name: "G.Skill Trident Z5 RGB 32GB", specs: "2x16GB DDR5 6400MHz CL32", tdp: 10, price: 480, color: 0xff0055 },
        { id: "ram-128gb", name: "Kingston Fury Beast 128GB", specs: "4x32GB DDR5 6000MHz", tdp: 25, price: 1650, color: 0x8b5cf6 }
    ],
    cooler: [
        { id: "aio-360", name: "NZXT Kraken Elite 360 RGB", specs: "360mm Radiator • LCD Display", tdp: 25, price: 820 },
        { id: "aio-240", name: "ASUS ROG Ryujin III 240", specs: "240mm Radiator • OLED Screen", tdp: 20, price: 680 },
        { id: "air-noctua", name: "Noctua NH-D15 chromax.black", specs: "Dual-Tower Air Cooler", tdp: 15, price: 390 }
    ],
    psu: [
        { id: "psu-1200", name: "ASUS ROG Thor 1200W Platinum II", specs: "1200W • PCIe 5.0 ATX 3.0", tdp: 0, price: 1150 },
        { id: "psu-1000", name: "Corsair RM1000x Shift 1000W", specs: "1000W • 80+ Gold Fully Modular", tdp: 0, price: 650 },
        { id: "psu-850", name: "MSI MAG A850GL 850W", specs: "850W • 80+ Gold Compact ATX3.0", tdp: 0, price: 420 }
    ]
};

// Active Custom PC Build State
let activeBuild = {
    cpu: HARDWARE_PARTS.cpu[0],
    gpu: HARDWARE_PARTS.gpu[0],
    ram: HARDWARE_PARTS.ram[0],
    cooler: HARDWARE_PARTS.cooler[0],
    psu: HARDWARE_PARTS.psu[0]
};

// Three.js Scene Variables
let scene, camera, renderer, controls;
let pcCaseGroup, gpuGroup, ramGroup, coolerGroup, fanBlades = [];
let ambientLight, mainLight, rimLight;

let casePointLight1, casePointLight2;

document.addEventListener('DOMContentLoaded', () => {
    initUIControls();

    if (document.getElementById('canvas-3d')) {
        initThreeJSStudio();
        updateBuildSummary();
    }
});

/* ==========================================================================
   1. UI CONTROLS & PART SELECTION
   ========================================================================== */
function initUIControls() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const optionsContainer = document.getElementById('part-options-list');

    if (!optionsContainer) return;

    function renderPartOptions(category) {
        const parts = HARDWARE_PARTS[category] || [];

        optionsContainer.innerHTML = parts.map(part => {
            const isSelected = activeBuild[category]?.id === part.id;
            return `
                <div class="part-card ${isSelected ? 'selected' : ''}" onclick="selectPart('${category}', '${part.id}')">
                    <div>
                        <div class="part-name">${part.name}</div>
                        <div class="part-spec">${part.specs} • ${part.tdp}W TDP</div>
                    </div>
                    <div class="part-price">${part.price} ₾</div>
                </div>
            `;
        }).join('');
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderPartOptions(category);
        });
    });

    renderPartOptions('gpu');
}

function selectPart(category, partId) {
    const part = HARDWARE_PARTS[category].find(p => p.id === partId);
    if (!part) return;

    activeBuild[category] = part;

    const tabBtn = document.querySelector(`.tab-btn[data-category="${category}"]`);
    if (tabBtn) tabBtn.click();

    update3DHardwareMeshes();
    updateBuildSummary();
}

function updateBuildSummary() {
    const totalTDP = activeBuild.cpu.tdp + activeBuild.gpu.tdp + activeBuild.ram.tdp + activeBuild.cooler.tdp + 45;
    const totalPrice = activeBuild.cpu.price + activeBuild.gpu.price + activeBuild.ram.price + activeBuild.cooler.price + activeBuild.psu.price;
    const recommendedPSU = Math.ceil((totalTDP * 1.3) / 50) * 50;

    const wattageEl = document.getElementById('wattage-val');
    const psuRecEl = document.getElementById('psu-rec-val');
    const priceEl = document.getElementById('total-price-val');
    const fillEl = document.getElementById('wattage-fill');
    const fpsEl = document.getElementById('fps-est-val');

    if (wattageEl) wattageEl.innerText = `${totalTDP} W`;
    if (psuRecEl) psuRecEl.innerText = `Recommended: ${recommendedPSU}W`;
    if (priceEl) priceEl.innerText = `${totalPrice} ₾`;
    
    if (fillEl) {
        const percentage = Math.min(100, Math.round((totalTDP / 1000) * 100));
        fillEl.style.width = `${percentage}%`;
    }

    if (fpsEl) {
        const fps = activeBuild.gpu.id === 'rtx-4090' ? '165+ FPS (4K Ultra)' : '120+ FPS (4K High)';
        fpsEl.innerText = fps;
    }
}

/* ==========================================================================
   2. HYPER-DETAILED THREE.JS WEBGL 3D STAGE
   ========================================================================== */
function initThreeJSStudio() {
    const canvas = document.getElementById('canvas-3d');
    const container = canvas.parentElement;

    // Scene & Background
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070b14);

    // Camera
    camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(18, 12, 22);

    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // OrbitControls
    if (typeof THREE.OrbitControls !== 'undefined') {
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxDistance = 45;
        controls.minDistance = 8;
        controls.maxPolarAngle = Math.PI / 2 + 0.05;
    }

    // Studio Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Key Light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(15, 25, 15);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.bias = -0.0001;
    scene.add(keyLight);

    // Cyan Rim Light
    const rimLight = new THREE.DirectionalLight(0x00f0ff, 2.0);
    rimLight.position.set(-15, 10, -15);
    scene.add(rimLight);

    // Internal Case Point Lights
    casePointLight1 = new THREE.PointLight(0x00f0ff, 4.5, 20);
    casePointLight1.position.set(0, 3, 0);
    scene.add(casePointLight1);

    casePointLight2 = new THREE.PointLight(0xff0055, 4.0, 20);
    casePointLight2.position.set(0, -3, 2);
    scene.add(casePointLight2);

    // HDRI Environment for Hyper-Realistic Metal/Glass Reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    new THREE.RGBELoader()
        .setDataType(THREE.UnsignedByteType)
        .load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/equirectangular/royal_esplanade_1k.hdr', function (texture) {
            const envMap = pmremGenerator.fromEquirectangular(texture).texture;
            scene.environment = envMap;
            texture.dispose();
            pmremGenerator.dispose();
        });

    // Reflective Metallic Grid Floor
    const gridHelper = new THREE.GridHelper(50, 25, 0x00f0ff, 0x162238);
    gridHelper.position.y = -7.5;
    scene.add(gridHelper);

    // Build Detailed 3D PC Chassis & Hardware Components
    buildPhotorealisticPC();

    window.addEventListener('resize', onWindowResize);
    animateStudio();
}

function buildPhotorealisticPC() {
    pcCaseGroup = new THREE.Group();
    scene.add(pcCaseGroup);

    // Load Procedural Case (Textured) directly
    buildFallbackCase();

    // 4. Rotating RGB Fans
    createPhotorealisticFans();

    // 5. Mount Dynamic Parts
    update3DHardwareMeshes();
}

function buildFallbackCase() {
    // --- PURE 3D PROCEDURAL PBR MATERIALS ---
    const chassisMat = new THREE.MeshPhysicalMaterial({
        color: 0x111625, metalness: 0.9, roughness: 0.25, clearcoat: 0.2
    });
    const darkSteelMat = new THREE.MeshPhysicalMaterial({
        color: 0x090d16, metalness: 0.85, roughness: 0.35
    });
    const pcbMat = new THREE.MeshPhysicalMaterial({
        color: 0x0c101c, metalness: 0.25, roughness: 0.65
    });
    const silverMetalMat = new THREE.MeshPhysicalMaterial({
        color: 0xd8d8d8, metalness: 0.95, roughness: 0.15, clearcoat: 0.4
    });
    const goldMat = new THREE.MeshPhysicalMaterial({
        color: 0xd4af37, metalness: 0.9, roughness: 0.2, clearcoat: 0.3
    });
    const darkAccentMat = new THREE.MeshPhysicalMaterial({
        color: 0x1a2030, metalness: 0.8, roughness: 0.3
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff, transparent: true, opacity: 0.12,
        roughness: 0.0, metalness: 0.1, transmission: 0.92,
        ior: 1.5, thickness: 0.15, clearcoat: 1.0, clearcoatRoughness: 0.0
    });

    // --- 1. CASE FRAME (Corner Pillars & Frame) ---
    const pillarGeo = new THREE.BoxGeometry(0.45, 12.8, 0.45);
    const p1 = new THREE.Mesh(pillarGeo, chassisMat); p1.position.set(-4.5, 0, -5.5); pcCaseGroup.add(p1);
    const p2 = new THREE.Mesh(pillarGeo, chassisMat); p2.position.set(4.5, 0, -5.5); pcCaseGroup.add(p2);
    const p3 = new THREE.Mesh(pillarGeo, chassisMat); p3.position.set(-4.5, 0, 5.5); pcCaseGroup.add(p3);
    const p4 = new THREE.Mesh(pillarGeo, chassisMat); p4.position.set(4.5, 0, 5.5); pcCaseGroup.add(p4);

    // Top & Bottom Aluminum Frame Plates
    const platGeo = new THREE.BoxGeometry(9.5, 0.4, 11.5);
    const topPlate = new THREE.Mesh(platGeo, chassisMat);
    topPlate.position.set(0, 6.4, 0); pcCaseGroup.add(topPlate);
    const botPlate = new THREE.Mesh(platGeo, chassisMat);
    botPlate.position.set(0, -6.4, 0); pcCaseGroup.add(botPlate);

    // --- 2. SOLID CASE PANELS ---
    // Back solid steel wall (behind motherboard)
    const backPanel = new THREE.Mesh(new THREE.BoxGeometry(9.2, 12.4, 0.15), darkSteelMat);
    backPanel.position.set(0, 0, -5.6); pcCaseGroup.add(backPanel);

    // Right side solid steel panel
    const rightPanel = new THREE.Mesh(new THREE.BoxGeometry(0.15, 12.4, 11), darkSteelMat);
    rightPanel.position.set(4.6, 0, 0); pcCaseGroup.add(rightPanel);

    // Front panel (solid steel + ventilation mesh overlay)
    const frontPanel = new THREE.Mesh(new THREE.BoxGeometry(0.15, 12.4, 11), darkSteelMat);
    frontPanel.position.set(-4.6, 0, 0); pcCaseGroup.add(frontPanel);
    const frontMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 11.8, 10.5),
        new THREE.MeshStandardMaterial({ color: 0x060911, metalness: 0.9, wireframe: true })
    );
    frontMesh.position.set(-4.45, 0, 0); pcCaseGroup.add(frontMesh);

    // Viewer-Facing Left Side: Tempered Glass Panel
    const glassSide = new THREE.Mesh(new THREE.BoxGeometry(9.2, 12.4, 0.1), glassMat);
    glassSide.position.set(0, 0, 5.55); pcCaseGroup.add(glassSide);

    // --- 3. HIGH-DETAIL 3D MOTHERBOARD (ATX Form Factor) ---
    // Dark PCB Board Base
    const moboBoard = new THREE.Mesh(new THREE.BoxGeometry(8.2, 10.5, 0.25), pcbMat);
    moboBoard.position.set(0, 0.8, -5.0); pcCaseGroup.add(moboBoard);

    // CPU Socket Area (Golden LGA Pins + Silver Metal Retention Bracket + Silver IHS Lid)
    const socketBase = new THREE.Mesh(new THREE.BoxGeometry(2.0, 2.0, 0.1), goldMat);
    socketBase.position.set(-0.8, 2.8, -4.8); pcCaseGroup.add(socketBase);

    const cpuFrame = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.2, 0.08), darkAccentMat);
    cpuFrame.position.set(-0.8, 2.8, -4.85); pcCaseGroup.add(cpuFrame);

    const ihsLid = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 0.12), silverMetalMat);
    ihsLid.position.set(-0.8, 2.8, -4.7); pcCaseGroup.add(ihsLid);

    // VRM Heatsink Blocks (Top & Left of CPU)
    const vrmTop = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.2, 0.5), silverMetalMat);
    vrmTop.position.set(-0.2, 4.7, -4.65); pcCaseGroup.add(vrmTop);

    const vrmLeft = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.8, 0.5), darkAccentMat);
    vrmLeft.position.set(-2.8, 2.3, -4.65); pcCaseGroup.add(vrmLeft);

    // VRM RGB Accent Strip
    const vrmRgb = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.1, 0.1),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff }));
    vrmRgb.position.set(-0.2, 4.05, -4.38); pcCaseGroup.add(vrmRgb);

    // Chipset Heatsink Block (Bottom Right)
    const chipsetHs = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.2, 0.4), darkAccentMat);
    chipsetHs.position.set(2.2, -1.8, -4.7); pcCaseGroup.add(chipsetHs);
    const chipsetBadge = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, 0.3),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff }));
    chipsetBadge.position.set(2.2, -1.8, -4.48); pcCaseGroup.add(chipsetBadge);

    // 4 x DDR5 RAM Slots (Slots next to CPU)
    for (let r = 0; r < 4; r++) {
        const slotTrack = new THREE.Mesh(new THREE.BoxGeometry(0.12, 3.2, 0.25), darkAccentMat);
        slotTrack.position.set(1.2 + (r * 0.5), 2.8, -4.75);
        pcCaseGroup.add(slotTrack);

        // Silver latch clips at top and bottom of each RAM slot
        const clipTop = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.2, 0.3), silverMetalMat);
        clipTop.position.set(1.2 + (r * 0.5), 4.3, -4.7);
        pcCaseGroup.add(clipTop);
        const clipBot = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.2, 0.3), silverMetalMat);
        clipBot.position.set(1.2 + (r * 0.5), 1.3, -4.7);
        pcCaseGroup.add(clipBot);
    }

    // 2 x M.2 NVMe SSD Armor Covers
    const m2Armor1 = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.55, 0.25), silverMetalMat);
    m2Armor1.position.set(-0.5, 0.8, -4.72); pcCaseGroup.add(m2Armor1);
    const m2Armor2 = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.55, 0.25), darkAccentMat);
    m2Armor2.position.set(-0.5, -2.8, -4.72); pcCaseGroup.add(m2Armor2);

    // 3 x Steel-Shielded PCIe x16 Slots
    for (let p = 0; p < 3; p++) {
        const pcieSlot = new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.25, 0.35), silverMetalMat);
        pcieSlot.position.set(-0.5, -0.2 - (p * 1.2), -4.7);
        pcCaseGroup.add(pcieSlot);
    }

    // Rows of 3D Solid Cylindrical Capacitors on Motherboard
    const capGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.3, 16);
    for (let c = 0; c < 8; c++) {
        const cap = new THREE.Mesh(capGeo, silverMetalMat);
        cap.rotation.x = Math.PI / 2;
        cap.position.set(-3.2 + (c * 0.3), 4.1, -4.7);
        pcCaseGroup.add(cap);
    }

    // ATX 24-Pin Power Socket (Right edge)
    const atxPower = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2.2, 0.4), darkAccentMat);
    atxPower.position.set(3.7, 2.5, -4.7); pcCaseGroup.add(atxPower);

    // --- 4. PSU SHROUD (Bottom Power Supply Compartment) ---
    const psuBox = new THREE.Mesh(new THREE.BoxGeometry(8.8, 3.0, 10.5), darkSteelMat);
    psuBox.position.set(0, -5.0, 0); pcCaseGroup.add(psuBox);

    const psuTopPlate = new THREE.Mesh(new THREE.BoxGeometry(8.9, 0.15, 10.6), chassisMat);
    psuTopPlate.position.set(0, -3.4, 0); pcCaseGroup.add(psuTopPlate);

    // Glowing CyberForge Logo Bar on PSU Shroud Side
    const psuLogoBar = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.3, 0.08),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff }));
    psuLogoBar.position.set(0, -4.8, 5.3); pcCaseGroup.add(psuLogoBar);
}

function createPhotorealisticFans() {
    const ringGeo = new THREE.TorusGeometry(1.3, 0.12, 16, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    // 3 Front Intake RGB Fans
    for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.y = Math.PI / 2;
        ring.position.set(-4.3, 4 - (i * 3.8), 0);
        pcCaseGroup.add(ring);

        const bladeGroup = new THREE.Group();
        const bladeGeo = new THREE.BoxGeometry(0.05, 1.1, 0.28);
        const bladeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 });

        for (let b = 0; b < 7; b++) {
            const blade = new THREE.Mesh(bladeGeo, bladeMat);
            blade.rotation.x = (b * Math.PI / 3.5);
            bladeGroup.add(blade);
        }

        bladeGroup.position.set(-4.3, 4 - (i * 3.8), 0);
        pcCaseGroup.add(bladeGroup);
        fanBlades.push(bladeGroup);
    }
}

function createDetailedGPUMesh() {
    if (gpuGroup) pcCaseGroup.remove(gpuGroup);
    gpuGroup = new THREE.Group();
    // Mount into top PCIe x16 slot position
    gpuGroup.position.set(-0.5, -0.2, -3.2);
    pcCaseGroup.add(gpuGroup);

    const gpuColor = activeBuild.gpu.color || 0x00f0ff;
    const darkShroudMat = new THREE.MeshPhysicalMaterial({ color: 0x0d111a, metalness: 0.9, roughness: 0.25, clearcoat: 0.3 });
    const silverMat = new THREE.MeshPhysicalMaterial({ color: 0xd8d8d8, metalness: 0.95, roughness: 0.15 });

    // Main GPU Card Body
    const gpuBody = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.8, 3.2), darkShroudMat);
    gpuGroup.add(gpuBody);

    // Top Brushed Aluminum Backplate
    const backplate = new THREE.Mesh(new THREE.BoxGeometry(7.3, 0.1, 3.3), silverMat);
    backplate.position.set(0, 0.95, 0);
    gpuGroup.add(backplate);

    // Glowing RGB Side Brand Bar
    const rgbBar = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.15, 0.1),
        new THREE.MeshBasicMaterial({ color: gpuColor }));
    rgbBar.position.set(0, 0.5, 1.62);
    gpuGroup.add(rgbBar);

    // 3 Recessed Cooling Fans
    for (let f = 0; f < 3; f++) {
        const xPos = -2.1 + (f * 2.1);
        const fanHousing = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.06, 16, 32),
            new THREE.MeshPhysicalMaterial({ color: 0x151822, metalness: 0.8, roughness: 0.3 }));
        fanHousing.rotation.x = Math.PI / 2;
        fanHousing.position.set(xPos, -0.1, 1.62);
        gpuGroup.add(fanHousing);

        const fanHub = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 16), silverMat);
        fanHub.rotation.x = Math.PI / 2;
        fanHub.position.set(xPos, -0.1, 1.65);
        gpuGroup.add(fanHub);

        for (let b = 0; b < 7; b++) {
            const blade = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.55, 0.02),
                new THREE.MeshStandardMaterial({ color: 0x222630, transparent: true, opacity: 0.85 }));
            blade.rotation.z = (b * Math.PI * 2 / 7);
            blade.position.set(xPos, -0.1, 1.64);
            gpuGroup.add(blade);
        }
    }

    // Cooling Heatpipe Fins on the side
    const finMat = new THREE.MeshPhysicalMaterial({ color: 0x252a36, metalness: 0.8, roughness: 0.35 });
    for (let i = 0; i < 10; i++) {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(6.8, 0.04, 2.6), finMat);
        fin.position.set(0, -0.7 + (i * 0.14), -0.1);
        gpuGroup.add(fin);
    }
}

function createDetailedRAMMesh() {
    if (ramGroup) pcCaseGroup.remove(ramGroup);
    ramGroup = new THREE.Group();
    pcCaseGroup.add(ramGroup);

    const ramColor = activeBuild.ram.color || 0x00f0ff;
    const stickMat = new THREE.MeshPhysicalMaterial({ color: 0x161b26, metalness: 0.85, roughness: 0.25 });
    const silverAccentMat = new THREE.MeshPhysicalMaterial({ color: 0xd8d8d8, metalness: 0.95, roughness: 0.15 });

    // Mount 2 DDR5 Sticks into Slots 2 and 4
    for (let i = 0; i < 2; i++) {
        const ramStick = new THREE.Group();

        // Main Heatspreader Body
        const body = new THREE.Mesh(new THREE.BoxGeometry(0.14, 2.8, 0.8), stickMat);
        ramStick.add(body);

        // Silver Heatsink Armor Line
        const armor = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.2, 0.75), silverAccentMat);
        armor.position.set(0, 0.2, 0);
        ramStick.add(armor);

        // Top Diffused RGB Bar
        const rgbBar = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 0.82),
            new THREE.MeshBasicMaterial({ color: ramColor }));
        rgbBar.position.y = 1.35;
        ramStick.add(rgbBar);

        // Position inside Motherboard RAM Slots
        ramStick.position.set(1.7 + (i * 1.0), 2.8, -4.7);
        ramGroup.add(ramStick);
    }
}

function createDetailedCoolerMesh() {
    if (coolerGroup) pcCaseGroup.remove(coolerGroup);
    coolerGroup = new THREE.Group();
    pcCaseGroup.add(coolerGroup);

    // --- AIO PUMP HEAD (Mounted directly on CPU) ---
    const pumpMat = new THREE.MeshPhysicalMaterial({ color: 0x090d16, metalness: 0.9, roughness: 0.25, clearcoat: 0.3 });
    const pump = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.65, 64), pumpMat);
    pump.rotation.x = Math.PI / 2;
    pump.position.set(-0.8, 2.8, -4.4);
    coolerGroup.add(pump);

    // Infinity Mirror / OLED Display Face
    const displayFace = new THREE.Mesh(new THREE.CircleGeometry(0.82, 64),
        new THREE.MeshPhysicalMaterial({
            color: 0x000000, emissive: 0x00f0ff, emissiveIntensity: 0.9,
            metalness: 1.0, roughness: 0.0, clearcoat: 1.0
        }));
    displayFace.position.set(-0.8, 2.8, -4.06);
    coolerGroup.add(displayFace);

    // Outer RGB Glow Ring
    const pumpRing = new THREE.Mesh(new THREE.TorusGeometry(0.98, 0.04, 16, 32),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff }));
    pumpRing.position.set(-0.8, 2.8, -4.05);
    coolerGroup.add(pumpRing);

    // --- AIO LIQUID TUBES (Curving smoothly from pump UP to top radiator) ---
    const tubeMat = new THREE.MeshPhysicalMaterial({ color: 0x0a0d14, roughness: 0.5, clearcoat: 0.2 });

    // Tube 1: Pump right port -> curves up to top radiator
    const t1Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-0.2, 2.8, -4.1),
        new THREE.Vector3(0.5, 3.6, -3.2),
        new THREE.Vector3(0.8, 4.8, -2.4),
        new THREE.Vector3(0.5, 5.8, -1.8)
    ]);
    coolerGroup.add(new THREE.Mesh(new THREE.TubeGeometry(t1Curve, 24, 0.11, 12, false), tubeMat));

    // Tube 2: Pump left port -> curves up to top radiator
    const t2Curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.4, 2.8, -4.1),
        new THREE.Vector3(-2.0, 3.6, -3.2),
        new THREE.Vector3(-2.0, 4.8, -2.4),
        new THREE.Vector3(-1.5, 5.8, -1.8)
    ]);
    coolerGroup.add(new THREE.Mesh(new THREE.TubeGeometry(t2Curve, 24, 0.11, 12, false), tubeMat));

    // --- TOP-MOUNTED RADIATOR & FANS ---
    const radMat = new THREE.MeshPhysicalMaterial({ color: 0x0c101a, metalness: 0.9, roughness: 0.3 });
    const radiator = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.7, 2.4), radMat);
    radiator.position.set(0, 5.85, -1.8);
    coolerGroup.add(radiator);

    // 2 Top Radiator RGB Fans
    for (let f = 0; f < 2; f++) {
        const radFanRing = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.05, 16, 32),
            new THREE.MeshBasicMaterial({ color: 0x00f0ff }));
        radFanRing.rotation.x = Math.PI / 2;
        radFanRing.position.set(-1.6 + (f * 3.2), 5.85, -0.5);
        coolerGroup.add(radFanRing);
    }
}



function update3DHardwareMeshes() {
    createDetailedGPUMesh();
    createDetailedRAMMesh();
    createDetailedCoolerMesh();
}

function setRGBMode(mode) {
    if (mode === 'cyberpunk') {
        casePointLight1.color.setHex(0x00f0ff);
        casePointLight2.color.setHex(0xff0055);
    } else if (mode === 'rainbow') {
        casePointLight1.color.setHex(0xffcc00);
        casePointLight2.color.setHex(0x8b5cf6);
    } else if (mode === 'emerald') {
        casePointLight1.color.setHex(0x10b981);
        casePointLight2.color.setHex(0x00f0ff);
    } else if (mode === 'dark') {
        casePointLight1.color.setHex(0x222222);
        casePointLight2.color.setHex(0x111111);
    }
}

function animateStudio() {
    requestAnimationFrame(animateStudio);

    // Slowly Rotate PC Stage
    if (pcCaseGroup) {
        pcCaseGroup.rotation.y += 0.0035;
    }

    // Spin Fan Blades
    fanBlades.forEach(blade => {
        blade.rotation.x += 0.08;
    });

    if (controls) {
        controls.update();
    }

    renderer.render(scene, camera);
}

function onWindowResize() {
    const canvas = document.getElementById('canvas-3d');
    if (!canvas) return;
    const container = canvas.parentElement;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
}
