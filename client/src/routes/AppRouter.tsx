import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from "../views/Landing/Landing";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";
import NotFound from "../views/Error/NotFound";
/* import Navbar from "../components/Navbar/Navbar"; */
import SignIn from "../views/SignIn/SignIn";
import SignUp from "../views/SignUp/SignUp";

const AppRouter = () => {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter; 