<script setup lang="ts">
import { computed, ref, onMounted } from "vue";

const props = defineProps<{
  text: string;
  baseDelay?: number;   // seconds
  stagger?: number;     // seconds between letters
}>();

const baseDelay = props.baseDelay ?? 0.05;
const stagger = props.stagger ?? 0.04;

const el = ref<HTMLElement | null>(null);
const visible = ref(false);

const letters = computed(() => props.text.split(""));

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );
  if (el.value) observer.observe(el.value);
});
</script>

<template>
  <span ref="el" class="animated-text" :class="{ 'is-visible': visible }" aria-label="text">
    <span
      v-for="(ch, i) in letters"
      :key="i"
      class="animated-text__char"
      :style="{ animationDelay: (baseDelay + i * stagger) + 's' }"
      aria-hidden="true"
    >
      <!-- keep spaces -->
      <template v-if="ch === ' '">&nbsp;</template>
      <template v-else>{{ ch }}</template>
    </span>
  </span>
</template>

<style scoped>
.animated-text__char {
  display: inline-block;
  opacity: 0;
  transform: translateY(12px);
}

.is-visible .animated-text__char {
  animation: charUp .45s ease forwards;
}

@keyframes charUp {
  to { opacity: 1; transform: translateY(0); }
}
</style>
