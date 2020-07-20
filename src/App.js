import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store from "./redux/redux-store";
import BoardContainer from "./components/Board/BoardContainer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/kanban-board' render={() => <Redirect to={'/board'} />} />
                    <div>
                        <Route exact path='/' render={() => <Redirect to={'/board'} />} />
                        <Route path='/board' render={() => <BoardContainer />} />
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

let AppContainer = compose(
    withRouter,
    connect()
)(App);

const MainApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default MainApp;