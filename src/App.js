import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

class App extends Component {
  state = {
    passwordsList: [
      {
        id: uuidv4(),
        website: 'google.com',
        username: 'user1',
        password: 'password1',
        randomProfilebgColor: 'pfbg-1',
      },
      {
        id: uuidv4(),
        website: 'facebook.com',
        username: 'user2',
        password: 'password2',
        randomProfilebgColor: 'pfbg-2',
      },
      {
        id: uuidv4(),
        website: 'twitter.com',
        username: 'user3',
        password: 'password3',
        randomProfilebgColor: 'pfbg-3',
      },
      {
        id: uuidv4(),
        website: 'instagram.com',
        username: 'user4',
        password: 'password4',
        randomProfilebgColor: 'pfbg-4',
      },
      {
        id: uuidv4(),
        website: 'linkedin.com',
        username: 'user5',
        password: 'password5',
        randomProfilebgColor: 'pfbg-5',
      },
      {
        id: uuidv4(),
        website: 'amazon.com',
        username: 'user6',
        password: 'password6',
        randomProfilebgColor: 'pfbg-6',
      },
      {
        id: uuidv4(),
        website: 'reddit.com',
        username: 'user7',
        password: 'password7',
        randomProfilebgColor: 'pfbg-7',
      },
      {
        id: uuidv4(),
        website: 'github.com',
        username: 'user8',
        password: 'password8',
        randomProfilebgColor: 'pfbg-1', // Reset to pfbg-1 after 7
      },
      {
        id: uuidv4(),
        website: 'netflix.com',
        username: 'user9',
        password: 'password9',
        randomProfilebgColor: 'pfbg-2', // Continue sequence
      },
      {
        id: uuidv4(),
        website: 'apple.com',
        username: 'user10',
        password: 'password10',
        randomProfilebgColor: 'pfbg-3', // Continue sequence
      },
    ],
    websiteVal: '',
    usernameVal: '',
    passwordVal: '',
    searchVal: '',
    toggleShowPassWord: false,
    boolpasswordOrTextType: false,
  }

  componentDidMount() {
    this.getPasswordsList()
  }

  getPasswordsList = () => {
    const localPasswordList = localStorage.getItem('passwordList')
    if (localPasswordList !== null) {
      this.setState({passwordsList: JSON.parse(localPasswordList)})
    }
  }

  onAddPasswordItem = event => {
    event.preventDefault()
    const {websiteVal, usernameVal, passwordVal, passwordsList} = this.state
    const pfbgList = [
      'pfbg-1',
      'pfbg-2',
      'pfbg-3',
      'pfbg-4',
      'pfbg-5',
      'pfbg-6',
      'pfbg-7',
    ]
    const randomProfilebgColor =
      pfbgList[Math.floor(Math.random() * pfbgList.length)]
    if (websiteVal !== '' && usernameVal !== '' && passwordVal !== '') {
      const newPasswordItem = {
        id: uuidv4(),
        website: websiteVal,
        username: usernameVal,
        password: passwordVal,
        randomProfilebgColor,
      }
      localStorage.setItem(
        'passwordList',
        JSON.stringify([...passwordsList, newPasswordItem]),
      )
      this.setState(prevState => ({
        passwordsList: [...prevState.passwordsList, newPasswordItem],
        websiteVal: '',
        usernameVal: '',
        passwordVal: '',
      }))
    } else {
      alert('Enter All Fields !!')
    }
  }

  onChangeWebsiteVal = event => {
    this.setState({websiteVal: event.target.value})
  }

  onChangeUsernameVal = event => {
    this.setState({usernameVal: event.target.value})
  }

  onChangePasswordVal = event => {
    this.setState({passwordVal: event.target.value})
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const filteredPasswordsList = passwordsList.filter(
      eachPasswordObj => eachPasswordObj.id !== id,
    )
    localStorage.setItem('passwordList', JSON.stringify(filteredPasswordsList))
    this.setState({passwordsList: filteredPasswordsList})
  }

  PasswordItem = props => {
    const {toggleShowPassWord} = this.state
    const {eachPasswordObj, deletePassword} = props
    const {
      id,
      website,
      username,
      password,
      randomProfilebgColor,
    } = eachPasswordObj
    const onDeletePasswordItem = () => {
      deletePassword(id)
    }

    return (
      <li className="password-card">
        <div className={`profile-bg ${randomProfilebgColor}`}>
          <p>{username[0].toUpperCase()}</p>
        </div>
        <div className="username-pass-container">
          <p className="website-text">{website}</p>
          <p className="username-text">{username}</p>
          {toggleShowPassWord ? (
            <p className="username-text">{password}</p>
          ) : (
            <img
              className="star-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
        <button
          type="button"
          onClick={onDeletePasswordItem}
          data-testid="delete"
          className="delete-btn"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }

  onToggleShowPassWord = () => {
    this.setState(prevState => ({
      toggleShowPassWord: !prevState.toggleShowPassWord,
    }))
  }

  onChangeSearchVal = event => {
    this.setState({searchVal: event.target.value})
  }

  toggleUserInputPassword = () => {
    this.setState(prevState => ({
      boolpasswordOrTextType: !prevState.boolpasswordOrTextType,
    }))
  }

  onDeleteAllPassword = () => {
    localStorage.setItem('passwordList', JSON.stringify([]))
    this.setState({passwordsList: []})
  }

  render() {
    const {
      passwordsList,
      searchVal,
      toggleShowPassWord,
      websiteVal,
      usernameVal,
      passwordVal,
      boolpasswordOrTextType,
    } = this.state

    const filteredPasswordsList = passwordsList.filter(eachPasswordObj =>
      eachPasswordObj.website.toLowerCase().includes(searchVal.toLowerCase()),
    )

    const passwordCount = filteredPasswordsList.length
    const passwordOrTextType = boolpasswordOrTextType ? 'text' : 'password'

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="add-password-section">
          <div className="password-manager-img-container">
            <img
              alt="password manager"
              className="password-manager-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
          </div>
          <div className="add-password-container">
            <h1 className="add-new-password-header">Add New Password</h1>
            <form className="form-container">
              <div className="input-box">
                <div className="input-img-container">
                  <label htmlFor="websiteInput">
                    <img
                      className="input-logo-img"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                    />
                  </label>
                </div>
                <input
                  onChange={this.onChangeWebsiteVal}
                  value={websiteVal}
                  id="websiteInput"
                  placeholder="Enter Website"
                  className="input-element"
                />
              </div>
              <div className="input-box">
                <div className="input-img-container">
                  <label htmlFor="usernameInput">
                    <img
                      className="input-logo-img"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                    />
                  </label>
                </div>
                <input
                  onChange={this.onChangeUsernameVal}
                  value={usernameVal}
                  id="usernameInput"
                  placeholder="Enter Username"
                  className="input-element"
                />
              </div>
              <div className="input-box">
                <div className="input-img-container">
                  <label htmlFor="passwordInput">
                    <img
                      className="input-logo-img"
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                    />
                  </label>
                </div>
                <input
                  onChange={this.onChangePasswordVal}
                  type={passwordOrTextType}
                  value={passwordVal}
                  id="passwordInput"
                  placeholder="Enter Password"
                  className="input-element"
                />
              </div>

              <div className="showOrHide-input-password">
                <input
                  className="show-password"
                  id="showInputPass"
                  type="checkbox"
                  onClick={this.toggleUserInputPassword}
                />
                <label htmlFor="showInputPass" className="show-input-pass-text">
                  Show Password
                </label>
              </div>
              <button
                onClick={this.onAddPasswordItem}
                className="add-btn"
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="display-stored-password-section">
          <nav className="password-nav-container">
            <div className="password-count-container">
              <h1 className="your-password-text">Your Passwords</h1>
              <p className="password-count-text">{passwordCount}</p>
            </div>
            <div className="search-input-box">
              <div className="search-input-img-container">
                <label htmlFor="searchInput">
                  <img
                    className="input-logo-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                  />
                </label>
              </div>
              <input
                onChange={this.onChangeSearchVal}
                type="search"
                id="searchInput"
                placeholder="Search"
                className="input-element"
              />
            </div>
          </nav>
          <hr className="hr-nav" />
          {passwordCount !== 0 && (
            <div className="show-password-container">
              <div className="delete-all-container">
                <Popup
                  className="pop-up"
                  modal
                  trigger={
                    <button
                      onClick={this.onDeleteAllPassword}
                      type="button"
                      data-testid="delete"
                      className="delete-btn delete-all-btn"
                    >
                      <img
                        className="delete-img"
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                        alt="delete"
                      />
                      <span className="delete-all-text">
                        Delete All Passwords
                      </span>
                    </button>
                  }
                >
                  {close => (
                    <>
                      <div className="modal-content">
                        <h1 className="confirmation-text">
                          Are you sure want to delete all passwords ?
                        </h1>
                        <div className="yes-no-container">
                          <button
                            onClick={() => close(this.onDeleteAllPassword())}
                            className="confiramtion-btn"
                          >
                            Yes
                          </button>
                          <button
                            className="confiramtion-btn no-btn"
                            onClick={() => close()}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </Popup>
              </div>
              <div className="toggle-password-container">
                <input
                  onClick={this.onToggleShowPassWord}
                  checked={toggleShowPassWord}
                  className="show-pass-checkbox"
                  id="showPassword"
                  type="checkbox"
                />
                <label className="show-password-label" htmlFor="showPassword">
                  Show Passwords
                </label>
              </div>
            </div>
          )}

          {passwordCount === 0 ? (
            <div className="no-password-img-container">
              <img
                alt="no passwords"
                className="no-password-img"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul className="passwords-container-list">
              {filteredPasswordsList.map(eachPasswordObj => (
                <this.PasswordItem
                  key={eachPasswordObj.id}
                  deletePassword={this.deletePassword}
                  eachPasswordObj={eachPasswordObj}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
