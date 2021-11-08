import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/Sign-In';
import SignUpCustomer from './components/SignUpCustomer/Sign-Up-Customer';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <SignUpCustomer></SignUpCustomer>
    </div>
  );
}

export default App;
