import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import Footer from "./components/main/Footer";
import CampList from "./components/camp/CampList";
import CampDetail from "./components/camp/CampDetail";
import News from "./components/news/News";
import BoardList from "./components/board/BoardList";
import BoardDetail from "./components/board/BoardDetail";
import BoardInsert from "./components/board/BoardInsert";
import BoardUpdate from "./components/board/BoardUpdate";
import BoardDelete from "./components/board/BoardDelete";
import {Provider} from "react-redux";
import store from './store/store'

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Header/>
          <Routes>
            <Route exact path={"/"} element={<Home/>}/>
            <Route exact path={"/camp/camp_list"} element={<CampList/>}/>
              <Route exact path={"/camp/camp_detail/:cno"} element={<CampDetail/>}/>
              <Route exact path={"/news/news_find"} element={<News/>}/>
              <Route exact path={"/board/board_list"} element={<BoardList/>}/>
              <Route exact path={"/board/board_insert"} element={<BoardInsert/>}/>
              <Route exact path={"/board/board_update/:no"} element={<BoardUpdate/>}/>
              <Route exact path={"/board/board_delete/:no"} element={<BoardDelete/>}/>
          </Routes>
        </Router>
      </Provider>
  );
}

export default App;
