import "./models/App.css"

import JoinUs from "./Components/JoinUs";
import Settings from "./Components/Settings";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Search from "./Components/Search";
import Help from "./Components/Help";
import Home from "./Components/Home";
import Download from "./Components/Download";

function App(){
  return(
    <div className="reactMenu">
    <JoinUs />
    <Settings />
    <Login />
    <ContactUs />
    <Search />
    <Help />
    <Home />
    <Download />
    </div>
  );
}

export default App;