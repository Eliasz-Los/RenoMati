<script setup lang="ts">
import { ref, watch } from "vue";
import {Galleria} from "primevue";

const props = defineProps<{
  images: string[]
  startIndex: number
  visible: boolean
}>()

const emit = defineEmits(["close"])

const activeIndex = ref(props.startIndex)

watch(() => props.startIndex, val => {
  activeIndex.value = val
})

//Zoom state
const zoomLevel = ref(1);
const imgRef = ref<HTMLImageElement | null>(null);

function resetZoom(){
  zoomLevel.value = 1;
}

function wheelZoom(e: WheelEvent){
  e.preventDefault();
  if(e.deltaY <0){ zoomLevel.value += 0.1;}
  else {zoomLevel.value -= 0.1;}

  if (zoomLevel.value < 1) zoomLevel.value = 1;
}
</script>

<template>
  <Galleria
    :visible="visible"
    @update:visible="emit('close')"
    :value="images"
    :activeIndex="activeIndex"
    :fullScreen="true"
    :showThumbnails="false"
    :showItemNavigators="true"
    :showIndicators="true"
    :circular="true"
    :baseZIndex="10000"
    containerStyle="max-width: 100vw"
  >
    <template #item="slotProps">
      <img
        ref="imgRef"
        :src="slotProps.item"
        style="width:100%; max-height: 90vh; object-fit: contain; transition: transform 0.2s;"
        :style="{transform: `scale(${zoomLevel})`}"
        @wheel="wheelZoom"
        @dblclick="zoomLevel = zoomLevel === 1 ? 2 : 1"
       alt=""/>
    </template>
  </Galleria>
</template>
