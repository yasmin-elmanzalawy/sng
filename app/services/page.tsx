import Navbar from "@/components/Navbar";
import ServicesPage from "@/components/ServicesPage";
import Footer from "@/components/Footer";


export default function Services() {
  return (
    <main className="relative min-h-screen pt-24">
      <Navbar />
      <ServicesPage />
      <Footer />
    </main>
  );
}