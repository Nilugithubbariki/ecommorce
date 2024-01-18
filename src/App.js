import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
// import Body from "./components/Body";
import ApplayOut from "./ApplayOut";
import Cart from "./components/Cart";
import RestuarantMenu from "./components/RestuarantMenu";

//Chunking
//Code Splitting
//Dynamic Bundling
//lazy loading
//On demand loading
//Dynamic import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Body = lazy(() => import("./components/Body"));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ApplayOut />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Body />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <About />
              </Suspense>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/resturantsmenu/:resId" element={<RestuarantMenu />} />
          <Route
            path="/grocery"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Grocery />
              </Suspense>
            }
          />
          <Route path="*" element={<ErrorComponent />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
