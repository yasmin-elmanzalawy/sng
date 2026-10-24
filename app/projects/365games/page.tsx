import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Project365Page from "@/components/Project365Page";

export default function Page() {
  return (
    <main className="relative min-h-screen pt-24">
      <Navbar />
      <Project365Page />
      <Footer />
    </main>
  );
}