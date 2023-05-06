import './App.css'
import { Route, Routes, HashRouter as BrowserRouter } from "react-router-dom";
import Header from '../components/Header/Header';
import Navi from '../components/Header/Navi';
import Jumbotron from '../components/Header/Jumbotron';
import Md from '../components/Md';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navi />
        <div id="body_content">
          <Routes>
            <Route path="/" element={<Jumbotron />} />
            <Route path="/h" element={<Header />} />
            <Route path="/md" element={<Md />}>
              <Route path=":f1" element={<Md />}>
              </Route>
            </Route>
            <Route path="*" element={<Jumbotron />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );

}

export default App
