import { ContactsCounter } from 'components/ContactCounter/ContactCounter'
import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'
import React from 'react'


export const Contact = () => {
  return (
    <div>
    <header>
      <h1>Phonebook</h1>
    </header>
    <section>
      <Form/>
    </section>
    <section>
      <ContactsCounter />
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
    </div>
  )
}
