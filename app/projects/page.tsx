import Navbar from "@/components/Navbar";
import ProjectsPage from "@/components/ProjectsPage";
import Footer from "@/components/Footer";

export default function Projects() {
  return (
    <main className="relative min-h-screen pt-24">
      <Navbar />
      <ProjectsPage />
      <Footer />
    </main>
  );
}