import "./css/style.css";

import { Header, Layout, Footer } from "./components/common";
import DriverStandings from "./components/DriverStandings";
import { useAppDispatch } from "./redux/hooks";
import { resultsByYear } from "./redux/results/resultSlice";

const App = () => {
  const dispatch = useAppDispatch();
  dispatch(
    resultsByYear({
      start: 2005,
      end: 2010,
    })
  );
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
