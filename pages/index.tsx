import { NextPage } from "next";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ProjectEntity } from "@/entities/ProjectEntity";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

const projects: ProjectEntity[] = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://project1.com",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    imageUrl:
      "https://media.licdn.com/dms/image/C562DAQFbz0Fhxv0mSw/profile-treasury-image-shrink_800_800/0/1672799338241?e=1673496000&v=beta&t=jELjtV5W1v-ZEuhUGVOFPNR8Cc36Iyrtvryh8hS3d6M",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://project2.com",
    technologies: ["JavaScript", "Node.js", "Express"],
    imageUrl: "/project2.jpg",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://project3.com",
    technologies: ["Python", "Flask", "PostgreSQL"],
    imageUrl: "/project3.jpg",
  },
];

const IndexPage: NextPage = () => (
  <Layout>
    <div className="p-5">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
