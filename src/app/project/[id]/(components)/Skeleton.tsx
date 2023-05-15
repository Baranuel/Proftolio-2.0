import React from "react";

export function Skeleton() {
  return (
    <h1 className=" h-[25px] w-[250px] animate-pulse bg-gray-300 rounded-xl"></h1>
  );
}

export function SkeletonText() {
  return (
    <p className=" h-[15px] w-[200px] animate-pulse bg-gray-300 rounded-xl"></p>
  );
}

export function SkeletonTextLong() {
  return (
    <p className=" h-[15px] w-[100%] animate-pulse bg-gray-300 rounded-xl"></p>
  );
}
