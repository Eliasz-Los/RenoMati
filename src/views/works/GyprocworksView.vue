<script setup lang="ts">

import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
import Carousel from "primevue/carousel";
import Card from "primevue/card";
const topCarousel = Object.values(
  import.meta.glob('@/assets/Gyprocworks/TopCarousel/*',{
    eager: true,
    import: 'default'
  })
)

const bottomCarousel = Object.values(
  import.meta.glob('@/assets/Gyprocworks/BottomCarousel/*',{
    eager: true,
    import: 'default'
  })
)

</script>

<template>
  <div class="container m-2">
    <AnimatedSection animation="slide-down" :delay="0.15" >
      <h2 class="text-center reno-title">Gyproc- & Bezettingswerken </h2>
    </AnimatedSection>
<!--Top Row-->
    <section class="grid align-items-center mb-6">
      <div class="col-12 md:col-6 ">
        <AnimatedSection animation="slide-left" >
          <Card class="p-3 text-center rm-card">
            <template #content>
              Wij zijn gespecialiseerd in gyprocwerken en bezettingswerken voor zowel nieuwbouw als renovatie.
              Wij plaatsen gyprocwanden en plafonds en zorgen voor strak en glad pleisterwerk.
              Met oog voor detail en kwaliteit leveren wij een nette, duurzame afwerking die volledig klaar is voor schilder- of verdere afwerkingswerken.
            </template>
          </Card>
        </AnimatedSection>
      </div>
      <div class="col-12 md:col-6">
        <AnimatedSection animation="slide-right" :delay="0.25">
          <Carousel :value="topCarousel"
                    :num-visible="1"
                    :num-scroll="1"
                    circular
                    :autoplayInterval="3000">
            <template #item="slotProps">
              <img :src="slotProps.data" class="height-img"  alt="carousel"/>
            </template>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
<!--Bottom Row-->

    <section class="grid align-items-center mb-6">
      <div class="col-12 md:col-6 ">
        <AnimatedSection animation="slide-left" >
          <Card class="p-3 text-center rm-card">
            <template #content>
              Het professioneel plamuren van wanden en plafonds is een belangrijke stap voor een perfect eindresultaat. Door een zorgvuldige en gladde afwerking worden alle oppervlakken volledig egaal gemaakt en klaar voor schilder- of behangwerken. Zo krijgt u een strakke uitstraling zonder zichtbare naden, scheurtjes of oneffenheden.
            </template>
          </Card>
        </AnimatedSection>
      </div>
      <div class="col-12 md:col-6">
        <AnimatedSection animation="slide-right" :delay="0.25">
          <Carousel :value="bottomCarousel"
                    :num-visible="1"
                    :num-scroll="1"
                    circular
                    :autoplayInterval="3000">
            <template #item="slotProps">
              <img :src="slotProps.data" class="height-img"  alt="carousel"/>
            </template>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>

  </div>
</template>

<style scoped>

</style>
