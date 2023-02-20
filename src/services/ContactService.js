// Library to interact between the Frontend and the Database "db.json"
import axios from "axios";

/* The CLASS that contains all the methods to do the CRUD process
with the Database */
export class ContactService {
    /*This main URL is used as home, this localhost is created by the "db.json" as a local database. Revise the folder
    "server" and the package.json file where is created this database with this port 9000*/
    static serverURL = 'http://localhost:9000'

    static getAllContacts() {
        let dataURL = `${this.serverURL}/contacts`
        return axios.get(dataURL)
    }

    static getContact(contactId) {
        let dataURL = `${this.serverURL}/contacts/${contactId}`
        return axios.get(dataURL)
    }

    static createContact(contact) {
        let dataURL = `${this.serverURL}/contacts/`
        return axios.post(dataURL, contact)
    }

    static updateContact(contact, contactId) {
        let dataURL = `${this.serverURL}/contacts/${contactId}`
        return axios.put(dataURL, contact)
    }

    static deleteContact(contactId) {
        let dataURL = `${this.serverURL}/contacts/${contactId}`
        return axios.delete(dataURL)
    }
}