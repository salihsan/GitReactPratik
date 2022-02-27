import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginPage from './LoginPage';
import LoggedPage from './LoggedPage'

function App() {
  

  
  return (
    <switch>
    <LoginPage className="container"/>
    <LoggedPage className="container bg-danger"/>

  </switch>
  
    );
}

export default App;
