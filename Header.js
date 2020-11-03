import React, {Component} from "react"
import UserNameContext from "./UserNmaeContext"

class Header extends Component {
    render() {
        return (
            <header>
                <p>Welcome, {this.context}!</p>
            </header>
        )    
    }
}
Header.contextType = UserNameContext
export default Header
