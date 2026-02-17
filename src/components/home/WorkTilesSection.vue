<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Card from 'primevue/card'
import Button from 'primevue/button'
import type {WorkTile} from "@/models/WorkTile.ts";
import AnimatedSection from "@/components/shared/ui/AnimatedSection.vue";

const router = useRouter()

const tiles = ref<WorkTile[]>([
  {
    title: 'Vloerinstallatie',
    description: 'Professionele vloerinstallaties voor uw project',
    icon: 'pi pi-th-large',
    route: '/ons-werk/vloerinstallatie',
    colorClass: 'black',
  },
  {
    title: '',
    description: '',
    icon: '',
    route: '',
    colorClass: 'blue',
  },
  {
    title: '',
    description: '',
    icon: '',
    route: '',
    colorClass: 'blue',
  },
  {
    title: 'Gyprocwerken',
    description: 'Vakkundige gyprocwerken en plaatsing',
    icon: 'pi pi-building',
    route: '/ons-werk/gyprocwerken',
    colorClass: 'black',
  },
  {
    title: 'Schilderwerken',
    description: 'Hoogwaardige schilderwerken binnen en buiten',
    icon: 'pi pi-palette',
    route: '/ons-werk/schilderwerken',
    colorClass: 'black',
  },
  {
    title: '',
    description: '',
    icon: '',
    route: '',
    colorClass: 'blue',
  },
  {
    title: '',
    description: '',
    icon: '',
    route: '',
    colorClass: 'blue',
  },
  {
    title: 'Ramen & Deuren',
    description: 'Installatie van ramen en deuren op maat',
    icon: 'pi pi-box',
    route: '/ons-werk/ramen-deuren',
    colorClass: 'black',
  },

])

const visibleTiles = ref<boolean[]>(new Array(tiles.value.length).fill(false))

onMounted(() => {
  // Stagger the appearance of each tile
  tiles.value.forEach((_, index) => {
    setTimeout(() => {
      visibleTiles.value[index] = true
    }, index * 500)
  })
})

function goToWork(route: string) {
  router.push(route)
}
</script>

<!--TODO: fix this tile bs-->
<template>
  <section class="work-section">
    <h2 class="text-3xl font-bold text-center mb-6">Bekijk ons werk!</h2>

    <div class="grid">
      <div
        v-for="(tile, index) in tiles"
        :key="tile.route"
        class="col-6 md:col-6 lg:col-6"
      >
        <AnimatedSection :animation="index % 2 === 0 ? 'slide-left' : 'slide-right'">
          <Card
            v-show="visibleTiles[index]"
          :class="['work-tile', tile.colorClass === 'blue' ? 'work-tile--blue' : 'work-tile--black', tile.colorClass === 'black' ? 'cursor-pointer hover:shadow-6' : '']"
          @click="tile.colorClass === 'black' ? goToWork(tile.route) : null"
          >
            <template #content>
              <div v-if="tile.colorClass === 'blue'" class="blue-tile-wrapper">
                <img src="/black_icon_transparent_background.png" alt="black_renomati_logo" class="blue-tile-logo" />
              </div>
              <div v-else class="flex flex-column align-items-center text-center gap-3 p-4">
                <i :class="[tile.icon, 'text-white']"></i>
                <h3 class="text-2xl font-bold m-0 text-white">{{ tile.title }}</h3>
                <p class="text-base m-0 text-white opacity-90">{{ tile.description }}</p>
                <Button label="Bekijk meer" icon="pi pi-arrow-right" text severity="secondary" class="mt-2 text-white" />
              </div>
            </template>
          </Card>
        </AnimatedSection>


      </div>
    </div>
  </section>
</template>

<style scoped>

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.grid > div {
  flex: 1 1 calc(50% - 0.5rem); /* 2 columns, accounting for gap */
  max-width: 400px; /* optional: prevents shrinking too much */
  min-width: 200px; /* prevent blue tiles from shrinking too much */
}
@media (max-width: 600px) {
  .grid > div {
    flex: 1 1 100%;
    max-width: 100%;
  }
}


.work-section {
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

/*base tile */
.work-tile {
  width: 100%;
  aspect-ratio: 1 / 1; /* makes all tiles square */
  max-height: 50vh; /* half viewport height */
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}


.work-tile--blue {
  background: #1fa6ea;
  border: 1px solid #1fa6ea;
}
.blue-tile-wrapper {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blue-tile-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.work-tile--black {
  background: #1a1a1a !important;
  border-color: #1a1a1a !important;
}

.work-tile--black > :deep(.p-card-content) {
  display: flex;
  flex-direction: column;
  justify-content: center; /* vertical center */
  align-items: center;    /* horizontal center */
  height: 100%;
  text-align: center;
  padding: 2rem; /* optional: more spacing around content */
  gap: 1rem;     /* space between icon, title, description, button */
}


.work-tile--black :deep(.p-card-body),
.work-tile--black :deep(.p-card-content) {
  background: #1a1a1a !important;
}

.work-tile--black:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.25);
  cursor: pointer;
}

.work-tile i {
  transition: transform .4s ease;
}

.work-tile:hover i {
  transform: scale(1.15);
}

/*SLIDE ANIMATION*/
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Slide from left */

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-120px) scale(0.96);
}

.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

/* Slide from right */


.slide-right-enter-from {
  opacity: 0;
  transform: translateX(120px) scale(0.96);
}

.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}


/* Button hover effect */
.work-tile :deep(.p-button) {
  color: white !important;
}

.work-tile :deep(.p-button:hover) {
  background: rgba(255, 255, 255, 0.1) !important;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .work-section {
    padding: 2rem 1rem;
  }

  .work-tile {
    min-height: 150px;
  }

  /* On mobile, all tiles slide from left */
  .slide-right-enter-from {
    transform: translateX(-100px);
  }
}
</style>
