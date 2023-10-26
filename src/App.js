import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import MainContainer from "./components/MainContainer/MainContainer";
import './lib/app.css'

function App() {
  return (
    <div>
      <Header/>
      <div className='mainPart'>
          <SideBar/>
          <MainContainer/>
      </div>
    </div>
  );
}

export default App;
