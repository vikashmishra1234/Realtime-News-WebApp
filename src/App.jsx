import Navbar from "./components/Navbar";
import NewsCard  from "./components/NewsCard"
import ContextState from "./components/context/ContextState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsCard key="1" category='general'/>}></Route>
            <Route exact path="/sports" element={<NewsCard key="2" category='sports'/>}></Route>
            <Route exact path="/entertainment" element={<NewsCard key={"3"} category='entertainment'/>}></Route>
            <Route exact path="/science" element={<NewsCard key={"4"} category='science'/>}></Route>
            <Route exact path="/technology" element={<NewsCard key={"5" }category='technology'/>}></Route>
            <Route exact path="/health" element={<NewsCard key={"6"} category='health'/>}></Route>
            <Route exact path="/business" element={<NewsCard key ={"7"} category='business'/>}></Route>
          </Routes>
        </Router>
      
    </div>
  );
};

export default App;
