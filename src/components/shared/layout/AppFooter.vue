<script setup lang="ts">
import {Button} from "primevue";
import {useRouter} from "vue-router";

const router = useRouter()

function go(path: string){
  router.push(path)
}
</script>

<template>
<section class="h-100 flex flex-col app-footer justify-content-center align-items-center">
  <div class="col-4 flex ">
    <img src='/black_icon_transparent_background.png'
         alt="black_renomati_logo"
         height="80"/>
  </div>

  <div class="col-4 flex flex-col justify-content-center align-items-center">
    <Button label="Contacteer ons"
            @click="go('/contact')"
    icon="pi pi-send" iconPos="right" />
  </div>

  <div class="col-4 flex ">
      <p> We werken in Antwerpen & Oost-Vlaanderen, andere locatie? geef ons een seintje en contacteer ons voor verdere informatie</p>
  </div>
</section>
</template>

<style scoped>

.app-footer{
  background-color: #1fa6ea;
}

</style>
