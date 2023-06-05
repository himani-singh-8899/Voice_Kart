import { useRoutes,useNavigate, useParams } from "react-router-dom";
import Routers from './router';
 function App() {
  let navigate=useNavigate();  
  const Redirectpath=(path)=>{
    navigate(path, { replace: true });
  }
  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  let element = useRoutes(Routers(Redirectpath));

  return (
    <div>
    {element}
    </div>
  );
}
export default App;