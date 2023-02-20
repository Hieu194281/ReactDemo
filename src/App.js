import './App.scss';
import Header from './component/Header/header';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App-container">
      <Header ></Header>
      <div>test link
        <div>
          <button>
            <Link to='/users'>go to user page</Link>
          </button>
          <button>
            <Link to='/admin'>go to admin page</Link>
          </button>

        </div>
      </div>

    </div>
  );
}

export default App;
