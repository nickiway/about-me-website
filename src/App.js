import Navigation from "./components/navigation/Navigation";
import Main from "./pages/Main";

import "./assets/base/_base.scss";
import "animate.css/animate.min.css";
function App() {
  return (
    <div className="container">
      <div className="wow bounceInDown">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
