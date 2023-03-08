import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { Mesh } from "three";
import colors from "nice-color-palettes";
//@ts-ignore
import vertex from "./shaders/vertex.glsl";
//@ts-ignore
import fragment from "./shaders/fragment.glsl";

const randomIndex = Math.floor(Math.random() * colors.length);
let pallete = colors[randomIndex];
pallete = ["#3B429F", "#BA63FF", "#35B4D0", "#7190E5"];
const convertedPallete = pallete.map((color) => new THREE.Color(color));
function CustomMesh() {
  const mesh = useRef<Mesh>(null!);

  useFrame((clock) => {
    const time = ((
      mesh.current.material as THREE.ShaderMaterial
    ).uniforms.uTime.value = clock.clock.getElapsedTime());
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[3, 3, 400, 100]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={{ uTime: { value: 0 }, uColor: { value: convertedPallete } }}
      />
    </mesh>
  );
}

export default CustomMesh;
