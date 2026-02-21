<script setup lang="ts">

import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
import Carousel from "primevue/carousel";
import Card from "primevue/card";
import FullscreenGallery from "@/components/shared/ui/FullscreenGallery.vue";
import {ref} from "vue";
import AnimatedText from "@/components/shared/ui/AnimatedText.vue";

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
    <section class="hero">
      <img rel="preload" src="@/assets/main_windows_W1920.webp"
           alt ='windows with mountain background from Martin Woortman'
           class="hero__img" fetchpriority="high" decoding="async"/>
      <div class="hero__overlay">
        <AnimatedSection animation="fade-in" :delay="0.2">
          <h2 class="text-center hero__title">
            <AnimatedText text="Ramen & Deuren" :base-delay="0.2" :stagger="0.1"/>
          </h2>
        </AnimatedSection>
      </div>
    </section>


    <section class="grid align-items-center justify-content-center mb-6 mt-2">
      <div class="col-12 md:col-6 lg:col-6">
        <AnimatedSection animation="slide-left" :delay="0.5">
          <Card class="p-3 text-center rm-card">
            <template #title>
              Bent u op zoek naar een betrouwbare vakman voor het plaatsen van ramen en deuren? Dan bent u bij ons aan het juiste adres.
            </template>
            <template #content>
                <p>Wij verzorgen de professionele montage van ramen en deuren,.
                  zowel binnen als buiten. Met oog voor elk detail zorgen wij voor een perfecte plaatsing,
                  een uitstekende afdichting en een strakke, esthetische afwerking </p>
                <p>Dankzij onze jarenlange ervaring en het gebruik van hoogwaardige materialen bent u verzekerd van kwaliteit die jarenlang meegaat.
                  Geen problemen met slecht sluitende deuren, tocht, lekken of verlies van isolatie — wij leveren werk waarop u kunt vertrouwen. </p>
              <p>Kies voor zekerheid, duurzaamheid en vakmanschap. </p>
            </template>
          </Card>
        </AnimatedSection>
      </div>
      <div class="col-12 md:col-6 lg:col-6">
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
