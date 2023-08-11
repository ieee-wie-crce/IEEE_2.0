import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { TailSpin } from "react-loader-spinner";
const Hero = React.lazy(() => import("./components/Hero"));
const About = React.lazy(() => import("./components/About"));
const Events = React.lazy(() => import("./components/Events"));
const Team = React.lazy(() => import("./components/Team"));
const Contact = React.lazy(() => import("./components/Contact"));
const Error = React.lazy(() => import("./components/Error"));
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                height: "100vh",
              }}
            >
              <TailSpin color="#7ca2e3" />
            </div>
          }
        >
          <Routes>
            <Route path="/" exact Component={Hero} />
            <Route path="/about" exact Component={About} />
            <Route path="/events" exact Component={Events} />
            <Route path="/team" exact Component={Team} />
            <Route path="/contact" exact Component={Contact} />
            <Route path="*" Component={Error} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
