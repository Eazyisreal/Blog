import BlogHeader from "../components/BlogHeader";
import BlogPost from "../components/BlogPost";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <section>
      <Header />
      <Hero />
      <BlogHeader />
      <BlogPost />
      <Footer />
    </section>
  );
}
