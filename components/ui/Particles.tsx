"use client";

import { useEffect, useRef, ReactNode } from "react";
import * as THREE from "three";

interface ParticlesProps {
  children?: ReactNode;
}

const Particles: React.FC<ParticlesProps> = ({ children }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const rows = 40;
    const cols = 60;
    const spacing = 0.4;
    const particleCount = rows * cols;

    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);

    let index = 0;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = (col - cols / 2) * spacing;
        const y = (row - rows / 2) * spacing;
        const z = 0;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        originalPositions[index * 3] = x;
        originalPositions[index * 3 + 1] = y;
        originalPositions[index * 3 + 2] = z;

        velocities[index] = Math.random() * 0.02 + 0.005;
        index++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      map: new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/sprites/spark1.png"
      ),
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let mouseX = 0,
      mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;

      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    document.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      const positionsArray = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const origX = originalPositions[i * 3];
        const origY = originalPositions[i * 3 + 1];

        let dx = positionsArray[i * 3] - mouseX * 10;
        let dy = positionsArray[i * 3 + 1] - mouseY * 10;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 1) {
          // Move away from the cursor
          positionsArray[i * 3] += dx * 0.05;
          positionsArray[i * 3 + 1] += dy * 0.05;
        } else {
      
          positionsArray[i * 3] += (origX - positionsArray[i * 3]) * 0.05;
          positionsArray[i * 3 + 1] += (origY - positionsArray[i * 3 + 1]) * 0.05;
        }

        positionsArray[i * 3 + 1] += Math.sin(Date.now() * 0.002 + origX) * velocities[i] * 0.3;
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
        <div className="relative w-[100%] min-h-screen">
        <div ref={mountRef} className="absolute top-0 left-0 w-[100%] min-h-screen" />
        {children && <div className="absolute w-[100%] min-h-screen top-0 left-0 ">{children}</div>}
        </div>
  );
};

export default Particles;
