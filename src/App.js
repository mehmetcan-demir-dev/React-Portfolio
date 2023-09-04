import Intro from "./components/Intro/intro"; // Import the Intro component
import Navbar from "./components/Navbar/navbar"; // Import the Navbar component
import Skills from "./components/Skills/skills"; // Import the Skills component
import Works from "./components/Works/works"; // Import the Works component
import Contact from "./components/Contact/contact"; // Import the Contact component
import Footer from "./components/Footer/footer"; // Import the Footer component

function App() {
  return (
    <div className="App">
      {/* Render the Navbar component */}
      <Navbar />

      {/* Render the Intro component */}
      <Intro />

      {/* Render the Skills component */}
      <Skills />

      {/* Render the Works component */}
      <Works />

      {/* Render the Contact component */}
      <Contact />

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default App;