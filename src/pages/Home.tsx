import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
    </Layout>
  );
}
