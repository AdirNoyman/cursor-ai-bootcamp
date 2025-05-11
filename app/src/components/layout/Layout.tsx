import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-6">{children}</main>
      <Footer />
    </div>
  );
}
