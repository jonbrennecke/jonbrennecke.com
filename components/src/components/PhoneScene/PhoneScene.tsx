import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const WALLPAPER_OBJECT_NAME = "Body_Wallpaper_0";

const Canvas = styled.canvas`
  height: 500px;
  width: 700px;
`;

export interface PhoneSceneProps {
  imageSource: string;
}

async function setUpScene(canvas: HTMLCanvasElement, imageSource: string) {
  const scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5));

  const pointLight = new THREE.PointLight(0x56b1ff, 1, 5);
  pointLight.position.set(3, 3, 3);
  scene.add(pointLight);

  const directionalLight = new THREE.DirectionalLight(0x56b1ff, 2);
  directionalLight.position.set(1, 1, 0.5).normalize();
  scene.add(directionalLight);

  const iPhoneModel = await loadiPhoneModel(imageSource);
  scene.add(iPhoneModel);

  function animate() {
    if (iPhoneModel) {
      iPhoneModel.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
  }

  const aspectRatio = canvas.clientWidth / canvas.clientHeight;
  const camera = new THREE.PerspectiveCamera(55, aspectRatio, 1, 100);
  camera.position.set(0, 0, 8);

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

  animate();
}

async function loadiPhoneModel(imageSource: string): Promise<THREE.Group> {
  const loader = new GLTFLoader();
  loader.setPath("/models/apple_iphone_13_pro_max/");
  const gltf = await loader.loadAsync("scene.gltf");
  const model = gltf.scene;

  model.traverse(async (object) => {
    if (object.name == "Body001_Screen_Glass_0") {
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
  model.rotation.y = Math.PI * 0.95;
  // model.rotation.x = -Math.PI * 0.05;
  // model.rotation.z = Math.PI * 0.05;

  return model;
}

export function PhoneScene({ imageSource }: PhoneSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    setUpScene(canvas, imageSource);
  }, [canvasRef]);

  return <Canvas ref={canvasRef} />;
}
