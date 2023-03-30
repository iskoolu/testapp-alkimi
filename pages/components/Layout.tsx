import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <main className="bg-lightblack cursor-default  font-mono">
      <Header />
      <div className="bg-lightblack z-10 px-4 py-16 lg:px-40 lg:py-20 text-textwhite min-h-[88vh] lg:min-h-[95vh]">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
