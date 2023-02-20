<template>
    <!-- Heading of the "Add contact" page -->
    <div class="container">
      <div class="row">
        <div class="col">
          <p class="h3 text-primary fw-bold">Add contact</p>
          <p>Dear user you need to fill in all the fields</p>
        </div>
      </div>
    </div>
    <!-- The 4 Inputs to add a new contact (name, email, mobile, photo) -->
    <div class="container mt-3">
      <div class="row">
        <div class="col md-4">
          <form @submit.prevent=" submitCreate()">
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
                <input required="true" v-model="contact.photo" type="text" class="form-control" placeholder="Photo URL">  
              </div>
              <div class="mb-2">
                <input type="submit" class="btn btn-primary" value="Create">
              </div>
          </form>  
        </div>
        <div class="col-md-4">
            <img :src="contact.photo" alt="" class="contact-img">
        </div>
      </div>    
    </div>
</template>

<script>
// Import of the CLASS "ContactService" that contains all the methods to deal with de Database
import { ContactService } from '@/services/ContactService';

  export default {
    name: "AddContactView",
    data: function() {
        return {
            contact: {
                name: '',
                email: '',
                mobile: '',
                photo: ''
                
            }
        }
    },
    methods: {
        /* The method submitCreate() calls the CLASS "ContactService" that has a method 
         to create a contact. */
        submitCreate: async function() {
            try {
                let response = await ContactService.createContact(this.contact)
                if(response){
                    return this.$router.push('/')
                }
                else{
                    return this.$router.push('/contacts/add')
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