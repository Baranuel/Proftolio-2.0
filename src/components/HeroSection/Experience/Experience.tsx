"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei/core";
import CustomMesh from "./CustomMesh";

function Experience() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[10, 10, 10]} />
      <CustomMesh />
    </Canvas>
  );
}

export default Experience;
