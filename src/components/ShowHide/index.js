import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onClickFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <div>
          <h1>Show/Hide</h1>
          <div className="card-container">
            <div className="card">
              <button type="button" onClick={this.onClickFirstName}>
                Show/Hide Firstname
              </button>
              {firstName ? <p className="paragraph">Joe</p> : ''}
            </div>
            <div className="card">
              <button type="button" onClick={this.onClickLastName}>
                Show/Hide Lastname
              </button>
              {lastName ? <p className="paragraph">Jonas</p> : ''}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
