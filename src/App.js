import React from 'react';
import './App.css';
import GithubProfile from './GithubProfiles/GithubProfiles';
import Form from './GithubProfiles/Form';


class App extends React.Component {

  /*
 const testData = [
     {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
     {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
     {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
 ];
*/

  constructor(props) {
    super(props);
    this.state = {
      userData: []
    }
  }

  addNewUser = (profileData) => {
    this.setState(prevState => ({
      userData: [...prevState.userData, profileData]
    }))

  }

  render() {

    const profileData = this.state.userData.map(item => <GithubProfile {...item} key={item.id} />);

    return (
      <div className="cards">
        <h1> Github Profiles</h1>
        <div className="formtab">
          <Form onSubmitting={this.addNewUser} />
        </div>
        {profileData}
      </div>
    );
  }
}

export default App;
