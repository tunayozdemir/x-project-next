
import { Header, Footer } from "../components";
import Product from "./product/page";

export default function Home() {
  return (
    <div className="bg-primary primary">
      <Header />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-white">Welcome to Our Store</h1>
        <p className="text-lg text-center text-white mt-4">Discover amazing products and deals!</p>
      </div>
      <Product/>
      <Footer/>
    </div>
  );
}
