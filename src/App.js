import './App.css'; 
import StartScreen from './Screen/StartScreen';
import AddLocationScreen from './Screen/AddLocationScreen';
import DetailScreen from './Screen/DetailScreen';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={ <StartScreen/>}/>
       <Route path="/addLocation" element={ <AddLocationScreen/>}/>
       <Route path="/cardDetail" element={ <DetailScreen/>}/>
      </Routes>
    </>
  );
}

export default App;
