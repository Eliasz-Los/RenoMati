<script setup lang="ts">

import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
import Carousel from "primevue/carousel";
import Card from "primevue/card";

const paintingsPics = Object.values(
  import.meta.glob('@/assets/Paintingsworks/carousel/*',{
    eager: true,
    import: 'default'
  })
)

</script>

<template>
  <div class="container m-2">
    <AnimatedSection animation="slide-down" :delay="0.15" >
      <h2 class="text-center reno-title">Schilderwerken </h2>
    </AnimatedSection>

    <section class="grid align-items-center justify-content-center mb-6">
      <div class="col-12 md:col-12 lg:col-8">
        <AnimatedSection animation="slide-left" >
          <Card class="p-3 text-center rm-card">
            <template #header>
              <Carousel :value="paintingsPics"
                        :num-visible="1"
                        :num-scroll="1"
                        circular
                        :autoplayInterval="3000">
                <template #item="slotProps">
                  <img :src="slotProps.data" class="card-img"  alt="carousel"/>
                </template>
              </Carousel>
            </template>

            <template #title>
              Professioneel schilderwerken van interieurs – esthetiek en precisie.
            </template>

            <template #content>
              We houden ons bezig met professioneel schilderwerken van de interieurs van appartementen,
              huizen, kantoren en commerciële ruimtes.
              We werken met aandacht voor elk detail – schoon,
              nauwkeurig en op tijd.
              Dankzij jarenlange ervaring kunt u tellen op perfecte einde resultaat dat elke ruimte transformeert.
            </template>

          </Card>
        </AnimatedSection>
      </div>
    </section>

  </div>
</template>

<style scoped>

</style>
