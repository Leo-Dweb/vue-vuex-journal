<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry-view', params: {id: 10}})"
  >
    <!-- Title -->
    <div class="entre-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Diciembre</span>
      <span class="mx-2 fw-light">2021, Domingo</span>
    </div>
    <div class="entry-descriptions">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, unde!
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2fb995;
  transition: 0.2s all ease-in;

    &:hover {
      background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
    }
    .entry-descriptions{
      font-size: 14px;
    }
}

</style>