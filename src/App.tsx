import "./css/style.css";

import { Header, Layout, Footer } from "./components/common";
import DriverStandings from "./components/DriverStandings";

const App = () => {
  return (
    <div className="l-container">
      <Header />
      <Layout>
        <DriverStandings />
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
