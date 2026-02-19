<script setup lang="ts">
import {Button} from 'primevue'
defineProps<{ visible: boolean }>()
const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="visible" class="overlay">
    <div class="modal">
      <h2>Privacy & gegevensverwerking</h2>

      <p>
        Wij gebruiken uw gegevens uitsluitend om uw aanvraag te behandelen en
        contact met u op te nemen.
      </p>

      <ul>
        <li>niet opgeslagen in een database</li>
        <li>niet gedeeld met derden</li>
        <li>niet gebruikt voor marketing</li>
        <li>enkel gebruikt voor communicatie betreffende uw aanvraag</li>
      </ul>

      <p>
        Uw gegevens worden verwijderd na afhandeling van uw aanvraag.
      </p>

      <Button @click="emit('close')">Sluiten</Button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.5);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:999;
}

.modal {
  background:white;
  padding:2rem;
  border-radius:12px;
  max-width:500px;
}
</style>
