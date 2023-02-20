<template>
  <!-- Heading of the "Administration of contacts" page -->
    <div class="container mt-2">
      <div class="row">
        <div class="col">
          <p class="h3 text-primary fw-bold mt-1" > Administration of contacts
            <!-- Button to redirect to "Add contact" page -->
            <Router-link to="/contacts/add" class="btn btn-primary btn-sm">
              <i class="fa fa-plus-square"></i> New
            </Router-link>
          </p>
          <p> Use the New button to create a new contact, or the buttons in each contact CARD to view, edit or delete the contacts.</p>
        </div>
      </div>
    </div>
    <!-- CARD of contact, is going to repeat as long as the number of contacts in the Database -->
    <div class="container mt-3" v-if="contacts.length>0">
      <div class="row">
        <div class="col-md-6" v-for="contact of contacts" :key="contact">
          <div class="card my-2 list-group-item-primary shadow-lg" >
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <img :src="contact.photo" alt="" class="contact-img">
                </div>
                <div class="col-sm-7">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Name:<span class="fw-bold">{{contact.name}}</span>
                    </li>
                    <li class="list-group-item">
                      Email:<span class="fw-bold">{{contact.email}}</span>
                    </li>
                    <li class="list-group-item">
                      Mobile:<span class="fw-bold">{{contact.mobile}}</span>
                    </li>
                  </ul>
                </div>
                <!-- Buttons to View, Edit and Delete  the current contact-->
                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                  <RouterLink :to="`/contacts/view/${contact.id}`" class="btn btn-warning my-1">
                    <i class="fa fa-eye"></i>
                  </RouterLink>
                  <RouterLink :to="`/contacts/edit/${contact.id}`" class="btn btn-success my-1">
                    <i class="fa fa-pen"></i>
                  </RouterLink>
                  <button class="btn btn-danger my-1" @click="clickDeleteContact(contact.id)">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// Import of the CLASS "ContactService" that contains all the methods to deal with de Database
import { ContactService } from '@/services/ContactService'

  export default {
    name: "AdminContactView",
    data: function() {
      return {
        contacts: [],
        errorMessage: null
      }
    },
    // Event "created" is used for fetching data from backend
    created: async function() {
      try {
        let response = await ContactService.getAllContacts() // method to get all contacts of the CLASS "ContactService"
        this.contacts = response.data
      }
      catch(error) {
        this.errorMessage = error
      }
    },
    methods: {
      /* Method clickDeleteContact() is used to delete the currect contact, calling a method of the CLASS 
      ContactService */
      clickDeleteContact: async function(contactId) {
        try {
          let response = await ContactService.deleteContact(contactId)
          if(response){
            let response = await ContactService.getAllContacts() // show new data after deleting
            this.contacts = response.data
          }
        } catch (error) {
          this.errorMessage = error
        }
      }
    }
  }
</script>

<!-- style of this page -->
<style scoped>
.contact-img{
  width: 150px;
  border-radius: 50%;
}
</style>