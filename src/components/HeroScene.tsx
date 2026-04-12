"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Shapes() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x +=
      (mouse.current.y * 0.08 - groupRef.current.rotation.x) * delta * 0.4;
    groupRef.current.rotation.y +=
      (mouse.current.x * 0.12 - groupRef.current.rotation.y) * delta * 0.4;
  });

  const s = Math.min(viewport.width, viewport.height) * 0.15;

  return (
    <group ref={groupRef}>
      {/* Main icosahedron — large, luminous */}
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh position={[0, 0, -1]} scale={s * 2}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#3B82F6"
            roughness={0.3}
            metalness={0.9}
            distort={0.15}
            speed={1}
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>

      {/* Glow sphere behind main shape */}
      <mesh position={[0, 0, -2]} scale={s * 3}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#3B82F6" transparent opacity={0.03} />
      </mesh>

      {/* Accent octahedron — right side */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[s * 4, s * 1.5, -s * 0.5]} scale={s * 0.8}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#0FF0A0"
            roughness={0.2}
            metalness={0.9}
            transparent
            opacity={0.15}
            wireframe
          />
        </mesh>
      </Float>

      {/* Green glow sphere */}
      <mesh position={[s * 4, s * 1.5, -s * 1]} scale={s * 1.5}>
        <sphereGeometry args={[1, 12, 12]} />
        <meshBasicMaterial color="#0FF0A0" transparent opacity={0.02} />
      </mesh>

      {/* Torus — left side */}
      <Float speed={1} rotationIntensity={0.6} floatIntensity={0.5}>
        <mesh position={[-s * 4, -s * 1.2, -s * 0.5]} scale={s * 0.6}>
          <torusGeometry args={[1, 0.35, 8, 20]} />
          <meshStandardMaterial
            color="#3B82F6"
            roughness={0.4}
            metalness={0.8}
            transparent
            opacity={0.12}
            wireframe
          />
        </mesh>
      </Float>

      {/* Floating particles */}
      {Array.from({ length: 50 }).map((_, i) => {
        const theta = (i / 50) * Math.PI * 2;
        const r = s * (3 + Math.sin(i * 0.7) * 2);
        const y = (Math.cos(i * 1.3) - 0.5) * s * 3;
        return (
          <Float key={i} speed={0.6 + Math.random() * 0.4} floatIntensity={0.2}>
            <mesh position={[Math.cos(theta) * r, y, Math.sin(theta) * r - s * 1.5]}>
              <sphereGeometry args={[s * 0.04, 6, 6]} />
              <meshBasicMaterial
                color={i % 4 === 0 ? "#0FF0A0" : "#3B82F6"}
                transparent
                opacity={0.12 + Math.random() * 0.18}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#3B82F6" />
        <directionalLight position={[-3, -3, 3]} intensity={0.3} color="#0FF0A0" />
        <pointLight position={[0, 0, 3]} intensity={0.3} color="#3B82F6" />
        <Shapes />
      </Canvas>
    </div>
  );
}
