
import { Header, Footer } from "../components";
import TestPage from "./TestPage/page"

export default function Home() {
  return (
    <div className="bg-primary primary">
      <Header />
      <TestPage />
      <Footer />
    </div>
  );
}
