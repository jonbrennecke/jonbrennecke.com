import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { loadGLTFScene, setUpScene } from '../../utils';

async function loadModel(): Promise<THREE.Group> {
  const model = await loadGLTFScene(
    '/models/collage_creator_app_icon/icon.gltf'
  );

  model.traverse(async (object) => {
    if (object instanceof THREE.Mesh) {
      const mesh = object as THREE.Mesh;
      const materials = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
  });

  model.rotation.x = Math.PI * 0.5;
  model.position.set(0, 0, 0);

  return model;
}

const Canvas = styled.canvas`
  height: 800px;
  width: 500px;
`;

export interface CollageCreatorAppIconSceneProps {
  className?: string;
}

export function CollageCreatorAppIconScene({
  className,
}: CollageCreatorAppIconSceneProps) {
  const [model, setModel] = useState<THREE.Group | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    async function asyncEffect() {
      const canvas = canvasRef.current;
      if (!canvas) {
        return;
      }
      const model = await loadModel();
      setModel(model);
      setUpScene(model, canvas);
    }

    asyncEffect();
  }, [canvasRef]);

  return <Canvas className={className} ref={canvasRef} />;
}
