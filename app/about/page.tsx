import Navbar from "../../components/Navbar";
import AboutPlanet from "../../components/Aboutus";
import "../globals.css";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-24">
      <Navbar />
      <AboutPlanet />
    </main>
  );
}