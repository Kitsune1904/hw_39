import "./App.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {Page} from "./Page.jsx";
import {Main} from "./components/Main/Main.jsx";
import {About} from "./components/About/About.jsx";
import Albums from "./components/Alums/Albums.jsx";
import {Details} from "./components/Alums/Details/Details.jsx";
import {albumsLoader} from "./loaders/albumsLoader.jsx";

const pageRouter = createBrowserRouter(createRoutesFromElements(
  <Route path={'/'} element={<Page/>}>
    <Route index element={<Main/>}></Route>
    <Route path={'/about'} element={<About/>}></Route>
    <Route path={'/albums'}
           element={<Albums/>}
           loader={albumsLoader}>
    </Route>
    <Route path={'/albums/:id'} element={<Details/>}></Route>
  </Route>
))


function App() {
  return (
    <>
      <RouterProvider router={pageRouter}/>
    </>
  );
}

export default App;
