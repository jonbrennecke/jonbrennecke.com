import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface SceneConfig {
  hemisphereLightIntensity?: number;
}

export function setUpScene(
  model: THREE.Group,
  canvas: HTMLCanvasElement,
  { hemisphereLightIntensity = 0.5 }: SceneConfig = {}
) {
  const scene = new THREE.Scene();
  scene.add(model);

  const hemisphereLight = new THREE.HemisphereLight(
    0xffeeb1,
    0x080820,
    hemisphereLightIntensity
  );
  scene.add(hemisphereLight);

  const directionalLight = new THREE.DirectionalLight(0x56b1ff, 0.5);
  directionalLight.position.set(10, 2, 3);
  directionalLight.shadow.bias = -0.0001;
  directionalLight.shadow.mapSize.width = 1024 * 4;
  directionalLight.shadow.mapSize.height = 1024 * 4;
  scene.add(directionalLight);

  const directionalLight2 = new THREE.DirectionalLight(0x56b1ff, 0.5);
  directionalLight2.position.set(-5, -2, -10);
  directionalLight2.shadow.bias = -0.0001;
  directionalLight2.shadow.mapSize.width = 1024 * 4;
  directionalLight2.shadow.mapSize.height = 1024 * 4;
  scene.add(directionalLight2);

  const spotLight = new THREE.SpotLight(0x56b1ff);
  spotLight.position.set(-1, 5, 1);
  spotLight.castShadow = true;
  spotLight.shadow.focus = 0.5;
  spotLight.angle = Math.PI / 4;
  spotLight.penumbra = 0.8;
  spotLight.decay = 1;
  spotLight.distance = 100;
  spotLight.shadow.bias = -0.0001;
  spotLight.shadow.mapSize.width = 1024 * 4;
  spotLight.shadow.mapSize.height = 1024 * 4;
  scene.add(spotLight);

  const aspectRatio = canvas.clientWidth / canvas.clientHeight;
  const camera = new THREE.PerspectiveCamera(55, aspectRatio, 1, 100);
  camera.position.set(0, 0, 7);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    canvas,
  });
  renderer.setClearColor(0xffffff, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setAnimationLoop(animate);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.LinearToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.shadowMap.enabled = true;

  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDamping = true;
  orbitControls.dampingFactor = 0.05;
  orbitControls.enableZoom = false;

  function animate() {
    orbitControls.update();
    renderer.render(scene, camera);
  }

  animate();
}

export async function loadGLTFScene(url: string) {
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(url);
  return gltf.scene;
}
