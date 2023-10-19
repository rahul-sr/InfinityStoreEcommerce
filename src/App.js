import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Data from "./data.json";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main>
        <Categories />
        <ProductList heading="Top Deals Now" products={Data.deals} />
        <ProductList heading="All Products" products={Data.allProducts} />
      </main>
    </div>
  );
}

export default App;
