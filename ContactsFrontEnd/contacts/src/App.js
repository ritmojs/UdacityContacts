import React from 'react';
import './App.css';
import ListContacts from './ListContacts';
import * as ContactsAPI from "./utils/ContactsAPI"
import CreateContact from "./CreateContact"
import {Route} from "react-router-dom"
import Message from "./checking"

class App extends React.Component {
  state={
    contacts: [],
}

createContact=(contact)=>{
  ContactsAPI.create(contact)
  .then((contact)=>{
    this.setState=(currentState)=>(
      {
        contacts:currentState.contacts.concat([contact])
      }
    )
  })

}
  
  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }

  removeContact=(contact)=>{
    this.setState((currentState)=>({
      contacts:currentState.contacts.filter((com)=>{
        return com.id !== contact.id
      })

    }))
    ContactsAPI.remove(contact)
  }
  render(){
  return (
    <div>
      
     <Route path='/create' render={({history} ) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )} />
        <Route exact path="/" render={()=>(
         <ListContacts contact={this.state.contacts} 
            onDeleteContact={this.removeContact}
            />
         

      )}/>
      
    <Message/>
    </div>
  );
}
}

export default App;