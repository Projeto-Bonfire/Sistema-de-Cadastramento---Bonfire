import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import InsertClass from '../pages/insertClass';
import InsertUser from '../pages/insertUser';
import Finish from '../pages/finish';
import Error from "../pages/error";
import Ping from '../pages/ping';

  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<InsertUser />}/>
          <Route path="/insert-class" element={<InsertClass />}/>
          <Route path="/finish" element={<Finish/>}/>
					<Route path='/ping' element={<Ping/>} />
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router