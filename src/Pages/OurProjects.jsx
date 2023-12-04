import Header from "../Components/Header-Section/Header";
import OurTeam from "../Components/ProjectContent/OurTeam";
import ProjectHeroSection from "../Components/ProjectContent/ProjectHeroSection";
import RecentProject from "../Components/ProjectContent/RecentProject";

function OurProjects() {
  return (
    <div className="projectPage">
      <Header />
      <ProjectHeroSection />
      <OurTeam />
      <RecentProject />
    </div>
  );
}

export default OurProjects;
