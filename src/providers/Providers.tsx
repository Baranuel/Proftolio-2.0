"use client";
import { VisitedProjectsProvider } from "./VisitedProjectsProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <VisitedProjectsProvider>{children}</VisitedProjectsProvider>;
}
