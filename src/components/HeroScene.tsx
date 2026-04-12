"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Shapes() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const onPointerMove = useMemo(() => {
    return (e: { clientX: number; clientY: number }) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
  }, []);

  useMemo(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", onPointerMove);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", onPointerMove);
      }
    };
  }, [onPointerMove]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x +=
      (mouse.current.y * 0.1 - groupRef.current.rotation.x) * delta * 0.5;
    groupRef.current.rotation.y +=
      (mouse.current.x * 0.15 - groupRef.current.rotation.y) * delta * 0.5;
  });

  const scale = Math.min(viewport.width, viewport.height) * 0.12;

  return (
    <group ref={groupRef}>
      {/* Main sphere */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]} scale={scale * 1.2}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#3B82F6"
            roughness={0.4}
            metalness={0.8}
            distort={0.2}
            speed={1.5}
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>

      {/* Accent octahedron */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[scale * 3, scale * 1.5, -scale]} scale={scale * 0.5}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#0FF0A0"
            roughness={0.3}
            metalness={0.9}
            transparent
            opacity={0.12}
            wireframe
          />
        </mesh>
      </Float>

      {/* Small torus */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6}>
        <mesh position={[-scale * 3.5, -scale * 1, -scale * 0.5]} scale={scale * 0.4}>
          <torusGeometry args={[1, 0.4, 8, 16]} />
          <meshStandardMaterial
            color="#3B82F6"
            roughness={0.5}
            metalness={0.7}
            transparent
            opacity={0.1}
            wireframe
          />
        </mesh>
      </Float>

      {/* Floating dots */}
      {Array.from({ length: 40 }).map((_, i) => {
        const theta = (i / 40) * Math.PI * 2;
        const r = scale * (2.5 + Math.sin(i * 0.7) * 1.5);
        const y = (Math.cos(i * 1.3) - 0.5) * scale * 2;
        return (
          <Float key={i} speed={1 + Math.random()} floatIntensity={0.3}>
            <mesh position={[Math.cos(theta) * r, y, Math.sin(theta) * r - scale]}>
              <sphereGeometry args={[scale * 0.03, 6, 6]} />
              <meshBasicMaterial
                color={i % 3 === 0 ? "#0FF0A0" : "#3B82F6"}
                transparent
                opacity={0.15 + Math.random() * 0.15}
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
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#3B82F6" />
        <directionalLight position={[-3, -3, 2]} intensity={0.2} color="#0FF0A0" />
        <Shapes />
      </Canvas>
    </div>
  );
}
