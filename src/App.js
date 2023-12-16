import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Login} from "./pages/Login";
import {HomePage} from "./pages/HomePage";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<MainPage/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/home" element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
