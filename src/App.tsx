import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navigation-bar/NavigationBar';
import Shop from './routes/shop/Shop';
import Home from './routes/home/Home';
import SignIn from './routes/sign-in/SignIn';
import Contact from './routes/contact/Contact';

const App = () => {  
  return(
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
  );
};

export default App;
