import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe('pk_test_51KD8WMSJJcX8xZaF3XRx0ekB9vn9uWdutXVbJPmNSIoISbcaxt1HDmQ04YixIhWjKfcB6rUKcM2U8w2aYsBfXjY400cu90YMru')
function App() {

  const [state, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads...
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //Logged In
        console.log(user.email + " has logged In!");
        dispatch({
          type: 'USER',
          user: user
        })
      } else {
        console.log("Logged Out!")
        dispatch({
          type: 'USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
