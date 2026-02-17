<script setup lang="ts">

import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
import Carousel from "primevue/carousel";
import Card from "primevue/card";
import FullscreenGallery from "@/components/shared/ui/FullscreenGallery.vue";
import {ref} from "vue";

const windowsAndDoorPics = Object.values(
  import.meta.glob('@/assets/WindowsAndDoors/carousel/*',{
    eager: true,
    import: 'default'
  })
) as string[];

const galleryVisible = ref(false);
const galleryIndex = ref(0);
</script>

<template>
  <div class="container m-2">
    <AnimatedSection animation="slide-down" :delay="0.15" >
      <h2 class="text-center reno-title">Ramen & Deuren </h2>
    </AnimatedSection>


    <section class="grid align-items-center justify-content-center mb-6">
      <div class="col-12 md:col-6 lg:col-8">
        <AnimatedSection animation="slide-left" :delay="0.5">
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
      <div class="col-12 md:col-6 lg:col-8">
        <AnimatedSection animation="slide-right" :delay="0.5">
          <Carousel :value="windowsAndDoorPics"
                    :num-visible="1"
                    :num-scroll="1"
                    circular
                    :autoplayInterval="3000">
            <template #item="slotProps">
              <img :src="slotProps.data" class="height-img"  alt="carousel"
              @click="galleryIndex = windowsAndDoorPics.indexOf(slotProps.data);
                  galleryVisible = true"/>
            </template>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>

    <FullscreenGallery :images="windowsAndDoorPics"
                       :startIndex="galleryIndex"
                       :visible="galleryVisible"
                       @close="galleryVisible = false" />

  </div>
</template>

<style scoped>

</style>
