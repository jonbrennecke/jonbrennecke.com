import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { loadGLTFScene, setUpScene } from "../../utils";

async function loadModel(): Promise<THREE.Group> {
  const model = await loadGLTFScene(
    "/models/collage_creator_app_icon/icon.gltf"
  );

  model.traverse(async (object) => {
    if (object instanceof THREE.Mesh) {
      const mesh = object as THREE.Mesh;
      const materials = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      materials.forEach((material) => {
        // material.shad
      });
    }
    //   if (object.name == "Body001_Screen_Glass_0") {
    //     object.removeFromParent();
    //   }

    //   if (object.name === WALLPAPER_OBJECT_NAME && object instanceof THREE.Mesh) {
    //     const mesh = object as THREE.Mesh;

    //     const textureLoader = new THREE.TextureLoader();
    //     const texture = await textureLoader.loadAsync(imageSource);
    //     texture.encoding = THREE.sRGBEncoding;

    //     // @ts-ignore
    //     const material: THREE.MeshStandardMaterial | null = mesh.material;
    //     if (material && material instanceof THREE.Material) {
    //       material.map = texture;
    //       material.emissiveMap = texture;
    //       material.emissiveIntensity = 2;
    //       material.flatShading = true;
    //       material.blending = THREE.NoBlending;
    //       material.emissive = new THREE.Color(0x999999);
    //       material.needsUpdate = true;
    //     }
    //   }
  });

  // model.up = new THREE.Vector3(0, 0, 1);
  model.rotation.x = Math.PI * 0.5;
  model.position.set(0, 0, 0);
  // model.scale.set(5, 5, 5);
  // model.rotation.y = IPHONE_INITIAL_ROTATION_Y;
  // model.rotation.x = -Math.PI * 0.05;
  // model.rotation.z = Math.PI * 0.05;

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
