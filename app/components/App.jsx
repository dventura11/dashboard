import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

import GlobalScoreboard from 'components/GlobalScoreboard'
import IndividualScoreboard from 'components/IndividualScoreboard'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeKey: 'global'
        }
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        this.setState({activeKey: key});
    }

    render() {
        return (
            <div id='content'>
                <div id='header'>
                    <center><h1>Algorists</h1></center>
                </div>

                <div id='dashboard'>
                    <Nav bsStyle='pills' activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                        <NavItem eventKey={'global'}>Global scoreboard</NavItem>
                        <NavItem eventKey={'individual'}>Individual scoreboard</NavItem>
                    </Nav>
                    { this.state.activeKey == 'global' && <GlobalScoreboard /> }
                    { this.state.activeKey == 'individual' && <IndividualScoreboard /> }
                </div>
            </div>
        );
    }
}
