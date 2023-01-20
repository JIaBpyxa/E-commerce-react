import Home from "./routes/home/home.component";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    )
}

export default App;
