<script setup lang="ts">

import type {Address} from "@/models/contact/Address.ts";
import {computed} from "vue";
import InputText from "primevue/inputtext"


const props = defineProps<{
  modelValue: Address
}>()

const emit = defineEmits<{
(e: 'update:modelValue', value: Address): void
(e: 'next'): void
(e: 'prev'): void
}>()

const localValue = computed({
  get: () => props.modelValue,
  set: (value: Address) => emit('update:modelValue', value)
})
</script>

<template>
<div class="step">
  <div class="field">
    <label>Straat + nummer *</label>
    <InputText v-model="localValue.street" class="w-full" />
  </div>

  <div class="field">
    <label>Stad *</label>
    <InputText v-model="localValue.city" class="w-full" />
  </div>

  <div class="field">
    <label>Postcode *</label>
    <InputText v-model="localValue.postalCode" class="w-full" />
  </div>

  <div class="field">
    <label>Land *</label>
    <InputText v-model="localValue.country" class="w-full" />
  </div>
</div>

</template>

<style scoped>

</style>
