import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./routers/MainRouter";


function App() {
  return <BrowserRouter>
          <MainRouter/>
          </BrowserRouter>
        
}

export default App;
