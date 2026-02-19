<script setup lang="ts">
import { computed} from 'vue'
import type {User} from "@/models/User.ts";
import InputText from "primevue/inputtext"

const props = defineProps<{
  modelValue: User
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: User): void
  (e: 'next'): void
}>()

const localValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val)
})

</script>
<!--This is a part of the form so group not form-->
<template>
  <div class="step">
    <div class="field">
      <label>Voornaam *</label>
      <InputText v-model="localValue.firstName" class="w-full" />
    </div>

    <div class="field">
      <label>Achternaam *</label>
      <InputText v-model="localValue.lastName" class="w-full" />
    </div>

    <div class="field">
      <label>Email *</label>
      <InputText v-model="localValue.email" class="w-full" />
    </div>

    <div class="field">
      <label>Telefoon *</label>
      <InputText v-model="localValue.phone" class="w-full" />
    </div>
  </div>
</template>
