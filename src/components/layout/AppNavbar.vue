<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'

const router = useRouter()

const isMobileOpen = ref(false)

const menuModel = computed(() => [
  { label: 'Home', command: () => router.push('/') },
  { label: 'Over RenoMati', command: () => router.push('/over-renomati') },
  {
    label: 'Ons Werk',
    items: [
      { label: 'Vloerinstallatie', command: () => router.push('/ons-werk/vloerinstallatie') },
      { label: 'Gyprocwerken', command: () => router.push('/ons-werk/gyprocwerken') },
      { label: 'Schilderwerken', command: () => router.push('/ons-werk/schilderwerken') },
      { label: 'Ramen & Deuren', command: () => router.push('/ons-werk/ramen-deuren') },
    ],
  },
  { label: 'Contact', command: () => router.push('/contact') },
])

function go(path: string) {
  router.push(path)
  isMobileOpen.value = false
}
</script>

<template>
  <header class="navbar" aria-label="Primary">
    <Menubar v-model:visible="isMobileOpen" :model="menuModel" class="navbar__bar" >
      <template #start>
        <button type="button" class="brand" @click="go('/')">
          <img class="brand__logo" src="/icon-white-blue.png" alt="RenoMati" />
          <span class="brand__name">RenoMati</span>
        </button>
      </template>

      <template #end>
        <div class="navbar__end">
          <Button
            label="Contact"
            icon="pi pi-envelope"
            severity="info"
            rounded
            class="navbar__cta"
            @click="go('/contact')"
          />

          <Button
            class="navbar__burger"
            icon="pi pi-bars"
            text
            severity="secondary"
            aria-label="Open menu"
            @click="isMobileOpen = true"
          />
        </div>
      </template>
    </Menubar>

    <Drawer v-model:visible="isMobileOpen" position="right" header="Menu" class="navbar__drawer">
      <nav class="drawer" aria-label="Mobile">
        <Button label="Home" text class="drawer__link" @click="go('/')" />
        <Button label="Over RenoMati" text class="drawer__link" @click="go('/over-renomati')" />

        <div class="drawer__section">Ons Werk</div>
        <Button
          label="Vloerinstallatie"
          text
          class="drawer__link"
          @click="go('/ons-werk/vloerinstallatie')"
        />
        <Button
          label="Gyprocwerken"
          text
          class="drawer__link"
          @click="go('/ons-werk/gyprocwerken')"
        />
        <Button
          label="Schilderwerken"
          text
          class="drawer__link"
          @click="go('/ons-werk/schilderwerken')"
        />
        <Button
          label="Ramen & Deuren"
          text
          class="drawer__link"
          @click="go('/ons-werk/ramen-deuren')"
        />

        <Button
          label="Contact"
          icon="pi pi-envelope"
          severity="info"
          rounded
          class="drawer__cta"
          @click="go('/contact')"
        />
      </nav>
    </Drawer>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
}

/* Menubar base look */
.navbar__bar {
  border-radius: 0;
  border-left: 0;
  border-right: 0;
  border-top: 0;
}

/* Brand */
.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
}

.brand__logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.brand__name {
  font-weight: 800;
  letter-spacing: 0.2px;
}

.navbar__end {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar__burger {
  display: none;
}

.drawer {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.drawer__link {
  justify-content: flex-start;
}

.drawer__section {
  margin-top: 0.75rem;
  margin-bottom: 0.15rem;
  font-weight: 800;
  opacity: 0.8;
}

.drawer__cta {
  margin-top: 0.85rem;
  width: 100%;
}

/* Responsive: hide desktop menubar list and show burger */
@media (max-width: 860px) {
  :deep(.p-menubar-root-list) {
    display: none;
  }

  .navbar__cta {
    display: none;
  }

  .navbar__burger {
    display: inline-flex;
  }
}
</style>
