<script setup lang="ts">
import Card from "primevue/card";
import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";
import AnimatedText from "@/components/shared/ui/AnimatedText.vue";

</script>
<template>
<div class="container m-2">
  <!-- Title   -->
  <section class="hero">
    <img src="@/assets/About/title_renovation.jpg" alt="renovation background" class="hero__img"/>
    <div class="hero__overlay">
      <AnimatedSection animation="fade-in" :delay="0.2">
        <h2 class="text-center hero__title">
          <AnimatedText text="Over RenoMati" :base-delay="0.2" :stagger="0.1"/>
        </h2>
      </AnimatedSection>
    </div>
  </section>


<!-- INFO -->
  <section class="grid mt-2">
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
              <AnimatedSection animation="slide-down" :delay=0.95>
                <li>Plaatsen van parket, laminaat, tegels.</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" :delay=0.95>
                <li>Gyprocwerken en Bezettingswerken</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" :delay=0.95>
                <li>Schilderwerken</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-left" :delay=0.95>
                <li>Ramen en deuren plaatsen</li>
              </AnimatedSection>

              <AnimatedSection animation="slide-right" :delay=0.95>
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
            <AnimatedSection animation="slide-up" :delay=1.8>
              <li>Goede prijzen</li>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" :delay=1.8>
              <li>Individuele benadering van elke klant</li>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" :delay=1.8>
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
