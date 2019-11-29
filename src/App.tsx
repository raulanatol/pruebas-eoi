import React from 'react';
import './App.css';
import { Sidebar } from "./components/sideBar/Sidebar";

type Page = 'Login' | 'Home';

interface AppState {
  visible: boolean;
  page: Page;
  username?: string;
}


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
    return <Sidebar/>;
    // if (this.state.page === 'Login') {
    //   return <Container><Login onLoginSuccess={this.loginOk}/></Container>
    // }

    // return <Home onLogout={this.doLogout} name={this.state.username}/>;
  }
}

// const Home = ({ name, onLogout }) => {
//   return <div>
//     <h1>Welcome {name}</h1>
//     <button onClick={onLogout}>exit</button>
//   </div>
// };
//

export default App;
