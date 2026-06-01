
import Header from "./componets/Header.jsx";
import Footer from "./componets/Footer.jsx";

import {HomePage} from "./pages/Home.jsx";
import {SearchPages} from "./pages/Search.jsx";
import {NotFoundPage} from "./pages/404.jsx";

function App() {
  const currentPath = window.location.pathname

  let page = <NotFoundPage />
  if (currentPath === "/"){
    page = <HomePage />
  } else if (currentPath === "/search"){
    page = <SearchPages />
  }
  return (
    <>
      <Header />
      {page}    
      <Footer />
    </>
  );
}

export default App;
