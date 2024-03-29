import { NextPage } from "next";
import FadeIn from "react-fade-in";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/navbar/Navbar";
import { Projects } from "@/components/projects/Projects";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/data";

const ProjectsPage: NextPage = () => (
  <Layout>
    <FadeIn delay={140}>
      <Navbar scrollLinks={false} />
    </FadeIn>

    <div className="mx-auto flex w-full max-w-[45rem] flex-col justify-center py-10">
      <section
        className="
              w-full self-start text-dark-900"
      >
        <FadeIn delay={140}>
          <Projects projects={projects} projectsPage={true} />
        </FadeIn>
      </section>
    </div>
    <FadeIn>
      <Footer />
    </FadeIn>
  </Layout>
);

export default ProjectsPage;
