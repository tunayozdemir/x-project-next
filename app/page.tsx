
import { Header, Footer } from "../components";
import TestPage from "./TestPage/page"

export default function Home() {
  return (
    <div className="bg-red-400">
      <Header />
      <TestPage />
      <Footer />
    </div>
  );
}
