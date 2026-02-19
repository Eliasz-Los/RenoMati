<!--Controller & state-->
<script setup lang="ts">
import {computed, ref} from 'vue'
import PersonalStep from './PersonalStep.vue'
import AddressStep from './AddressStep.vue'
import WorkStep from './WorkStep.vue'
import ReviewStep from './ReviewStep.vue'
import {sendContactEmail} from "@/services/contactService.ts";
import type {ContactFormData} from "@/models/contact/ContactFormData.ts";

import Button from "primevue/button"
import Stepper from "primevue/stepper"
import StepList from "primevue/steplist"
import Step from "primevue/step"
import StepPanels from "primevue/steppanels"
import StepPanel from "primevue/steppanel"
const step = ref(1);
const totalSteps = 4;

const formData = ref<ContactFormData>({
  personal: { firstName: '', lastName: '', email: '', phone: '' },
  address: { street: '', city: '', postalCode: '', country: 'België' },
  work: { types: [], area: 0, description: '' },
  consent: false,
})


//navigation
const next = () => { if(step.value < totalSteps) step.value++ }
const prev = () => { if (step.value >1 ) step.value-- }

//Validatie
function canGoNext() {
  if (step.value === 1) {
    const p = formData.value.personal
    return !!(p.firstName && p.lastName && p.email && p.phone)
  }
  if (step.value === 2) {
    const a = formData.value.address
    return !!(a.street && a.city && a.postalCode && a.country)
  }
  if (step.value === 3) {
    const w = formData.value.work
    return w.types.length > 0 && !!w.description
  }
  if (step.value === 4) {
    return formData.value.consent
  }
  return true
}

// insturen van de form
async function submitForm() {
  if (!formData.value.consent) {
    alert('Je moet akkoord gaan met GDPR')
    //aparte servicei n de toekosmt
    return
  }

  try {
    await sendContactEmail(formData.value)
    alert('Bedankt, uw aanvraag is verstuurd!')
    console.log(formData.value);
    step.value = 1 // reset form
  } catch (err) {
    alert('Er is iets misgegaan, probeer opnieuw.')
    console.error(err)
  }
}
</script>

<template>
  <div class="multistep-form">

<!-- modern progress bar   -->
    <Stepper v-model:value="step" class="rm-stepper glass-effect" :linear="true">
      <StepList>
        <Step :value="1">
          <div class="stepLabel">
            <i class="pi pi-user mr-2" />
            <span class="stepText"> Personal info</span>
          </div>
        </Step>
        <Step :value="2">
          <div class="stepLabel">
            <i class="pi pi-address-book mr-2" />
            <span class="stepText">Address</span>
          </div>
        </Step>
        <Step :value="3">
          <div class="stepLabel">
            <i class="pi pi-wrench mr-2" />
            <span class="stepText">Type of works</span>
          </div>
        </Step>
        <Step :value="4">
          <div class="stepLabel">
            <i class="pi pi-check mr-2" />
            <span class="stepText">Review</span>
          </div>
        </Step>
      </StepList>

      <!-- Parts of the form-->
      <StepPanels>
        <StepPanel :value="1">
          <PersonalStep v-model="formData.personal" />
        </StepPanel>

        <StepPanel :value="2">
          <AddressStep v-model="formData.address" />
        </StepPanel>

        <StepPanel :value="3">
          <WorkStep v-model="formData.work" />
        </StepPanel>

        <StepPanel :value="4">
          <ReviewStep v-model="formData" />
        </StepPanel>
      </StepPanels>
    </Stepper>

<!--Navigation buttons  -->
    <div class="nav">
      <Button
        label="Vorige"
        severity="secondary"
        :disabled="step === 1"
        @click="prev"
      />
      <Button
        :label="step === totalSteps ? 'Verstuur' : 'Volgende'"
        :severity="step === totalSteps ? 'success' : 'primary'"
        :disabled="!canGoNext()"
        @click="step === totalSteps ? submitForm() : next()"
      />
    </div>

  </div>
</template>

<style scoped>

.multistep-form {
  max-width: 720px;
  margin: 0 auto;
  border-radius: 16px;

}

/* --- Kill the white panel background (panel area) --- */
.rm-stepper :deep(.p-stepper-panels),
.rm-stepper :deep(.p-stepper-panel),
.rm-stepper :deep(.p-stepper-panel-container),
.rm-stepper :deep(.p-stepper-content) {
  background-color: transparent !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
}

/* Remove “card padding” feel around the panels */
.rm-stepper :deep(.p-stepper-panels) {
  padding: 0 !important;
}

/* If the theme adds spacing inside content */
.rm-stepper :deep(.p-stepper-content) {
  padding: 0 !important;
}

.rm-stepper :deep(.p-stepper-nav) {
  border-radius: 20px;
  padding: 0.75rem 1rem;
}

.rm-stepper :deep(.p-stepper-panels) {
  border-radius: 20px;
}

.rm-stepper :deep(.p-component),
.rm-stepper :deep([class*="surface"]) {
  background-color: transparent !important;
}

.rm-panel {
  border-radius: 18px;
  padding: 1rem;
  background: rgba(255,255,255,0.55);   /* or transparent if you want */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(31,166,234,0.18);
}
.stepLabel {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stepText {
  font-weight: 700;
  letter-spacing: 0.02em;
}

/* hide labels on small screens, keep numbers */
@media (max-width: 560px) {
  .stepText {
    display: none;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.25rem;
}
</style>
