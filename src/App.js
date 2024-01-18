import "./App.css";
import { Footer } from "./components/Footer";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";

function App() {
  return (
    <>
    <Footer />
      <Search />
      <div className="container">
        <Pagination />
        <Stories />
        <Pagination />
      </div>
    </>
  );
}

export default App;
