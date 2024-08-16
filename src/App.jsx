import "./App.css";
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import Albums from "./components/Alums/Albums.jsx";
import {About} from "./components/About/About.jsx";
import {Navigation} from "./components/Navigation/Navigation.jsx";
import {Main} from "./components/Main/Main.jsx";
import {Details} from "./components/Alums/Details/Details.jsx";
import {AlbumsProvider} from "./context/AlbumsProvider.jsx";

function App() {
  return (
    <AlbumsProvider>
      <BrowserRouter basename={"/hw_38"}>
        <Navigation></Navigation>
        <Routes>
          <Route path={'/'} element={<Main/>}></Route>
          <Route path={'/about'} element={<About/>}></Route>
          <Route path={'/albums'} element={<Albums/>}></Route>
          <Route path={'/albums/:id'} element={<Details/>}></Route>
        </Routes>
        <Outlet/>
      </BrowserRouter>
    </AlbumsProvider>

  );
}

export default App;
