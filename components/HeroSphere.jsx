// components/HeroSphere.jsx
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiMaterialdesign,
  SiNodedotjs, SiExpress, SiPython, SiFlask,
  SiMysql, SiPostgresql, SiGit, SiGithub,
  SiDocker, SiPostman, SiHeroku, SiNetlify,
  SiVercel, SiSelenium, SiOpenai, SiHuggingface
} from 'react-icons/si';

const ICONS = [
  SiHtml5, SiCss3, SiJavascript, SiReact,
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiMaterialdesign,
  SiNodedotjs, SiExpress, SiPython, SiFlask,
  SiMysql, SiPostgresql, SiGit, SiGithub,
  SiDocker, SiPostman, SiHeroku, SiNetlify,
  SiVercel, SiSelenium, SiOpenai, SiHuggingface
];

function SphereWithIconRings() {
  const groupRef = useRef();
  const { size } = useThree();
  const [pointer, setPointer] = useState([0, 0]);

  // load the diffuse and bump maps
  const [colorMap, bumpMap] = useLoader(TextureLoader, [
    '/textures/2k_saturn_color.jpg',
    '/textures/2k_saturn_grayscale.jpg'
  ]);

  // track mouse position normalized to [-0.5, 0.5]
  useEffect(() => {
    const onMove = e => {
      setPointer([e.clientX / size.width - 0.5, e.clientY / size.height - 0.5]);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [size]);

  // auto-rotate + follow pointer
  useFrame((_, delta) => {
    const grp = groupRef.current;
    if (!grp) return;
    // smooth follow
    grp.rotation.y += (pointer[0] * Math.PI - grp.rotation.y) * delta * 0.1;
    grp.rotation.x += (-pointer[1] * Math.PI * 0.3 - grp.rotation.x) * delta * 0.1;
    // continuous spin
    grp.rotation.y += delta * 0.05;
  });

  // define rings of icons
  const rings = [
    { radius: 3.0, count: 12 },
    { radius: 4.0, count: 16 },
  ];

  return (
    <group ref={groupRef} rotation={[0.6, 0, 0]}>
      {/* saturn sphere with diffusion + bump */}
      <mesh>
        <sphereGeometry args={[1.5, 128, 128]} />
        <meshStandardMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>

      {/* icon rings */}
      {rings.flatMap((ring, ri) =>
        Array.from({ length: ring.count }).map((_, i) => {
          const Icon = ICONS[(ri * ring.count + i) % ICONS.length];
          const theta = (i / ring.count) * Math.PI * 2;
          const x = ring.radius * Math.cos(theta);
          const z = ring.radius * Math.sin(theta);
          return (
            <Html key={`ring${ri}-icon${i}`} position={[x, 0, z]} center>
              <div className="text-white text-2xl hover:text-cyan-400 cursor-pointer transition-colors">
                <Icon />
              </div>
            </Html>
          );
        })
      )}
    </group>
  );
}

export default function HeroSphere() {
  return (
    <Canvas
      className="absolute inset-0 z-0 pointer-events-none"
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <SphereWithIconRings />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
