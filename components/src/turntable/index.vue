<template>
    <canvas id="canvas" ref="canvasDom" :width="side" :height="side"></canvas>
    <div class="turntable-page rounded-full">

    </div>
</template>
<script lang="ts">
export default {
    name: 'tk-turntable'
}
</script>
<script setup lang='ts'>
import { ref, computed } from 'vue'
const canvasDom = ref(null)
const props = defineProps({
    side: {
        type: Number,
        default: 300
    }
})
const sideLen = computed(() => props.side + 'px')

const a = ref()
</script>
    
<style lang="scss">
#canvas {
    border: 1px solid #000;
    border-radius: 50%;
}
</style>