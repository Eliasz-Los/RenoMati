<script setup lang="ts">
import Button from "primevue/button";
import {useLink, useRouter} from "vue-router";

const router = useRouter()

function go(path: string){
  router.push(path)
}

const year = new Date().getFullYear()
</script>

<template>
<section class="container app-footer justify-content-center align-items-center">

  <section class="grid">
    <div class="col-12 md:col-4 flex">
      <img src='/black_icon_transparent_background.png'
           alt="black_renomati_logo"
            class="footer-logo"/>
    </div>

    <div class="col-12 md:col-4 flex ">
      <Button label="Contacteer ons"
              @click="go('/contact')"
      icon="pi pi-send" iconPos="right" />
    </div>

    <div class="col-12 md:col-4 flex">
        <p class="footer-text"> Beschikbaar in Antwerpen & Oost-Vlaanderen, andere locatie? Geef ons een seintje en contacteer ons voor verdere informatie</p>
    </div>
  </section>

  <section class="grid ">
    <div class="col-12 md:col-4 flex">
      <p class="footer-text">RenoMati Copyrighted {{ year }}</p>
    </div>
    <div class="col-12 md:col-4 flex">
      <Button label="Read about us" severity="help" @click="go('/over-renomati')"
      icon="pi pi-users" iconPos="right" />
    </div>
    <div class="col-12 md:col-4 flex">
        <Button label='Privacy beleid'
                severity="danger"
                @click="go('/privacy')"
        icon="pi pi-shield" iconPos="right" />
    </div>
  </section>

</section>
</template>

<style scoped>

.app-footer{
  background-color: #1fa6ea;
}
/* PrimeFlex grids sometimes overflow because of negative margins */
.app-footer :deep(.grid) {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.footer-logo{
  max-height: 80px;
}
/*text should wrap in footer and not push width*/
.footer-text {
  margin: 0;
  max-width: 100%;
  overflow-wrap: anywhere;
}

</style>
