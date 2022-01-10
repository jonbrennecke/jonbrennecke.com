import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";

const CanvasContainer = styled.div`
  height: 300px;
  width: 700px;
  background-color: red;
`;

export function PhoneScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scene = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // TODO: clear

    // TODO
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return scene;
  }, []);

  const camera = useMemo(() => {
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight, // TODO: container size
      1,
      100
    );
    camera.position.set(1, 1, 5);
    return camera;
  }, []);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;

    function animation() {
      renderer.render(scene, camera);
    }

    const container = containerRef.current;
    console.log({ container });
    if (container) {
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
    }

    renderer.setAnimationLoop(animation);
    animation();
  }, [containerRef]);

  return <CanvasContainer ref={containerRef} />;
}
