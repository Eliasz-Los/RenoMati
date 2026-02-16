<script setup lang="ts">
import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
const images = Object.values(
  import.meta.glob('@/assets/Floorinstallation/carousel/*',{
    eager: true,
    import: 'default'
  })
)
import pic1 from '@/assets/Floorinstallation/pic1.jpg'
import pic2 from '@/assets/Floorinstallation/pic2.jpg'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'

console.log(images)
</script>

<template>
<div class="container m-2">
  <AnimatedSection animation="slide-down" :delay="0.15" >
    <h2 class="text-center reno-title">Tegels, Parket & Laminaat</h2>
  </AnimatedSection>

<!-- First row  -->
  <section class="grid align-items-center mb-6">
    <div class="col-12 md:col-4">
      <AnimatedSection animation="slide-left" :delay="0.15">
        <Card class="p-3 rm-card">
          <template #content>
            <img :src="pic1" alt="Badkamer Vloer Tegels"
                 class="floor-img"/>
          </template>
        </Card>
      </AnimatedSection>
    </div>

    <div class="col-12 md:col-4 text-center ">
      <AnimatedSection animation="slide-up" :delay="0.25">
        <Card class="p-3 rm-card">
          <template #content>
            Wij plaatsen vloertegels en wandtegels in verschillende formaten en stijlen. Of het nu gaat om een badkamer, keuken of leefruimte, wij zorgen voor een nauwkeurige plaatsing en een strak resultaat.
          </template>
        </Card>
      </AnimatedSection>
    </div>
    <div class="col-12 md:col-4">
      <AnimatedSection animation="slide-right" :delay="0.4">
        <Card class="p-3 rm-card">
          <template #content>
            <img :src="pic2" alt="Badkamer Muur Tegels"
                 class="floor-img"/>
          </template>
        </Card>
      </AnimatedSection>
    </div>
  </section>
<!--Second row-->
  <section class="grid align-items-center mb-6">
    <div class="col-12 md:col-6 ">
      <AnimatedSection animation="slide-left" >
        <Card class="p-3 text-center rm-card">
          <template #content>
            Parket en laminaat geven uw woning een warme en stijlvolle uitstraling. Wij plaatsen beide vloersoorten nauwkeurig, zodat u een duurzame, nette en egale afwerking krijgt, klaar voor jarenlang woonplezier.
          </template>
        </Card>
      </AnimatedSection>
    </div>
    <div class="col-12 md:col-6">
      <AnimatedSection animation="slide-right" :delay="0.25">
        <Carousel :value="images"
                  :num-visible="1"
                  :num-scroll="1"
                  circular
                  :autoplayInterval="3000">
          <template #item="slotProps">
            <img :src="slotProps.data" class="floor-img"  alt="carousel"/>
          </template>
        </Carousel>
      </AnimatedSection>
    </div>
  </section>

</div>

</template>

<style scoped>

</style>
