import Nav from "../components/navbar/Nav";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero-section/Hero";

const Home = () => {
  return (
    <>
      <div className="container mx-auto bg-[#000000]">
        <Nav />
        <Hero />
        <Footer />
      </div>
    </>
  );
};

export default Home;
