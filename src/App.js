import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactsSlice';
import { Route, Routes} from "react-router-dom";
import { Home } from 'pages/Home';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Login } from 'components/pages/Login';
import { Register } from 'components/pages/Register';
import { Contact } from 'components/pages/Contact';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes> 
      <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home />}/>
        <Route path="/login" element={
        <RestrictedRoute redirectTo="/contact" component={<Login />}/>
          }
        />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contact" component={<Register />}/>
          }
        />
        <Route path="/contact" element={
        <PrivateRoute redirectTo="/login" component={<Contact />} />}/>
      </Route>
    </Routes>
  );
};

export default App;