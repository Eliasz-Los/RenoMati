<script setup lang="ts">
import Card from "primevue/card";
import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
import pic1 from "@/assets/Floorinstallation/pic1.jpg";

</script>

<template>
<div class="container m-2">
  <AnimatedSection animation="slide-down">
    <h2 class="text-center">Over RenoMati</h2>
  </AnimatedSection>

<!-- INFO -->
  <div class="grid ">
    <div class="col-12 md:col-8">

      <AnimatedSection animation="slide-left" :delay=0.1>
        <Card class="m-2 rm-card">
          <template #content>
            <p>
              We zijn een renovatiebedrijf die kleine als grote renovatiewerkzaamheden en afwerkingswerkzaamheden omvat.
            </p>
            <p>
              Neem contact op om gratis offerte te krijgen.
            </p>
            <p>
              Ik benader elke project individueel met volledige aandacht aan details.
            </p>
          </template>
        </Card>
      </AnimatedSection>

      <!--Werkzaamheden-->
      <AnimatedSection animation="slide-right" :delay=0.4>
        <Card class="m-2 rm-card">
          <template #content>
            <h4>We voeren werkzaamheden uit zoals:</h4>
            <ul>
              <AnimatedSection animation="slide-down" :delay=0.65>
                <li>Plaatsen van parket, laminaat, tegels.</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" :delay=0.65>
                <li>Gyprocwerken en Bezettingswerken</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" :delay=0.65>
                <li>Schilderwerken</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" :delay=0.65>
                <li>Ramen en deuren plaatsen</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" :delay=0.65>
                <li>Binnen afbrak werken</li>
              </AnimatedSection>

            </ul>
          </template>
        </Card>
      </AnimatedSection>

      <!-- Voordelen  -->
      <AnimatedSection animation="slide-left" :delay=0.8>
        <Card class="m-2 rm-card">
          <template #content>
            <h4>Voordelen van RenoMati te verkiezen?</h4>
            <ul>
              <AnimatedSection animation="slide-up" :delay=1.2>
                <li>Goede prijzen</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" :delay=1.2>
                <li>Individuele benadering van elke klant</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" :delay=1.2>
                <li>Professionele en klantvriendelijke service</li>
              </AnimatedSection>
            </ul>
          </template>
        </Card>
      </AnimatedSection>

    </div>
    <div class="col-12 md:col-4">
      <AnimatedSection animation="slide-right" :delay="0.15">
            <img src="@/assets/themanhimself.jpeg" alt="Badkamer Vloer Tegels"
                 class="height-img"/>
      </AnimatedSection>
    </div>
  </div>


</div>



</template>

<style scoped>

</style>
