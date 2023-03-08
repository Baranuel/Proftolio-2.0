import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { Mesh } from "three";
// ignore this import error message

//@ts-ignore
import vertex from "./shaders/vertex.glsl";
//@ts-ignore
import fragment from "./shaders/fragment.glsl";

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
        uniforms={{ uTime: { value: 0 } }}
      />
    </mesh>
  );
}

export default CustomMesh;
