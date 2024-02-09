import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import "./App.css";
const Hero = React.lazy(() => import("./components/Hero"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Events = React.lazy(() => import("./components/Events"));
const Team = React.lazy(() => import("./components/Team"));
const Error = React.lazy(() => import("./components/Error"));
// const Modal = React.lazy(() => import("./components/Modal"));
function App() {
  console.log(
    `%c${process.env.REACT_APP_SECRET_MESSAGE}`,
    "color: #00a67d; font-weight:bold"
  );
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
            <Route
              path="/contact"
              exact
              Component={Contact}
            />
            <Route path="*" Component={Error} />
          </Routes>
        </Suspense>
        {/* <Modal form={form} handleSubmit={handleSubmit} /> */}
      </Router>
    </>
  );
}

export default App;
