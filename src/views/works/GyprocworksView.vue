<script setup lang="ts">

import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
import Carousel from "primevue/carousel";
import Card from "primevue/card";
import FullscreenGallery from "@/components/shared/ui/FullscreenGallery.vue";
import {ref} from "vue";

const topCarousel = Object.values(
  import.meta.glob('@/assets/Gyprocworks/TopCarousel/*',{
    eager: true,
    import: 'default'
  })
) as string[];

const bottomCarousel = Object.values(
  import.meta.glob('@/assets/Gyprocworks/BottomCarousel/*',{
    eager: true,
    import: 'default'
  })
)as string[]

const galleryVisible = ref(false);
const galleryIndex = ref(0);
const allImages = [...topCarousel, ...bottomCarousel]
</script>

<template>
  <div class="container m-2">
    <AnimatedSection animation="slide-down" :delay="0.2" >
      <h2 class="text-center reno-title">Gyproc- & Bezettingswerken </h2>
    </AnimatedSection>
<!--Top Row-->
    <section class="grid align-items-center justify-content-center mb-6">
      <div class="col-12 md:col-6">
        <AnimatedSection animation="slide-left" >
          <Card class="p-3 text-center rm-card">
            <template #title>
              Wij zijn gespecialiseerd in gyprocwerken en bezettingswerken voor zowel nieuwbouw als renovatie.
            </template>
            <template #content>
              Wij plaatsen gyprocwanden en plafonds en zorgen voor strak en glad pleisterwerk.
              Met oog voor detail en kwaliteit leveren wij een nette, duurzame afwerking die volledig klaar is voor schilder- of verdere afwerkingswerken.
            </template>
          </Card>
        </AnimatedSection>
      </div>
      <div class="col-12 md:col-6">
        <AnimatedSection animation="slide-right" :delay="0.4">
          <Carousel :value="topCarousel"
                    :num-visible="1"
                    :num-scroll="1"
                    circular
                    :autoplayInterval="3000">
            <template #item="slotProps">
              <img :src="slotProps.data" class="height-img"  alt="carousel"
              @click="galleryIndex = topCarousel.indexOf(slotProps.data);
              galleryVisible = true" />
            </template>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
<!--Bottom Row-->


    <section class="grid align-items-center justify-content-center mb-6">

      <div class="col-12 md:col-6">
        <AnimatedSection animation="slide-right" :delay="0.8">
          <Carousel :value="bottomCarousel"
                    :num-visible="1"
                    :num-scroll="1"
                    circular
                    :autoplayInterval="3000">
            <template #item="slotProps">
              <img :src="slotProps.data" class="height-img"  alt="carousel"
                   @click="galleryIndex = topCarousel.indexOf(slotProps.data);
              galleryVisible = true"/>
            </template>
          </Carousel>
        </AnimatedSection>
      </div>

      <div class="col-12 md:col-6">
        <AnimatedSection animation="slide-left"  :delay="1.6">
          <Card class="p-3 text-center rm-card">
            <template #title>
              Het professioneel plamuren van wanden en plafonds is een belangrijke stap voor een perfect eindresultaat.
            </template>
            <template #content>
              Door een zorgvuldige en gladde afwerking worden alle oppervlakken volledig egaal gemaakt en klaar voor schilder- of behangwerken. Zo krijgt u een strakke uitstraling zonder zichtbare naden, scheurtjes of oneffenheden.
            </template>
          </Card>
        </AnimatedSection>
      </div>

    </section>

<!-- Image viewer trough a gallery -->
    <FullscreenGallery :images="allImages"
                       :startIndex="galleryIndex"
                       :visible="galleryVisible"
                       @close="galleryVisible = false" />
  </div>
</template>

<style scoped>

</style>
