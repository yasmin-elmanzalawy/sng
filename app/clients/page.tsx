import Navbar from "@/components/Navbar";
import ClientsPage from "@/components/ClientsPage";
import Footer from "@/components/Footer";

export default function Clients() {
  return (
    <main className="relative min-h-screen pt-24">
      <Navbar />
      <ClientsPage />
      <Footer />
    </main>
  );
}