import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import HomePage from './pages/HomePage/HomePage';
import Header from "./components/Header/Header";
import GamePage from './pages/GamePage/GamePage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/app/:title" element={<GamePage/>}/>
        </Routes>
      </div>
    </Provider>
    
  );
}

export default App;
