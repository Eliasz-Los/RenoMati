<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  animation: {
    type: String,
    default: 'slide-up' // slide-left | slide-right | slide-up | slide-down
  },
  delay: {
    type: Number,
    default: 0
  }
})

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

/*With interaction observer we trigger it on the scroll not on load*/
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry!.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  if (el.value) observer.observe(el.value)
})
</script>

<template>
  <div
    ref="el"
    :class="[visible ? animation : '']"
    :style="{ animationDelay: delay + 's' }"
  >
    <slot />
  </div>
</template>
