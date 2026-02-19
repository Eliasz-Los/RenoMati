<script setup lang="ts">
import Card from "primevue/card";
import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";

</script>
<template>
<div class="container m-2">
  <AnimatedSection animation="slide-down">
    <h2 class="text-center">Over RenoMati</h2>
  </AnimatedSection>

<!-- INFO -->
  <section class="grid ">
    <div class="col-12 md:col-4 lg:col-3">
      <AnimatedSection animation="slide-left" :delay="0.2">
        <img src="@/assets/themanhimself.jpeg" alt="the owner"
             class="floor-img"/>
      </AnimatedSection>
    </div>
  <!--   Over renomati -->
    <div class="col-12 md:col-8 lg:col-9">
      <AnimatedSection animation="slide-right" :delay=0.4>
        <Card class="m-2 rm-card">
          <template #title>
            <h3> Renovatie werk op maat op kleine en grote schaal.</h3>
          </template>
          <template #content>
            <p>              We zijn een renovatiebedrijf die kleine als grote renovatiewerkzaamheden en afwerkingswerkzaamheden omvat.
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
    </div>

    <!--Werkzaamheden-->
    <div class="col-12 md:col-6">
      <AnimatedSection animation="slide-right" :delay=0.8>
        <Card class="m-2 rm-card">
          <template #title>
            We voeren werkzaamheden uit zoals:
          </template>
          <template #content>
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
    </div>

    <!-- Voordelen  -->
    <div class="col-12 md:col-6">
      <AnimatedSection animation="slide-left" :delay=1.6>
      <Card class="m-2 rm-card">
        <template #title>
          Voordelen van RenoMati te verkiezen?
        </template>
        <template #content>

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
  </section>


</div>



</template>

<style scoped>

</style>
