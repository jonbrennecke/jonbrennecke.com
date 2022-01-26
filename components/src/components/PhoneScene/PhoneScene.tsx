import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { loadGLTFScene, setUpScene } from '../../utils';

const WALLPAPER_OBJECT_NAME = 'Body_Wallpaper_0';
const IPHONE_INITIAL_ROTATION_Y = Math.PI * 0.9;

async function loadiPhoneModel(imageSource: string): Promise<THREE.Group> {
  const model = await loadGLTFScene(
    '/models/apple_iphone_13_pro_max/scene.gltf'
  );

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

const Canvas = styled.canvas`
  height: 800px;
  width: 500px;
`;

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

      const iPhoneModel = await loadiPhoneModel(imageSource);
      setUpScene(iPhoneModel, canvas, {
        hemisphereLightIntensity: 2,
      });
      setiPhoneModel(iPhoneModel);
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
