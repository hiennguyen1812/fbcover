import "./App.css"
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import {useStateValue } from "./StateProvider"
import Header from "./Header";
import Login from "./login/Login";
import ExpanMoreToggle from "./toggle/ExpanMoreToggle";
function App() {
  const [{user}, dispatch] = useStateValue()

  return (
    <div className="app">
  {!user ? (
    <Login/>
  ) : ( 
    <>
      <Header/>
        <div className="app-body">
          <Sidebar/>
          <Feed />
          <Widgets />
          <ExpanMoreToggle />
        </div>
        </>
  )}
    </div>
  );
}

export default App;
