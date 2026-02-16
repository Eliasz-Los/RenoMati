<script setup lang="ts">

import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
import Carousel from "primevue/carousel";
import Card from "primevue/card";

const windowsAndDoorPics = Object.values(
  import.meta.glob('@/assets/WindowsAndDoors/carousel/*',{
    eager: true,
    import: 'default'
  })
)

</script>

<template>
  <div class="container m-2">
    <AnimatedSection animation="slide-down" :delay="0.15" >
      <h2 class="text-center reno-title">Ramen & Deuren </h2>
    </AnimatedSection>


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
          <Carousel :value="windowsAndDoorPics"
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
