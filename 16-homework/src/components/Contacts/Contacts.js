import React, {Component} from 'react';

import contactsData from '../../services/contacts-data';
import Contact from '../Contact/Contact';

class Contacts extends Component {
  state = {
    contacts: contactsData,
    search: '',
  }

  handleSearchChange = (e) => {
    let inputValue = e.target.value;

    if (inputValue.trim() !== '') {
      this.setState({
        search: inputValue,
      });
    } else {
      this.setState({
        search: '',
      });
    }
  }

  getContacts = () => {
    if (this.state.search !== '') {
      return this.state.contacts.filter(contact => {
          let contactName = `${contact.firstName} ${contact.lastName}`;
          return contactName.toLowerCase().includes(this.state.search);
        })
        .map(contactObj => <Contact {...contactObj} />);
    } else {
      return this.state.contacts.map(contactObj => <Contact {...contactObj} />);
    }
  }

  render() {
    return (
      <div className="contact-list">
        <input
          placeholder="Search contacts"
          type="text"
          value={this.state.search}
          className="searchInput"
          onChange={this.handleSearchChange}
        />

        <table>
          <tbody>
          {this.getContacts()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
