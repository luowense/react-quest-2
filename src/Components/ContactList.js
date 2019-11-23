import React from 'react';
import Contact from './Contact';

const contacts = [
    {
        nameavatar: 'https://randomuser.me/api/portraits/thumb/men/26.jpg', 
        name: 'Herman Owens', 
        online: false,
    }, 
    {
        nameavatar: 'https://randomuser.me/api/portraits/thumb/women/5.jpg', 
        name: 'Luz Diaz', 
        online: true,
    }, 
    {
        nameavatar: 'https://randomuser.me/api/portraits/thumb/women/72.jpg', 
        name: 'Saana Jutila', 
        online: false,
    },
    {
        nameavatar: 'https://randomuser.me/api/portraits/thumb/men/21.jpg', 
        name: 'Eva Simmons', 
        online: false,
    },
    {
        nameavatar: 'https://randomuser.me/api/portraits/thumb/men/86.jpg', 
        name: 'Arlo Wilsons', 
        online: true,
    }
];

const ContactList = () => (
    <div>
      {contacts.map(item => (
    <Contact name={item.name} nameavatar={item.nameavatar} online={item.online} />
      ))}
    </div>
  );

export default ContactList;