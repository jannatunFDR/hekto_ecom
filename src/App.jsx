import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";


function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
    </Route>
  ))
 

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
