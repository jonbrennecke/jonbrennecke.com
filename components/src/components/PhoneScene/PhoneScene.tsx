import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const WALLPAPER_OBJECT_NAME = 'Body_Wallpaper_0';
const IPHONE_INITIAL_ROTATION_Y = Math.PI * 0.9;

const Canvas = styled.canvas`
  height: 800px;
  width: 500px;
`;

async function setUpiPhoneScene(
  canvas: HTMLCanvasElement,
  imageSource: string
): Promise<THREE.Group> {
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffeeb1, 0x080820, 2));

  const directionalLight = new THREE.DirectionalLight(0x56b1ff, 0.5);
  directionalLight.position.set(10, 2, 3);
  scene.add(directionalLight);

  const directionalLight2 = new THREE.DirectionalLight(0x56b1ff, 0.5);
  directionalLight2.position.set(-5, -2, -10);
  scene.add(directionalLight2);

  const spotLight = new THREE.SpotLight(0x56b1ff);
  spotLight.position.set(-1, 5, 1);
  spotLight.castShadow = true;
  spotLight.shadow.focus = 0.5;
  spotLight.angle = Math.PI / 4;
  spotLight.penumbra = 0.8;
  spotLight.decay = 1;
  spotLight.distance = 100;
  scene.add(spotLight);

  const iPhoneModel = await loadiPhoneModel(imageSource);
  scene.add(iPhoneModel);

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
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
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

  return iPhoneModel;
}

async function loadiPhoneModel(imageSource: string): Promise<THREE.Group> {
  const loader = new GLTFLoader();
  loader.setPath('/models/apple_iphone_13_pro_max/');
  const gltf = await loader.loadAsync('scene.gltf');
  const model = gltf.scene;

  model.traverse(async (object) => {
    if (object.name == 'Body001_Screen_Glass_0') {
      object.removeFromParent();
    }

    if (object.name === WALLPAPER_OBJECT_NAME && object instanceof THREE.Mesh) {
      const mesh = object as THREE.Mesh;

      const textureLoader = new THREE.TextureLoader();
      const texture = await textureLoader.loadAsync(imageSource);
      texture.encoding = THREE.sRGBEncoding;

      // @ts-ignore
      const material: THREE.MeshStandardMaterial | null = mesh.material;
      if (material && material instanceof THREE.Material) {
        material.map = texture;
        material.emissiveMap = texture;
        material.emissiveIntensity = 2;
        material.flatShading = true;
        material.blending = THREE.NoBlending;
        material.emissive = new THREE.Color(0x999999);
        material.needsUpdate = true;
      }
    }
  });

  model.position.set(0, 0, 0);
  model.scale.set(5, 5, 5);
  model.rotation.y = IPHONE_INITIAL_ROTATION_Y;
  model.rotation.x = -Math.PI * 0.05;
  model.rotation.z = Math.PI * 0.05;

  return model;
}

export interface PhoneSceneProps {
  imageSource: string;
  className?: string;
  rotationY?: number;
}

export function PhoneScene({
  rotationY = 0,
  imageSource,
  className,
}: PhoneSceneProps) {
  const [iPhoneModel, setiPhoneModel] = useState<THREE.Group | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    async function asyncEffect() {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }

      setiPhoneModel(await setUpiPhoneScene(canvas, imageSource));
    }

    asyncEffect();
  }, [canvasRef]);

  useEffect(() => {
    if (!iPhoneModel) {
      return;
    }

    iPhoneModel.rotation.y = IPHONE_INITIAL_ROTATION_Y + rotationY;
  }, [rotationY]);

  return <Canvas className={className} ref={canvasRef} />;
}
