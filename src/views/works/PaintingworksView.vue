<script setup lang="ts">

import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
import Carousel from "primevue/carousel";
import Card from "primevue/card";
import AnimatedText from "@/components/shared/ui/AnimatedText.vue";

const paintingsPics = Object.values(
  import.meta.glob('@/assets/Paintingsworks/carousel/*',{
    eager: true,
    import: 'default'
  })
)

</script>

<template>
  <div class="container m-2">

    <section class="hero">
      <img rel="preload" src="@/assets/main_paintingworks_W1920.webp"
      alt="painting background from R Mo"
      class="hero__img" fetchpriority="high" decoding="async"/>
      <div class="hero__overlay">
        <AnimatedSection animation="fade-in" :delay="0.2">
          <h2 class="text-center hero__title">
            <AnimatedText text="Schilderwerken" :base-delay="0.2" :stagger="0.1"/>
          </h2>
        </AnimatedSection>
      </div>
    </section>

    <section class="grid align-items-center justify-content-center mb-6 mt-2">
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
