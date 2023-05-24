
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Navigate,
} from "react-router-dom";
import AppRoutes from './routes';

function App() {
  
  return (
    <div >
    <Router>
      <AppRoutes />
    </Router>
    </div>
    
  );
}

export default App;
