import React from "react";

interface Props {
  children: React.ReactNode;
  id: string;
}
function TabView({ children, id }: Props) {
  return <div>{children}</div>;
}

export default TabView;
