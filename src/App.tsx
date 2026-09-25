import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Banner from "./components/hero/Banner";
import bannerImage from "./assets/banner-stack.png";
import Technologies from "./components/technology/Technologies";

function App() {
  return (
    <div className="">
      <Navbar />

      {/* Page Content */}
      <main className="">
        <Banner bannerImage={bannerImage} />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
