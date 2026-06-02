
import Header from "./componets/Header.jsx";
import Footer from "./componets/Footer.jsx";

import { HomePage } from "./pages/Home.jsx";
import { SearchPages } from "./pages/Search.jsx";
import {Route} from "./componets/Router.jsx";

function App() {
  return (
    <>
      <Header />
      <Route path="/" componet={HomePage} />
      <Route path="/search" componet={SearchPages} />
      <Footer />
    </>
  );
}

export default App;
