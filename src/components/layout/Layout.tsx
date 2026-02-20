import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <Navbar />

      {/* Optional overlay for readability */}
      <main className="bg-black/50 min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
}
