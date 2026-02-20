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
      <meta name="google-site-verification" content="dao7qTfjqG8mOJs1If7RPq_ef1n2nPimV5iy757yWMk" />
      <Navbar />

      {/* Optional overlay for readability */}
      <main className="bg-black/50 min-h-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
}
