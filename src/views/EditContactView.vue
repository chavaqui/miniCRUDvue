<template>
    <!-- Heading of the "Edit Contact" page -->
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3 text-primary fw-bold">Edit contact</p>
          <p>Let's edit the contact, dear user you need to fill in all the fields</p>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col md-3">
            <!-- The method "updateSubmit()" uploads all the modified fiels of the current contact (name, email, mobile and photo), and
            you need to fill in all the fields.  -->
          <form @submit.prevent="updateSubmit()">
            <div class="mb-2">
              <input required="true" v-model="contact.name" type="text" class="form-control" placeholder="Name">  
            </div>
            <div class="mb-2">
                <input required="true" v-model="contact.email" type="text" class="form-control" placeholder="Email">  
              </div>
              <div class="mb-2">
                <input required="true" v-model="contact.mobile" type="text" class="form-control" placeholder="Mobile">  
              </div>
              <div class="mb-2">
                <input required="true" v-model="contact.photo" type="text" class="form-control" placeholder="Mobile">  
              </div>
              <div class="mb-2">
                <input type="submit" class="btn btn-primary" value="Update">
              </div>
          </form>  
        </div>
        <div class="col-md-4">
            <img :src="contact.photo" alt="" class="contact-img">
        </div>
      </div>    
    </div>
</template>

<!-- Functionality of the component -->
<script>
import { ContactService } from '@/services/ContactService';

  export default {
    name: "EditContactView",
    data: function() {
        return {
            contactId: this.$route.params.contactId,
            contact: {
                name: '',
                email: '',
                mobile: '',
                photo: ''
            },
            errorMessage: null
        }
    },
     // Event "created" is used for fetching data from backend
    created: async function() {
        try {
            let response = await ContactService.getContact(this.contactId) // whe get the data of the contact passed as parameter
            this.contact = response.data
        } catch (error) {
            this.errorMessage = error
        }
    },
    methods: {
        /* Method to update the information of the contact, it uses the CLASS "ContactService" and its method updateContact() that deals
        with the database. */
        updateSubmit: async function() {
            try {
                let response = await ContactService.updateContact(this.contact, this.contactId)
                if(response){
                    return this.$router.push('/')
                }
                else{
                    return this.$router.push('/contacts/edit/${this.contactId}')
                }
            } catch (error) {
                console.log(error)
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