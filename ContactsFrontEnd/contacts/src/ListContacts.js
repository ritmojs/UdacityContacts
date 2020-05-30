import React,{Component} from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

class ListContacts extends Component{
    static propTypes={
        contact:PropTypes.array.isRequired,
        onDeleteContact:PropTypes.func.isRequired,
    }
    state = {
        query: ""
      }
    UpdateQuery = (newQuery) => {
        this.setState(() => ({
          query: newQuery.trim()
        }))
      }

      clearQuery=()=>{
          this.UpdateQuery("")
      }
           
       
    
    render(){

        const { query } = this.state
    const { contact, onDeleteContact} = this.props

    const showingContacts = query === ''
      ? contact
      : contact.filter((c) => (
          c.name.toLowerCase().includes(query.toLowerCase())
        ))


        return(
            <div className='list-contacts'>
       
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={query}
            onChange={(event) => this.UpdateQuery(event.target.value)}
          />
          <Link
          to="/create"
          
          className="add-contact"
          >
Create
          </Link>
          
        </div>
             
                 {showingContacts.length !== contact.length &&
                 <div className="showing-contacts">
                     <span>Showing {showingContacts.length} of {contact.length} contacts</span>
                     <button className="showing-contacts button" onClick={this.clearQuery}>show all</button>
                     </div> }
                       

               
            <ol className="contact-list">
                {showingContacts.map((contact)=>(
                    <li key={contact.id} className="contact-list-item">
                        <div
                        className="contact-avatar"
                        style={
                            {
                                backgroundImage:`url(${contact.avatarURL})`
                            
                            }
                        }></div>
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                                </div>

                             <button onClick={()=>onDeleteContact(contact)}
                              className="contact-remove" >Remove
                              </button>

                        
                       
                    </li>
                ))}
             
            </ol>
            </div>
        )
    }
}

export default ListContacts;