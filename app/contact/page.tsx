import Navbar from "@/components/Navbar";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";


export default function Contact() {
  return (
    <main className="relative min-h-screen pt-24">
      <Navbar />
      <ContactPage />
      <Footer />
    </main>
  );
}