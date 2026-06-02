
import Header from "./componets/Header.jsx";
import Footer from "./componets/Footer.jsx";

import { HomePage } from "./pages/Home.jsx";
import { SearchPages } from "./pages/Search.jsx";
import {Route} from "./componets/Router.jsx";
import {ContactPage} from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <Header />
      <Route path="/" componet={HomePage} />
      <Route path="/search" componet={SearchPages} />
      <Route path="/contact" componet={ContactPage} />
      <Footer />
    </>
  );
}

export default App;