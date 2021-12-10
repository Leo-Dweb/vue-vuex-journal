<template>
  <div class="entry-title d-flex justify-content-between"> 
    <div>
      <span class="text-success fs-3 fw-bold" >15</span>
      <span class="mx-1 fs-3" >Diciembre</span>
      <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
    </div>

    <div>
      <button class="btn btn-danger btn-sm mx-2 mt-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-danger btn-sm mx-2 mt-2">
        Subir imagen
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedio hoy?">

    </textarea>

  </div>

  <Fab 
    icon="fa-save" 
    color="btn-danger"/>

  <img
      class="img-thumbnail"
      src="https://i.ytimg.com/vi/NfJHZE9Yg18/maxresdefault.jpg" 
      alt="Img">
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {
    Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
  },
}
</script>

<style lang="scss" scoped>
  textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
      outline: none;
    }
  }

  img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px rgba($color: #000000, $alpha: 0.2) ;
  }



</style>