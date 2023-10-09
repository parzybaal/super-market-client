import {
  BrowserRouter as Router,
  Routes,
  Route /* useLocation */,
} from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import NotFound from "../pages/Error/NotFound";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
