/* ==========================================================================
   CYBERFORGE 3D PC BUILDER & HARDWARE STORE WEBGL ENGINE
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
        { id: "rtx-4090", name: "NVIDIA GeForce RTX 4090 OC 24GB", specs: "24GB GDDR6X • DLSS 3.5", tdp: 450, price: 5800, color: 0x00f0ff },
        { id: "rtx-4080s", name: "NVIDIA GeForce RTX 4080 Super 16GB", specs: "16GB GDDR6X • Ray Tracing", tdp: 320, price: 3400, color: 0xff0055 },
        { id: "rx-7900xtx", name: "AMD Radeon RX 7900 XTX 24GB", specs: "24GB GDDR6 • RDNA 3", tdp: 355, price: 3100, color: 0x8b5cf6 },
        { id: "rtx-4070ti", name: "NVIDIA GeForce RTX 4070 Ti Super", specs: "16GB GDDR6X • 2K/4K Beast", tdp: 285, price: 2450, color: 0x10b981 }
    ],
    ram: [
        { id: "ram-64gb", name: "Corsair Dominator Titanium 64GB", specs: "2x32GB DDR5 7200MHz RGB", tdp: 15, price: 950 },
        { id: "ram-32gb", name: "G.Skill Trident Z5 RGB 32GB", specs: "2x16GB DDR5 6400MHz CL32", tdp: 10, price: 480 },
        { id: "ram-128gb", name: "Kingston Fury Beast 128GB", specs: "4x32GB DDR5 6000MHz", tdp: 25, price: 1650 }
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

// Three.js Global Variables
let scene, camera, renderer, controls;
let pcCaseGroup, gpuMesh, ramGroup, coolerMesh, fanGroup = [];
let rgbPointLights = [];
let rgbColorMode = 'cyberpunk'; // cyberpunk, rainbow, emerald, dark

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize UI Controls & Part Selector
    initUIControls();

    // 2. Initialize 3D Three.js WebGL Engine if Canvas exists
    if (document.getElementById('canvas-3d')) {
        initThreeJS();
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

    let currentCategory = 'gpu';

    function renderPartOptions(category) {
        currentCategory = category;
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

    // Default view GPU
    renderPartOptions('gpu');
}

function selectPart(category, partId) {
    const part = HARDWARE_PARTS[category].find(p => p.id === partId);
    if (!part) return;

    activeBuild[category] = part;

    // Refresh UI selection list
    const tabBtn = document.querySelector(`.tab-btn[data-category="${category}"]`);
    if (tabBtn) tabBtn.click();

    // Update 3D WebGL meshes
    update3DMeshes();

    // Update Wattage & Price Calculations
    updateBuildSummary();
}

function updateBuildSummary() {
    const totalTDP = activeBuild.cpu.tdp + activeBuild.gpu.tdp + activeBuild.ram.tdp + activeBuild.cooler.tdp + 45; // 45W base fans/mobo
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
   2. THREE.JS WEBGL 3D STAGE & ENGINE
   ========================================================================== */
function initThreeJS() {
    const canvas = document.getElementById('canvas-3d');
    const container = canvas.parentElement;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e1a);

    // Camera setup
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(22, 14, 28);

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // OrbitControls
    if (typeof THREE.OrbitControls !== 'undefined') {
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxDistance = 60;
        controls.minDistance = 10;
        controls.maxPolarAngle = Math.PI / 2 + 0.1;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(20, 40, 20);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // RGB Neon Point Lights inside Case
    const cyanLight = new THREE.PointLight(0x00f0ff, 2.5, 25);
    cyanLight.position.set(0, 5, 0);
    scene.add(cyanLight);
    rgbPointLights.push(cyanLight);

    const pinkLight = new THREE.PointLight(0xff0055, 2.5, 25);
    pinkLight.position.set(0, -3, 0);
    scene.add(pinkLight);
    rgbPointLights.push(pinkLight);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(60, 30, 0x00f0ff, 0x1c2b45);
    gridHelper.position.y = -9;
    scene.add(gridHelper);

    // Build Initial 3D PC Case & Component Meshes
    build3DPCCase();

    // Resize Handler
    window.addEventListener('resize', onWindowResize);

    // Animation Loop
    animate();
}

function build3DPCCase() {
    pcCaseGroup = new THREE.Group();

    // 1. Case Outer Frame (Glass & Steel Chassis)
    const chassisGeo = new THREE.BoxGeometry(10, 16, 16);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x111625, metalness: 0.8, roughness: 0.2 });
    const chassisMesh = new THREE.Mesh(chassisGeo, frameMat);
    pcCaseGroup.add(chassisMesh);

    // Glass Side Panel (Transparent)
    const glassGeo = new THREE.BoxGeometry(0.2, 15, 15);
    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.25,
        roughness: 0.1,
        transmission: 0.9,
        thickness: 0.5
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.position.set(5.1, 0, 0);
    pcCaseGroup.add(glassMesh);

    // Motherboard PCB Plate
    const moboGeo = new THREE.BoxGeometry(0.4, 12, 12);
    const moboMat = new THREE.MeshStandardMaterial({ color: 0x1a233a, roughness: 0.5 });
    const moboMesh = new THREE.Mesh(moboGeo, moboMat);
    moboMesh.position.set(-4.2, 1, 0);
    pcCaseGroup.add(moboMesh);

    // Power Supply Unit (Bottom Box)
    const psuGeo = new THREE.BoxGeometry(8, 4, 14);
    const psuMat = new THREE.MeshStandardMaterial({ color: 0x080c16, metalness: 0.9 });
    const psuMesh = new THREE.Mesh(psuGeo, psuMat);
    psuMesh.position.set(0, -6, 0);
    pcCaseGroup.add(psuMesh);

    // 2. Add Dynamic Component Meshes
    createGPUMesh();
    createRAMMesh();
    createCoolerMesh();
    createRGBFans();

    scene.add(pcCaseGroup);
}

function createGPUMesh() {
    if (gpuMesh) pcCaseGroup.remove(gpuMesh);

    gpuMesh = new THREE.Group();
    // Massive Triple-Fan GPU Shroud
    const gpuGeo = new THREE.BoxGeometry(4.5, 2.8, 10.5);
    const gpuColor = activeBuild.gpu.color || 0x00f0ff;
    const gpuMat = new THREE.MeshStandardMaterial({ color: 0x141b2d, metalness: 0.7, roughness: 0.3 });
    const mainBody = new THREE.Mesh(gpuGeo, gpuMat);
    gpuMesh.add(mainBody);

    // Glowing RGB Strip on GPU
    const stripGeo = new THREE.BoxGeometry(4.6, 0.4, 10);
    const stripMat = new THREE.MeshBasicMaterial({ color: gpuColor });
    const strip = new THREE.Mesh(stripGeo, stripMat);
    strip.position.set(0, 1.2, 0);
    gpuMesh.add(strip);

    gpuMesh.position.set(-1.5, -1, 1);
    pcCaseGroup.add(gpuMesh);
}

function createRAMMesh() {
    if (ramGroup) pcCaseGroup.remove(ramGroup);

    ramGroup = new THREE.Group();
    const ramGeo = new THREE.BoxGeometry(0.3, 3, 0.8);
    const ramMat = new THREE.MeshStandardMaterial({ color: 0x222d46, metalness: 0.9 });
    
    const rgbTopGeo = new THREE.BoxGeometry(0.35, 0.4, 0.85);
    const rgbTopMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    for (let i = 0; i < 2; i++) {
        const stick = new THREE.Mesh(ramGeo, ramMat);
        const rgbBar = new THREE.Mesh(rgbTopGeo, rgbTopMat);
        rgbBar.position.y = 1.4;
        
        const singleRam = new THREE.Group();
        singleRam.add(stick);
        singleRam.add(rgbBar);

        singleRam.position.set(-3.5, 3.5, 1.2 + (i * 1.1));
        ramGroup.add(singleRam);
    }

    pcCaseGroup.add(ramGroup);
}

function createCoolerMesh() {
    if (coolerMesh) pcCaseGroup.remove(coolerMesh);

    coolerMesh = new THREE.Group();

    // CPU Pump Head
    const pumpGeo = new THREE.CylinderGeometry(1.4, 1.4, 1.2, 32);
    const pumpMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 });
    const pump = new THREE.Mesh(pumpGeo, pumpMat);
    pump.rotation.z = Math.PI / 2;

    // Glowing Pump Logo
    const logoGeo = new THREE.CircleGeometry(1.2, 32);
    const logoMat = new THREE.MeshBasicMaterial({ color: 0xff0055 });
    const logo = new THREE.Mesh(logoGeo, logoMat);
    logo.position.set(0.65, 0, 0);
    logo.rotation.y = Math.PI / 2;
    pump.add(logo);

    coolerMesh.add(pump);
    coolerMesh.position.set(-3.5, 3.5, -1);

    pcCaseGroup.add(coolerMesh);
}

function createRGBFans() {
    // 3 Front RGB Fans
    const fanGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.4, 24);
    const fanRingMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    for (let i = 0; i < 3; i++) {
        const fan = new THREE.Mesh(fanGeo, fanRingMat);
        fan.rotation.x = Math.PI / 2;
        fan.position.set(0, 4 - (i * 4.2), 7.8);
        pcCaseGroup.add(fan);
        fanGroup.push(fan);
    }
}

function update3DMeshes() {
    createGPUMesh();
    createRAMMesh();
    createCoolerMesh();
}

// RGB Lighting Switcher
function setRGBMode(mode) {
    rgbColorMode = mode;
    if (mode === 'cyberpunk') {
        rgbPointLights[0].color.setHex(0x00f0ff);
        rgbPointLights[1].color.setHex(0xff0055);
    } else if (mode === 'rainbow') {
        rgbPointLights[0].color.setHex(0xffcc00);
        rgbPointLights[1].color.setHex(0x8b5cf6);
    } else if (mode === 'emerald') {
        rgbPointLights[0].color.setHex(0x10b981);
        rgbPointLights[1].color.setHex(0x00f0ff);
    } else if (mode === 'dark') {
        rgbPointLights[0].color.setHex(0x222222);
        rgbPointLights[1].color.setHex(0x111111);
    }
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate pcCaseGroup slowly if idle
    if (pcCaseGroup) {
        pcCaseGroup.rotation.y += 0.003;
    }

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
