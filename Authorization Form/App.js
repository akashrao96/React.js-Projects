import React from 'react';
import ReactDOM from 'react-dom';

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'akash',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector('input[type="password"]').value;
    const auth = password == this.state.password;
    if(password!=this.state.password)
    {
      alert("Enter correct password")
    }
  
    this.setState({
      authorized: auth
    });
      
    
  }

  render() {
  
    let x;
    if(this.state.authorized){
      x='Contact Me';
    }
    else{
    
      x='Enter the Password';
    
    }
    var login;
    login=(<form action="#" onSubmit={this.authorize}>
      <input type="password" placeholder="Password" />
        <input id ="main" type="submit" />
      
      </form>);
      
    const contactInfo=(
        <ul>
          <li>
           Akash Rao
          </li>
          <li>
           <a href="#">akashrao96@gmail.com</a> 
          </li>
          <li>
           9681049170
          </li>
        </ul>
    );
    return (
      <div id="authorization">
        
        <h1>{x}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

