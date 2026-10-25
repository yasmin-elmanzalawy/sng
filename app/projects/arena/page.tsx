import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectArena from "@/components/ProjectArena";


export default function Page() {
  return (
    <main className="relative min-h-screen pt-24">
      <Navbar />
      <ProjectArena />
      <Footer />
    </main>
  );
}