import React, {Component} from "react"
import Header from "./Header"
import UserNameContext from "./UserNmaeContext"

class App extends Component {
	// static contextType = usernameContext;
	render() {
		return (
			<div>
				<Header />
				<main>
					<p className="main">No new notifications, {this.context}! 🎉</p>
				</main>
			</div>
		)
	}
    
}
App.contextType = UserNameContext
export default App
