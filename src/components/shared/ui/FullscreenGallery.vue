<script setup lang="ts">
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";
import {Galleria} from "primevue";

const props = defineProps<{
  images: string[]
  startIndex: number
  visible: boolean
}>()

const emit = defineEmits(["close"])

const activeIndex = ref(props.startIndex)

watch(
  () => props.startIndex,
  val => { activeIndex.value = val}
);

watch(
  () => props.visible,
  val => {
    if (!val) resetView();
  }
)

//View state
const zoomLevel = ref(1);
const fitMode = ref<"contain" | "cover">("contain");
//transform origin for zoom where mouse is
const originX = ref(50);
const originY = ref(50);
const minZoom = 1;
const maxZoom = 4;

function clampZoom(zoom: number): number {
  return Math.min(maxZoom, Math.max(minZoom, zoom));
}

function resetView() {
  resetZoom();
  originX.value = 50;
  originY.value = 50;
  fitMode.value = "contain";
}

function close(){
  emit("close");
}

function prev(){
  if(!props.images.length) return;
  const n = props.images.length;
  activeIndex.value = (activeIndex.value - 1 + n) % n;
  resetZoomOnly();
}

function next(){
  if(!props.images.length) return;
  const n = props.images.length;
  activeIndex.value = (activeIndex.value + 1) % n;
  resetZoomOnly();
}

function resetZoomOnly(){
  resetZoom();
  originX.value = 50;
  originY.value = 50;

}

function zoomIn(){
  zoomLevel.value = clampZoom(zoomLevel.value + 0.2);
}
function zoomOut(){
  zoomLevel.value = clampZoom(zoomLevel.value - 0.2);
}

function toggleFitMode(){
  fitMode.value = fitMode.value === "contain" ? "cover" : "contain";
}

//Update transform-origin based on cursor positon over the image

function setOriginFromEvent(e: MouseEvent | WheelEvent){
  const target = e.currentTarget as HTMLElement;
  if(!target) return;
  const rect = target.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  originX.value = Math.min(100, Math.max(0, x));
  originY.value = Math.min(100, Math.max(0, y));
}
//Zoom state

const imgRef = ref<HTMLImageElement | null>(null);

function resetZoom(){
  zoomLevel.value = 1;
}

function wheelZoom(e: WheelEvent) {
  // prevent page scroll while zooming
  e.preventDefault();
  setOriginFromEvent(e);

  const delta = e.deltaY < 0 ? 0.12 : -0.12;
  zoomLevel.value = clampZoom(zoomLevel.value + delta);
}

function dblClickZoom(e: MouseEvent) {
  setOriginFromEvent(e);
  zoomLevel.value = zoomLevel.value === 1 ? 2 : 1;
}

// keyboard controls
function onKeydown(e: KeyboardEvent) {
  if (!props.visible) return;

  if (e.key === "Escape") close();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
  if (e.key === "+" || e.key === "=") zoomIn();
  if (e.key === "-" || e.key === "_") zoomOut();
}

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", onKeydown));

const imgStyle = computed(() => ({
  width: "100%",
  maxHeight: "90vh",
  objectFit: fitMode.value,
  transition: "transform 0.15s ease",
  transform: `scale(${zoomLevel.value})`,
  transformOrigin: `${originX.value}% ${originY.value}%`,
  cursor: zoomLevel.value > 1 ? "zoom-out" : "zoom-in",
}));

</script>


<template>
  <Galleria
    :visible="visible"
    @update:visible="close"
    :value="images"
    :activeIndex="activeIndex"
    :fullScreen="true"
    :showThumbnails="true"
    :showItemNavigators="false"
    :showIndicators="false"
    :circular="true"
    :baseZIndex="10000"
    containerStyle="max-width: 100vw"
    :pt="{
      closeButton: { class: 'rm-galleria-close' },
    closeIcon: { class: 'rm-galleria-close-icon' }
    }"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item"
        :style="imgStyle"
        @wheel="wheelZoom"
        @mousemove="setOriginFromEvent"
        @dblclick="dblClickZoom"
       alt=""/>
    </template>
    <template #thumbnail="slotProps">
      <div class="grid gap-4 justify-center">
        <img :src="slotProps.item" :alt="slotProps.item.alt" class="galleria-thumbnail"/>
      </div>
    </template>
  </Galleria>
</template>

<style scoped>
.galleria-thumbnail{
  max-width: 50px;
  max-height: 80px;
  display: block;
}


@media (max-width: 480px) {
  :deep(.p-galleria-close) {
    width: 3.25rem;
    height: 3.25rem;
  }
}
</style>
