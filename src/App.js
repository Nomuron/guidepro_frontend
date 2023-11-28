import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Login} from "./pages/Login";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
