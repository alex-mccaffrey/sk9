import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import config from "../config"
import "./App.css"
import ApiContext from "../ApiContext"
import AddFolder from "../AddFolder/AddFolder"
import AddSession from "../AddSession/AddSession"
import MainNav from "../MainNav/MainNav"
import UserHome from "../UserHome/UserHome"
import SessionDetail from "../SessionDetail/SessionDetail"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    sessions: [],
    folders: [],
  }
};

  handleAddFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder],
    });
  };

  handleAddSession = (session) => {
    this.setState({
      sessions: [...this.state.sessions, session],
    });
  };

  handleDeleteSession = (sessiond) => {
    this.setState({
      sessions: this.state.session.filter((session) => session.id !== sessionId),
    });
  };

  /*renderNavRoutes() {
    return (
      <>
        {["/", "/folder/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={NoteListNav} />
        ))}
        <Route path="/session/:sessionId" component={NotePageNav} />
        <Route path="/add-folder" component={NotePageNav} />
        <Route path="/add-session" component={NotePageNav} />
      </>
    );
  }*/

  renderMainRoutes() {
    return (
      <>
        {["/", "/folder/:folderId"].map((path) => (
          <Route exact key={path} path={path} component={UserHome} />
        ))}
        <Route path="/session/:sessionId" component={SessionDetail} />
        <Route path="/add-folder" component={AddFolder} />
        <Route path="/add-session" component={AddSession} />
      </>
    );
  }

  render() {
    const value = {
      sessions: this.state.sessions,
      folders: this.state.folders,
      addFolder: this.handleAddFolder,
      addSession: this.handleAddSession,
      deleteSession: this.handleDeleteSession,
    };
    return (
    <ApiContext.Provider value={value}>
      <div className="App">
        <nav className="App__nav">{this.renderNavRoutes()}</nav>
        <header className="App__header">
          <h1>
            <Link to="/">SK9</Link>{" "}
          </h1>
        </header>
        <main className="App__main">{this.renderMainRoutes()}</main>
      </div>
    </ApiContext.Provider>
    )
  }
}

export default App;