<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref, watch} from "vue";

const props = defineProps<{
  src: string | null
}>();

/*Our close buttons for athis image viewer*/
const emit = defineEmits(["close"])

const visible = ref(false);
/*checking if its loaded*/
watch(() => props.src, (val) => {
  visible.value = !!val;
})

const close = () => emit('close');
/*esc is also a way to close it, qol for desktope users*/
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    close();
  }
}

onMounted(() => window.addEventListener('keydown', handleEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', handleEscape))

</script>

<template>
<transition name="fade">
  <div v-if="visible" class="viewer" @click="close">
    <img :src="src!" class="viewer-img" @click.stop alt="viewing in on a chosen img"/>
  </div>
</transition>
</template>

<style scoped>
.viewer{
  position: fixed;
  inset: 0;
  background: rgba(10,15,25,0.92);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
}

.viewer-img {
  max-width: 92%;
  max-height: 92%;
  border-radius: 14px;
  box-shadow: 0 30px 80px rgba(0,0,0,0.6);
  animation: zoomIn .25s ease;
  cursor: default;
}

@keyframes zoomIn {
  from { transform: scale(.92); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
