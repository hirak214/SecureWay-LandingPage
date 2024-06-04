"use client";

import React, { Suspense } from "react";
import { ThemeProvider } from "@material-tailwind/react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  // Ensure children are valid React elements or null
  const validChildren = React.isValidElement(children) ? children : null;

  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        {validChildren || <></>}
      </Suspense>
    </ThemeProvider>
  );
}

export default Layout;
