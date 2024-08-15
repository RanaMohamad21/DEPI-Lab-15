import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/home";
function App() {
  return (
    <div className=" grid grid-rows-[auto_minmax(0,1fr)_auto]">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
