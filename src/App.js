import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "./App.css";
const Hero = React.lazy(() => import("./components/Hero"));
const About = React.lazy(() => import("./components/About"));
const Events = React.lazy(() => import("./components/Events"));
const Team = React.lazy(() => import("./components/Team"));
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
            <Route path="*" Component={Error} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
