import "./App.css";

import Header from './components/Header';
import Hero from './components/Hero';
import BlogHeader from './components/BlogHeader';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
export default function App() {
  return (
      <section>
        <Header />
        <Hero />
        <BlogHeader/>
        <BlogPost/>
        <Footer />
      </section>
  );
}
