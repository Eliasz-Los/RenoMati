<script setup lang="ts">
import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
const images = Object.values(
  import.meta.glob('@/assets/Floorinstallation/carousel/*',{
    eager: true,
    import: 'default'
  })
) as string[];
import pic1 from '@/assets/Floorinstallation/pic1.jpg'
import pic2 from '@/assets/Floorinstallation/pic2.jpg'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'
import {ref} from "vue";
import ImageViewer from "@/components/shared/ui/ImageViewer.vue";
import FullscreenGallery from "@/components/shared/ui/FullscreenGallery.vue";

const viewerImage = ref<string|null>(null);
const galleryVisible = ref(false);
const galleryIndex = ref(0);

</script>

<template>
<div class="container m-2">
  <AnimatedSection animation="slide-down" :delay="0.15" >
    <h2 class="text-center reno-title">Tegels, Parket & Laminaat</h2>
  </AnimatedSection>

<!-- First row  -->
  <section class="grid align-items-center justify-content-center mb-6">
    <div class="col-12 md:col-4 lg:col-3">
      <AnimatedSection animation="slide-left" :delay="0.15">
            <img :src="pic1" alt="Badkamer Vloer Tegels"
                 class="floor-img"
                 @click="viewerImage = pic1"/>
      </AnimatedSection>
    </div>

    <div class="col-12 md:col-4 lg:col-3 text-center ">
      <AnimatedSection animation="slide-up" :delay="0.25">
        <Card class="p-3 rm-card">
          <template #title>
            Vloertegels & wandtegels
          </template>
          <template #content>
            Wij plaatsen vloertegels en wandtegels in verschillende formaten en stijlen. Of het nu gaat om een badkamer, keuken of leefruimte, wij zorgen voor een nauwkeurige plaatsing en een strak resultaat.
          </template>
        </Card>
      </AnimatedSection>
    </div>
    <div class="col-12 md:col-4 lg:col-3">
      <AnimatedSection animation="slide-right" :delay="0.4">
            <img :src="pic2" alt="Badkamer Muur Tegels"
                 class="floor-img"
                 @click="viewerImage = pic2"/>

      </AnimatedSection>
    </div>
  </section>

<!--Second row-->
  <section class="grid align-items-center mb-6">
    <div class="col-12 md:col-6">
      <AnimatedSection animation="slide-right" :delay="0.8">
        <Carousel :value="images"
                  :num-visible="1"
                  :num-scroll="1"
                  circular
                  :autoplayInterval="3000">
          <template #item="slotProps">
            <img :src="slotProps.data" class="height-img"  alt="carousel"
                 @click="galleryIndex = images.indexOf(slotProps.data);
              galleryVisible = true" />
          </template>
        </Carousel>
      </AnimatedSection>
    </div>
    <div class="col-12 md:col-6 ">
      <AnimatedSection animation="slide-left" :delay="1.2">
        <Card class="p-3 text-center rm-card">
          <template #title>
            Parket & laminaat
          </template>
          <template #content>
            Parket en laminaat geven uw woning een warme en stijlvolle uitstraling. Wij plaatsen beide vloersoorten nauwkeurig, zodat u een duurzame, nette en egale afwerking krijgt, klaar voor jarenlang woonplezier.
          </template>
        </Card>
      </AnimatedSection>
    </div>

  </section>

  <ImageViewer :src="viewerImage" @close="viewerImage = null"></ImageViewer>

  <FullscreenGallery :images="images"
                     :startIndex="galleryIndex"
                     :visible="galleryVisible"
                     @close="galleryVisible = false"
  />
</div>

</template>

<style scoped>

</style>
