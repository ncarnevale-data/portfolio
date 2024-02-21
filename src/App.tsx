import About from "./components/About";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className=" bg-slate-900 text-white">
      <NavBar />
      <About />
      <Skills />
    </div>
  );
}

export default App;
