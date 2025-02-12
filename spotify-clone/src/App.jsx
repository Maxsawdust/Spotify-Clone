import Header from "./components/Header";
import Resizable from "./components/Resizable";
import Footer from "./components/Footer";
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
