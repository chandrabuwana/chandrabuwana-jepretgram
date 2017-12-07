<template>
  <div class="list-group-item list-group-item-action flex-column align-items-start active">
  <form class="" @submit.prevent="postDat(formPost)">
    <div class="form-group">
      <label for="InputEmail1">Description</label>
      <input v-model="formPost.description" type="text" class="form-control" placeholder="Description">
    </div>
    <div class="form-group">
      <label for="exampleTextarea">Photo</label>
      <textarea v-model="formPost.photo" class="form-control" id="exampleTextarea" rows="3" placeholder="Photo"></textarea>
    </div>  
    <button  type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return{
      formPost:{
        description: '',
        photo:'',
      }
    }
  },
methods:{
  ...mapActions([
    'postDat'
  ])
}
}
</script>

<style>

</style>
