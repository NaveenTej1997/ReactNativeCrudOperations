import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Forms from './src/Forms';
import getData from './src/getData';


export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Scene>
							<Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
								<Scene key="forms" component={Forms} initial={true} />
								<Scene key="getData" component={getData} title="Register" />
							</Scene>
							<Scene key="app" hideNavBar={true} initial={this.props.isLoggedIn}>
								<Scene key="profile" component={Profile} />
							</Scene>
					</Scene>
			 </Router>
			)
	}
}