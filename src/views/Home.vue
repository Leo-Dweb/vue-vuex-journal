<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <button @click="getToDayBook" class="btn btn-primary" >Primary</button>
    <button class="btn btn-success" >Success</button>
    <button class="btn btn-danger" >Danger</button>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    getToDayBook() {
      this.$router.push({ name: 'no-entry' })
    }
  },
}
</script>
