import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css";
function App() {
  return (
    <div className="App">
       
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
