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

// Load realistic textures for procedural fallbacks
const textureLoader = new THREE.TextureLoader();
const moboTexture = textureLoader.load('assets/textures/mobo.jpg');
const gpuTexture = textureLoader.load('assets/textures/gpu.jpg');
const ramTexture = textureLoader.load('assets/textures/ram.jpg');

moboTexture.colorSpace = THREE.SRGBColorSpace;
gpuTexture.colorSpace = THREE.SRGBColorSpace;
ramTexture.colorSpace = THREE.SRGBColorSpace;
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
    // --- CASE MATERIALS with real PBR textures ---
    const metalColorTex = textureLoader.load('assets/textures/Metal035/3DApple001_HQ-1K-JPG_Color.jpg');
    const metalNormalTex = textureLoader.load('assets/textures/Metal035/3DApple001_HQ-1K-JPG_NormalGL.jpg');
    const metalAOTex = textureLoader.load('assets/textures/Metal035/3DApple001_HQ-1K-JPG_AmbientOcclusion.jpg');
    metalColorTex.colorSpace = THREE.SRGBColorSpace;

    const aluminumMat = new THREE.MeshPhysicalMaterial({
        map: metalColorTex, normalMap: metalNormalTex, aoMap: metalAOTex,
        color: 0x1a1a2e, metalness: 1.0, roughness: 0.2, clearcoat: 0.15
    });
    const darkSteelMat = new THREE.MeshPhysicalMaterial({
        map: metalColorTex, normalMap: metalNormalTex,
        color: 0x0a0a1a, metalness: 0.95, roughness: 0.3
    });
    const pcbMat = new THREE.MeshPhysicalMaterial({ map: moboTexture, color: 0xcccccc, metalness: 0.3, roughness: 0.7, clearcoat: 0.1 });
    const silverHeatsinkMat = new THREE.MeshPhysicalMaterial({ color: 0xd0d0d0, metalness: 1.0, roughness: 0.25, clearcoat: 0.3 });

    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff, transparent: true, opacity: 0.12,
        roughness: 0.0, metalness: 0.1, transmission: 0.95,
        ior: 1.5, thickness: 0.15, clearcoat: 1.0, clearcoatRoughness: 0.0
    });

    // --- CASE FRAME (4 Corner Pillars) ---
    const pillarGeo = new THREE.BoxGeometry(0.5, 13, 0.5);
    const p1 = new THREE.Mesh(pillarGeo, aluminumMat); p1.position.set(-4.5, 0, -5.5); pcCaseGroup.add(p1);
    const p2 = new THREE.Mesh(pillarGeo, aluminumMat); p2.position.set(4.5, 0, -5.5); pcCaseGroup.add(p2);
    const p3 = new THREE.Mesh(pillarGeo, aluminumMat); p3.position.set(-4.5, 0, 5.5); pcCaseGroup.add(p3);
    const p4 = new THREE.Mesh(pillarGeo, aluminumMat); p4.position.set(4.5, 0, 5.5); pcCaseGroup.add(p4);

    // Top & Bottom Plates
    const platGeo = new THREE.BoxGeometry(9.5, 0.4, 11.5);
    const topPlate = new THREE.Mesh(platGeo, aluminumMat);
    topPlate.position.set(0, 6.5, 0); pcCaseGroup.add(topPlate);
    const botPlate = new THREE.Mesh(platGeo, aluminumMat);
    botPlate.position.set(0, -6.5, 0); pcCaseGroup.add(botPlate);

    // --- SOLID SIDE PANELS (hide internals from outside) ---
    // Back panel (behind motherboard)
    const backPanelGeo = new THREE.BoxGeometry(9.2, 12.5, 0.15);
    const backPanel = new THREE.Mesh(backPanelGeo, darkSteelMat);
    backPanel.position.set(0, 0, -5.6); pcCaseGroup.add(backPanel);

    // Right side panel (opposite glass)
    const rightPanelGeo = new THREE.BoxGeometry(0.15, 12.5, 11);
    const rightPanel = new THREE.Mesh(rightPanelGeo, darkSteelMat);
    rightPanel.position.set(4.6, 0, 0); pcCaseGroup.add(rightPanel);

    // Front panel (solid + mesh overlay)
    const frontPanel = new THREE.Mesh(new THREE.BoxGeometry(0.15, 12.5, 11), darkSteelMat);
    frontPanel.position.set(-4.6, 0, 0); pcCaseGroup.add(frontPanel);
    const frontMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 12, 10.5),
        new THREE.MeshStandardMaterial({ color: 0x0a0f1d, metalness: 0.9, wireframe: true })
    );
    frontMesh.position.set(-4.45, 0, 0); pcCaseGroup.add(frontMesh);

    // Left side: Tempered Glass (viewer-facing)
    const glassSide = new THREE.Mesh(new THREE.BoxGeometry(9.2, 12.5, 0.1), glassMat);
    glassSide.position.set(0, 0, 5.55); pcCaseGroup.add(glassSide);

    // --- MOTHERBOARD ---
    const mobo = new THREE.Mesh(new THREE.BoxGeometry(8, 10, 0.3), pcbMat);
    mobo.position.set(0, 0.8, -5.0); pcCaseGroup.add(mobo);

    // CPU Socket (golden pins + silver IHS)
    const cpuMat = new THREE.MeshPhysicalMaterial({ map: moboTexture, color: 0xd4af37, metalness: 0.9, roughness: 0.15, clearcoat: 0.5 });
    const cpu = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 0.15), cpuMat);
    cpu.position.set(-0.8, 2.8, -4.7); pcCaseGroup.add(cpu);
    const ihs = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 0.08),
        new THREE.MeshPhysicalMaterial({ color: 0xc0c0c0, metalness: 1.0, roughness: 0.1, clearcoat: 0.8 }));
    ihs.position.set(-0.8, 2.8, -4.55); pcCaseGroup.add(ihs);

    // VRM Heatsinks
    const hs1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.5, 0.6), silverHeatsinkMat);
    hs1.position.set(-2.8, 2.5, -4.55); pcCaseGroup.add(hs1);
    const hs2 = new THREE.Mesh(new THREE.BoxGeometry(3, 1.2, 0.6), silverHeatsinkMat);
    hs2.position.set(0, 4.8, -4.55); pcCaseGroup.add(hs2);

    // M.2 SSD Heatsink
    const m2 = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.5, 0.35), silverHeatsinkMat);
    m2.position.set(0, -0.5, -4.6); pcCaseGroup.add(m2);

    // PCIe Slot Rails
    const pcieGeo = new THREE.BoxGeometry(6, 0.25, 0.4);
    const pcie1 = new THREE.Mesh(pcieGeo, silverHeatsinkMat);
    pcie1.position.set(0, -1.5, -4.6); pcCaseGroup.add(pcie1);
    const pcie2 = new THREE.Mesh(pcieGeo, silverHeatsinkMat);
    pcie2.position.set(0, -2.3, -4.6); pcCaseGroup.add(pcie2);

    // --- PSU Shroud (Bottom Compartment) ---
    const psuBox = new THREE.Mesh(new THREE.BoxGeometry(8.8, 3.0, 10.5), darkSteelMat);
    psuBox.position.set(0, -5.0, 0); pcCaseGroup.add(psuBox);
    const psuTop = new THREE.Mesh(new THREE.BoxGeometry(8.9, 0.15, 10.6), aluminumMat);
    psuTop.position.set(0, -3.4, 0); pcCaseGroup.add(psuTop);
}

function createPhotorealisticFans() {
    const ringGeo = new THREE.TorusGeometry(1.4, 0.15, 16, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.y = Math.PI / 2;
        ring.position.set(-4.3, 4 - (i * 3.8), 0);
        pcCaseGroup.add(ring);

        const bladeGroup = new THREE.Group();
        const bladeGeo = new THREE.BoxGeometry(0.05, 1.2, 0.3);
        const bladeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 });

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
    gpuGroup.position.set(0, -1.8, -1.5);
    pcCaseGroup.add(gpuGroup);

    const gpuColor = activeBuild.gpu.color || 0x00f0ff;
    const darkMat = new THREE.MeshPhysicalMaterial({ color: 0x0a0a12, metalness: 0.85, roughness: 0.25, clearcoat: 0.2 });
    const silverMat = new THREE.MeshPhysicalMaterial({ color: 0xe5e7eb, metalness: 1.0, roughness: 0.15 });

    // Main GPU shroud body
    const body = new THREE.Mesh(new THREE.BoxGeometry(7.5, 2.0, 3.2), darkMat);
    gpuGroup.add(body);

    // Metal backplate
    const bp = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.1, 3.3), silverMat);
    bp.position.set(0, -1.05, 0);
    gpuGroup.add(bp);

    // RGB Edge strips
    gpuGroup.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.08, 0.08),
        new THREE.MeshBasicMaterial({ color: gpuColor })), { position: new THREE.Vector3(0, 1.05, 1.6) }));
    gpuGroup.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.06, 0.06),
        new THREE.MeshBasicMaterial({ color: gpuColor })), { position: new THREE.Vector3(0, -1.1, 1.6) }));

    // 3 Cooling Fans
    for (let f = 0; f < 3; f++) {
        const x = -2.3 + (f * 2.3);
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.07, 16, 32),
            new THREE.MeshPhysicalMaterial({ color: 0x151515, metalness: 0.8, roughness: 0.4 }));
        ring.rotation.x = Math.PI / 2; ring.position.set(x, 0, 1.65); gpuGroup.add(ring);

        const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.06, 16),
            silverMat); hub.rotation.x = Math.PI / 2; hub.position.set(x, 0, 1.68); gpuGroup.add(hub);

        for (let b = 0; b < 7; b++) {
            const blade = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.6, 0.02),
                new THREE.MeshStandardMaterial({ color: 0x333, transparent: true, opacity: 0.8 }));
            blade.rotation.z = (b * Math.PI * 2 / 7); blade.position.set(x, 0, 1.67); gpuGroup.add(blade);
        }
    }

    // Heatsink fins
    const finMat = new THREE.MeshPhysicalMaterial({ color: 0x2a2a35, metalness: 0.7, roughness: 0.4 });
    for (let i = 0; i < 10; i++) {
        const fin = new THREE.Mesh(new THREE.BoxGeometry(7.0, 0.03, 2.8), finMat);
        fin.position.set(0, -0.7 + (i * 0.15), -0.1); gpuGroup.add(fin);
    }
}

function createDetailedRAMMesh() {
    if (ramGroup) pcCaseGroup.remove(ramGroup);
    ramGroup = new THREE.Group();
    pcCaseGroup.add(ramGroup);

    const ramColor = activeBuild.ram.color || 0x00f0ff;
    const stickMat = new THREE.MeshPhysicalMaterial({ map: ramTexture, color: 0xaaaaaa, metalness: 0.5, roughness: 0.4 });

    for (let i = 0; i < 2; i++) {
        const ramStick = new THREE.Group();
        ramStick.add(new THREE.Mesh(new THREE.BoxGeometry(0.2, 2.8, 0.8), stickMat));
        const bar = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.35, 0.85),
            new THREE.MeshBasicMaterial({ color: ramColor }));
        bar.position.y = 1.3; ramStick.add(bar);
        ramStick.position.set(1.8 + (i * 0.6), 2.8, -4.55);
        ramGroup.add(ramStick);
    }
}

function createDetailedCoolerMesh() {
    if (coolerGroup) pcCaseGroup.remove(coolerGroup);
    coolerGroup = new THREE.Group();
    pcCaseGroup.add(coolerGroup);

    // AIO Pump Head on CPU
    const pump = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.6, 64),
        new THREE.MeshPhysicalMaterial({ color: 0x020617, metalness: 0.85, roughness: 0.35, clearcoat: 0.2 }));
    pump.rotation.x = Math.PI / 2;
    pump.position.set(-0.8, 2.8, -4.2);
    coolerGroup.add(pump);

    // LCD face
    const mirror = new THREE.Mesh(new THREE.CircleGeometry(0.8, 64),
        new THREE.MeshPhysicalMaterial({ color: 0x000000, emissive: 0x00f0ff, emissiveIntensity: 0.8,
            metalness: 1.0, roughness: 0.0, clearcoat: 1.0 }));
    mirror.position.set(0, 0.32, 0); mirror.rotation.x = -Math.PI / 2;
    pump.add(mirror);

    // Pump glow ring
    coolerGroup.add(Object.assign(new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.04, 16, 32),
        new THREE.MeshBasicMaterial({ color: 0x00f0ff })),
        { position: new THREE.Vector3(-0.8, 2.8, -3.88), rotation: new THREE.Euler(Math.PI/2, 0, 0) }));

    // AIO TUBES: from pump UP to top radiator
    const tubeMat = new THREE.MeshPhysicalMaterial({ color: 0x0a0a0a, roughness: 0.6, clearcoat: 0.2 });

    // Tube 1: pump right -> up -> radiator
    const t1 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2.8, -4.0),
        new THREE.Vector3(0.4, 3.8, -3.2),
        new THREE.Vector3(0.6, 5.0, -2.5),
        new THREE.Vector3(0.5, 5.8, -2.0)
    ]);
    coolerGroup.add(new THREE.Mesh(new THREE.TubeGeometry(t1, 24, 0.1, 8, false), tubeMat));

    // Tube 2: pump left -> up -> radiator
    const t2 = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.6, 2.8, -4.0),
        new THREE.Vector3(-2.0, 3.8, -3.2),
        new THREE.Vector3(-2.0, 5.0, -2.5),
        new THREE.Vector3(-1.5, 5.8, -2.0)
    ]);
    coolerGroup.add(new THREE.Mesh(new THREE.TubeGeometry(t2, 24, 0.1, 8, false), tubeMat));

    // TOP-MOUNTED RADIATOR
    const rad = new THREE.Mesh(new THREE.BoxGeometry(7, 0.7, 2.2),
        new THREE.MeshPhysicalMaterial({ color: 0x111118, metalness: 0.9, roughness: 0.35 }));
    rad.position.set(0, 5.9, -2.0);
    coolerGroup.add(rad);

    // 2 Radiator fans
    for (let f = 0; f < 2; f++) {
        coolerGroup.add(Object.assign(new THREE.Mesh(
            new THREE.TorusGeometry(0.9, 0.05, 16, 32),
            new THREE.MeshBasicMaterial({ color: 0x00f0ff })),
            { position: new THREE.Vector3(-1.5 + (f * 3), 5.9, -0.7),
              rotation: new THREE.Euler(Math.PI/2, 0, 0) }));
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
