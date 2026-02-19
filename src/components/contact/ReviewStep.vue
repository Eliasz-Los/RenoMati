<script setup lang="ts">
import {computed, ref} from 'vue'
import PrivacyModal from "@/components/contact/PrivacyModal.vue";
import type {ContactFormData} from "@/models/ContactFormData.ts";
import {Checkbox} from "primevue"

const showPrivacy = ref(false)
const props = defineProps<{ modelValue: ContactFormData }>()
const emit = defineEmits<{ (e: "update:modelValue", v: ContactFormData): void }>()

const localValue = computed({
  get: () => props.modelValue,
  set: (v: ContactFormData) => emit("update:modelValue", v),
})

const submit = () => {
  if (!props.modelValue!.consent) {
    alert('Je moet akkoord gaan met GDPR')
    return
  }
  emit('update:modelValue', props.modelValue)
  // hier kan je call naar contactService sturen
}

</script>

<template>
  <div class="step">
    <h3>Controleer uw gegevens</h3>
    <div class="summary">
      <p><b>Naam:</b> {{ localValue.personal.firstName }} {{ localValue.personal.lastName }}</p>
      <p><b>Email:</b> {{ localValue.personal.email }}</p>
      <p><b>Telefoon:</b> {{ localValue.personal.phone }}</p>
      <p><b>Adres:</b> {{ localValue.address.street }}, {{ localValue.address.postalCode }} {{ localValue.address.city }}, {{ localValue.address.country }}</p>
      <p><b>Werken:</b> {{ localValue.work.types.join(', ') }}</p>
      <p v-if="localValue.work.area"><b>Oppervlakte:</b> {{ localValue.work.area }} m²</p>
      <p><b>Beschrijving:</b> {{ localValue.work.description }}</p>
    </div>

    <div class="field">
      <div class="flex align-items-center gap-2">
        <Checkbox v-model="localValue.consent" binary />
        <span>
          Ik ga akkoord met het privacybeleid
          <Button class="link" @click="showPrivacy = true">Lees</Button>
        </span>
      </div>
    </div>

    <PrivacyModal :visible="showPrivacy" @close="showPrivacy=false"/>

  </div>
</template>

<style scoped>
.summary { background: rgba(255,255,255,.65); border:1px solid rgba(0,0,0,.08); border-radius:12px; padding:1rem; }
.link { background:none; border:none; color:#1fa6ea; text-decoration:underline; cursor:pointer; }
</style>
