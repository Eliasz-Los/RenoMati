<script setup lang="ts">
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import Button from "primevue/button";
import homedeallogo from '@/assets/Reviews/homedeal_logo_color.webp'
import ringtwicelogo from '@/assets/Reviews/ringtwice_logo.jpg'
import {computed, ref} from "vue";
import type {Review} from "@/models/reviews/Review.ts";
import {PlatformType} from "@/models/reviews/PlatformType.ts";

const reviews = ref<Review[]>([
  {
    platform : PlatformType.Homedeal,
    rating : 10.0,
    title : "Herstelling pleisterwerk",
    author : "Koen",
    dataOfReview : new Date("2025-09-12"),
    reviewContent : {
      content : "RenoMati heeft voor mij een herstelling aan pleisterwerk uitgevoerd. De herstelling is goed uitgevoerd en er is proper gewerkt - belangrijk in een ruimte die bewoond is. Bovendien verliep de communicatie met Mateusz vlot en is het werk uitgevoerd aan een scherpe prijs.",
        quality : 10,
        service : 10,
        priceQualityRatio : 10,
        sourceUrl: "https://www.homedeal.be/nl/pro/OdP3G/renomati/#reviews"
    }
  },
  {
    platform : PlatformType.Homedeal,
    rating : 10.0,
    title : "De ramen waren snel en goed gemaakt.",
    author : "Iwona Los",
    dataOfReview : new Date("2025-08-02"),
    reviewContent : {
      content : "Solide werk. Ik raad RenoMati aan voor iedereen die op zoek is naar een betrouwbare vakman voor het plaatsen van ramen en deuren. De communicatie verliep vlot en de prijs-kwaliteitverhouding was uitstekend.",
        quality : 10,
        service : 10,
        priceQualityRatio : 10,
        sourceUrl: "https://www.homedeal.be/nl/pro/OdP3G/renomati/#reviews"
    }
  },
  {
    platform : PlatformType.RingTwice,
    rating : 10.0,
    title : "Schilderen traphal.",
    author : "Eva D.",
    dataOfReview : new Date("2021-11-13"),
    reviewContent : {
      content : "Stipte persoon, mooi werk",
      sourceUrl: "https://ringtwice.be/nl/service_providers/165807?sem_category=1&similar_sps=68261,66420,305066,261996,477443"
    }
  },
  {
    platform : PlatformType.RingTwice,
    rating : 10.0,
    title : "Schilderen schrijnwerk appartement.",
    author : "Sophie Y.",
    dataOfReview : new Date("2022-10-23"),
    reviewContent : {
      content : "Mateusz heeft ons heel goed geholpen. Lieve jongen en erg bekwaam. We gaan zeker nog beroep doen op hem.",
      sourceUrl: "https://ringtwice.be/nl/service_providers/165807?sem_category=1&similar_sps=68261,66420,305066,261996,477443"
    }
  },
  {
    platform : PlatformType.RingTwice,
    rating : 10.0,
    title : "Klusjes binnehuis",
    author : "Olivier C.",
    dataOfReview : new Date("2023-01-25"),
    reviewContent : {
      content : "Zeer correct qua timing en alle afspraken nageleefd!",
      sourceUrl: "https://ringtwice.be/nl/service_providers/165807?sem_category=1&similar_sps=68261,66420,305066,261996,477443"
    }
  },
  {
    platform : PlatformType.RingTwice,
    rating : 10.0,
    title : "Trap schilderen & kleine afwerking.",
    author : "Jean-Philippe G.",
    dataOfReview : new Date("2023-02-18"),
    reviewContent : {
      content : "Punctueel, correct, zeer communicatief en levert zeergoed werk. " +
        "Ik raad hem absoluut aan en doe nog beroep op hem indien nodig.",
      sourceUrl: "https://ringtwice.be/nl/service_providers/165807?sem_category=1&similar_sps=68261,66420,305066,261996,477443"
    }
  },
  {
    platform : PlatformType.RingTwice,
    rating : 10.0,
    title : "Schilderwerken muren, radiatoren enz.",
    author : "Mirelle G.",
    dataOfReview : new Date("2023-05-22"),
    reviewContent : {
      content : "Mateusz reageer snel en vlotte en correcte communicatie.",
      sourceUrl: "https://ringtwice.be/nl/service_providers/165807?sem_category=1&similar_sps=68261,66420,305066,261996,477443"
    }
  },
  {
    platform : PlatformType.RingTwice,
    rating : 10.0,
    title : "Schilderwerken.",
    author : "K. M.",
    dataOfReview : new Date("2023-09-19"),
    reviewContent : {
      content : "Zéér vriendelijk - correct - stipt en timing in lijn met verwachting. Aanrader!",
      sourceUrl: "https://ringtwice.be/nl/service_providers/165807?sem_category=1&similar_sps=68261,66420,305066,261996,477443"
      }
    },
    {
      platform : PlatformType.RingTwice,
      rating : 10.0,
      title : "Schilder.",
      author : "S R.",
      dataOfReview : new Date("2023-11-06"),
      reviewContent : {
        content : "Mooi en netjes, heel tevreden!",
        sourceUrl: "https://ringtwice.be/nl/service_providers/165807?sem_category=1&similar_sps=68261,66420,305066,261996,477443"
      }
    }
])

const platformCount = computed(() => {
  const counts: Record<string, number> = {};
  for (const r of reviews.value) counts[r.platform] = (counts[r.platform] ?? 0) + 1;
  return counts;
});

const avg10 = computed(() => {
  if (!reviews.value.length) return 0;
  const sum = reviews.value.reduce((a, b) => a + b.rating, 0);
  return Math.round((sum / reviews.value.length) * 10) / 10; // 1 decimal
});

const avg5 = computed(() => {
  // Convert 0–10 scale to 0–5 stars
  return Math.round((avg10.value / 2) * 10) / 10; // 1 decimal
});

const responsiveOptions = ref([
  { breakpoint: "1024px", numVisible: 2, numScroll: 1 },
  { breakpoint: "768px", numVisible: 1, numScroll: 1 },
  { breakpoint: "480px", numVisible: 1, numScroll: 1 }
]);

function platformLogo(p: PlatformType) {
  return p === "Homedeal" ? homedeallogo : ringtwicelogo;
}

function platformSeverity(p: PlatformType) {
  return p === "Homedeal" ? "info" : "contrast";
}

function starsFilledFrom10(rating10: number) {
  // e.g. 10 => 5, 8 => 4, etc.
  return Math.round((rating10 / 10) * 5);
}

function openExternal(url?: string) {
  if (!url) return;
  if (typeof window === "undefined") return; // SSR safety
  window.open(url, "_blank", "noopener,noreferrer");
}
</script>

<template>
  <section class="container col-12 reviews-section">
    <div class="reviews-head">
      <h2 class="reviews-title">Wat klanten zeggen</h2>
      <p class="reviews-subtitle">
        Geverifieerde reviews via Homedeal &amp; Ring Twice
      </p>
    </div>


<!--TRUST STRIP-->
    <Card class="rm-card-spec flex-column">
      <template #content>
        <div class="flex flex-column md:flex-row md:align-items-center justify-content-between gap-3">

        <!-- Left: rating -->
<!--   flex column instead of grid since everything is on 1 row     -->
            <!-- LEFT     Rating     -->
          <div class="flex align-items-center">
            <div class="text-4xl font-bold line-height-1">{{ avg10.toFixed(1) }}</div>
          </div>

            <!--Stars / avg keep close-->
          <div class="flex flex-column gap-1 md:ml-2 align-items-start" >
              <!--Stars-->
                <div class="flex gap-1" aria-hidden="true">
                  <i
                    v-for="i in 5"
                    :key="i"
                    :class="[
                'pi',
                i <= Math.round(avg5) ? 'pi-star-fill' : 'pi-star',
                'text-900'
              ]"/>
              </div>
              <!--  Average text              -->
              <div class="text-700">
                Gemiddeld • {{ reviews.length }} review{{ reviews.length === 1 ? '' : 's' }}
              </div>
            </div>


          <!-- Right: platforms right side, we warp it on small -->
          <div class="flex flex-wrap justify-content-start md:justify-content-end gap-2 w-full md:w-auto">
            <div class="flex align-items-center gap-2 surface-50 border-1 border-200 border-round-lg px-2 py-2">
                <img :src="homedeallogo" alt="Homedeal" class="h-3rem md:h-2rem w-auto" />
                <span class="font-semibold text-700">{{ platformCount["Homedeal"] ?? 0 }}</span>
            </div>

            <div class="flex align-items-center gap-2 surface-50 border-1 border-200 border-round-lg px-2 py-2">
                <img :src="ringtwicelogo" alt="Ring Twice" class="h-3rem md:h-2rem w-auto" />
                <span class="font-semibold text-700">{{ platformCount["Ring Twice"] ?? 0 }}</span>
            </div>
          </div>

        </div>
      </template>
    </Card>

    <!-- Slider (Carousel) -->
    <div class="reviews-carousel w-full" v-if="reviews.length">
      <Carousel
        :value="reviews"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        :circular="reviews.length > 3"
        :autoplayInterval="5000"
        :showIndicators="true"
        :showNavigators="reviews.length > 1"
        class="w-full"
      >
        <template #item="{ data }">
          <Card class="border-round-xl overflow-hidden h-full w-full">
            <template #content>
              <div class="flex flex-wrap justify-content-between align-items-center gap-2">
                <div class="flex align-items-center gap-2">
                  <img
                    :src="platformLogo(data.platform)"
                    :alt="String(data.platform)"
                    class="h-2rem w-auto"
                  />
                  <Tag :value="data.platform" :severity="platformSeverity(data.platform)" />
                </div>

                <div class="flex align-items-baseline gap-1">
                  <span class="text-xl font-bold">{{ data.rating.toFixed(1) }}</span>
                  <span class="text-600">/10</span>
                </div>
              </div>

              <div class="mt-3 font-semibold">
                “{{ data.title }}”
              </div>

              <p class="mt-2 text-700 line-height-3 clamp-4">
                {{ data.reviewContent.content }}
              </p>

              <div class="mt-3 flex flex-wrap justify-content-between align-items-center gap-2">
                <div class="text-700 review-meta">
                  <span class="font-semibold">{{ data.author }}</span>
                  <span class="mx-2">•</span>
                  <span>{{ data.dataOfReview.toLocaleDateString('nl-BE', { year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
                </div>

                <div class="flex gap-1">
                  <i
                    v-for="i in 5"
                    :key="i"
                    :class="[
              'pi',
              i <= starsFilledFrom10(data.rating) ? 'pi-star-fill' : 'pi-star',
              'text-900'
            ]"
                  />
                </div>
              </div>
          </template>
          <template #footer class="">
              <div v-if="data.reviewContent.quality != null && data.reviewContent.service != null && data.reviewContent.priceQualityRatio != null "
                   class="mt-3 pt-3 border-top-1 border-200">
                <div class="grid">
                  <div class="col-12 md:col-4 flex justify-content-between">
                    <span class="text-600">Kwaliteit</span>
                    <span class="font-bold">{{ data.reviewContent.quality }}</span>
                  </div>
                  <div class="col-12 md:col-4 flex justify-content-between">
                    <span class="text-600">Service</span>
                    <span class="font-bold">{{ data.reviewContent.service }}</span>
                  </div>
                  <div class="col-12 md:col-4 flex justify-content-between">
                    <span class="text-600">Prijs/kwaliteit</span>
                    <span class="font-bold">{{ data.reviewContent.priceQualityRatio }}</span>
                  </div>
                </div>
              </div>

              <div class="mt-2" v-if="data.reviewContent.sourceUrl">
                <Button
                  label="Bekijk op platform"
                  icon="pi pi-external-link"
                  link
                  @click="openExternal(data.reviewContent.sourceUrl)"
                />
              </div>
          </template>

          </Card>
        </template>

      </Carousel>
    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  padding: 3.5rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

.reviews-head {
  text-align: center;
  margin-bottom: 1.25rem;
}
.reviews-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
}
.reviews-subtitle {
  margin: .5rem 0 0;
  opacity: .8;
}

/*We oging to force carousel to never overflow horizontally as to not have problem on mobile with half a review card*/
.reviews-carousel {
  overflow-x: hidden;
}

.reviews-carousel :deep(.p-carousel-content),
.reviews-carousel :deep(.p-carousel-items-content) {
  overflow: hidden;
}
.reviews-carousel :deep(.p-card),
.reviews-carousel :deep(.p-card-content),
.reviews-carousel :deep(.p-carousel-item) {
  min-width: 0;
}

.reviews-carousel :deep(.p-carousel-item) {
  padding: 0.75rem; /* ~ gap-3 */
  box-sizing: border-box;
}
@media (max-width: 480px) {
  .reviews-carousel :deep(.p-carousel-item) {
    padding: 0.25rem;
  }
}

/* prevent long text from forcing overflow */
.review-meta {
  min-width: 0;
  flex: 1 1 auto;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
}

/* if any other text can be long */
.reviews-carousel :deep(.p-card-content) {
  overflow-wrap: anywhere;
  word-break: break-word;
}

/* line clamp voor review tekst (PrimeFlex heeft dit niet standaard) */
.clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}



</style>
