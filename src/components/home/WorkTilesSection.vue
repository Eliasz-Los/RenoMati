<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Card from 'primevue/card'
import Button from 'primevue/button'
import type {WorkTile} from "@/models/WorkTile.ts";

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

<template>
  <section class="work-section">
    <h2 class="text-3xl font-bold text-center mb-6">Bekijk ons werk!</h2>

    <div class="grid">
      <div
        v-for="(tile, index) in tiles"
        :key="tile.route"
        class="col-6 md:col-6 lg:col-6"
      >
        <Transition
          appear
          :name="index % 2 === 0 ? 'slide-left' : 'slide-right'">

          <!-- Blue tiles: Just empty blue cards -->
          <Card
            v-if="visibleTiles[index] && tile.colorClass === 'blue'"
            class="work-tile work-tile--blue"
          />

          <!-- Black tiles: Cards with content -->
          <Card
            v-else-if="visibleTiles[index] && tile.colorClass === 'black'"
            class="work-tile work-tile--black cursor-pointer hover:shadow-6 "
            @click="goToWork(tile.route)"
          >
            <template #content>
              <div class="flex flex-column align-items-center text-center gap-3 p-4">
                <i :class="[tile.icon, 'text-6xl', 'text-white']"></i>
                <h3 class="text-2xl font-bold m-0 text-white">{{ tile.title }}</h3>
                <p class="text-base m-0 text-white opacity-90">{{ tile.description }}</p>
                <Button
                  label="Bekijk meer"
                  icon="pi pi-arrow-right"
                  text
                  severity="secondary"
                  class="mt-2 text-white"
                />
              </div>
            </template>
          </Card>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work-section {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Base tile styling */
.work-tile {
  height: 100%;
  min-height: 150px;
  border-radius: 12px;
  overflow: hidden;
}

.work-tile--blue {
  min-height: 100px;
  background: #1fa6ea;
  border: 1px solid #1fa6ea;
}

.work-tile--black {
  min-height: 240px;
  background: #1a1a1a !important;
  border-color: #1a1a1a !important;
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
