import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { reducer } from "./reducers";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import Home from "./components/home/Home";

type Page = 'Login' | 'Home';

interface AppState {
  visible: boolean;
  page: Page;
  username?: string;
}

const store = createStore(reducer);

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = { visible: false, page: "Login" };
    this.doToggle = this.doToggle.bind(this);
    this.loginOk = this.loginOk.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }

  doToggle() {
    this.setState({ visible: !this.state.visible });
  }

  doLogout() {
    this.setState({ ...this.state, username: undefined, page: 'Login' })
  }

  loginOk(username: string) {
    this.setState({ ...this.state, page: "Home", username });
  }

  render() {
    // return <Sidebar/>;
    // if (this.state.page === 'Login') {
    //   return <div>
    {/*<Login onLoginSuccess={this.loginOk}/>*/
    }
    {/*<Footer/>*/
    }
    // </div>
    // }

    return <Provider store={store}>
      <div>
        <Header/>
        <Home/>
        {/*<Icon name="dashboard"/>*/}
        {/*<Home onLogout={this.doLogout} name={this.state.username}/>*/}
        {/*<Footer/>*/}
      </div>
    </Provider>;
  }
}

//
// const Footer = () => {
//   return <div>Soy el footer</div>;
// };
//
// const Home = ({ name, onLogout }) => {
//   return <div>
//     <h1>Welcome {name}</h1>
//     <button onClick={onLogout}>exit</button>
//   </div>
// };


export default App;
