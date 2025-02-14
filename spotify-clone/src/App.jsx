import Header from "./components/Header/Header";
import Resizable from "./components/Resizable/Resizable";
import Footer from "./components/Footer/Footer";
import "./css/App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Resizable />
      <Footer />
    </div>
  );
}

export default App;
