import {BrowserRouter, Routes, Route  } from "react-router";
import ErrorPage from "./assets/pages/ErrorPage"
import SignUp from "./assets/pages/SignUp"
import Layout from "./assets/Components/Layout"
import Home from "./assets/pages/Home"
import LogIn from "./assets/pages/LogIn"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route index element={<Layout />}>
          <Route path="/" element={<Home/>} />
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
