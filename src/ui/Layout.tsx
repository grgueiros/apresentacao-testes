import React from "react";
import { Header } from "./Header";
import { LayoutWrapper } from "./Layout.styles";

type LayoutProps = {
  children: React.ReactElement;
};

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  );
}
