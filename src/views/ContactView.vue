<template>
    <!-- Heading of the "Contact view" page -->
    <div class="container">
        <div class="row">
          <div class="col">
            <p class="h3 text-primary fw-bold">View contact</p>
            <p>Dear user it's the page to see each contact with more detail.</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-center">
            <!-- Printing the contact with all its atributes photo, name, email, mobile -->
          <div class="col-md-4">
            <img :src="contact.photo" alt="" class="contact-img">
          </div>
          <div class="col-md-6">
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
        </div>
        <!-- Button to go back to HOME or "Administration of contacts" page -->
        <div class="row mt-3">
            <div class="col">
                <RouterLink to="/" class="btn btn-primary">Back</RouterLink>
            </div>
        </div>
      </div>
</template>

<!-- Functionality of this component -->
<script>
import { ContactService } from '@/services/ContactService';

  export default {
    name: "ContactView",
    data: function() {
        return {
            contactId: this.$route.params.contactId,
            contact: {},
            errorMessage: null
        }
    },
    // Event "created" is used for fetching data from backend
    created: async function() {
        try {
            let response = await ContactService.getContact(this.contactId)
            this.contact = response.data
        } catch (error) {
            this.errorMessage = error
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