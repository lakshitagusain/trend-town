import { Routes, Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.routes.jsx';
import Home from './routes/home/home.routes.jsx';
import Shop from './routes/shop/shop.routes.jsx';
import Authentication from './routes/authentication/authentication.routes.jsx'


const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Navigation/>}>
        <Route index element = {<Home/>}/>
        <Route path = 'shop' element = {<Shop/>}/>
        <Route path = 'auth' element = {<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
