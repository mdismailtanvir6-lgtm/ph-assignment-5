import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Page Content */}
      <main className="text-center mt-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900">Hello world!</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
