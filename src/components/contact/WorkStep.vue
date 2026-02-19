<script setup lang="ts">
import {computed} from "vue";
import type {WorkSpecs} from "@/models/WorkSpecs.ts";
import {MultiSelect, InputNumber, Textarea} from "primevue";

const props = defineProps<{
  modelValue: WorkSpecs
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: WorkSpecs): void
  (e: 'next'): void
  (e: 'prev'): void
}>()

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
const workOptions = [
  'Schilderwerken',
  'Pleisterwerken',
  'Ramen/Deuren',
  'Laminaat/Parket',
  'Tegels',
  'Overig'
]

</script>

<template>
  <div class="step">
    <div class="field">
      <label>Type werken *</label>
      <MultiSelect
        v-model="localValue.types"
        :options="workOptions"
        placeholder="Selecteer werken"
        display="chip"
        class="w-full"
      />
    </div>

    <div class="field">
      <label>Oppervlakte (m²) (optioneel)</label>
      <InputNumber v-model="localValue.area" class="w-full" :min="0" suffix=" m²" />
    </div>

    <div class="field">
      <label>Beschrijving *</label>
      <Textarea v-model="localValue.description" rows="5" class="w-full" />
    </div>
  </div>
</template>

<style scoped>

</style>
