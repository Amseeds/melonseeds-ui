<script setup lang="ts">
import type { ButtonProps } from "element-plus";

const props = defineProps<ButtonProps>();
</script>

<template>
  <el-button
    v-bind="$attrs"
    v-on="$attrs"
    :type="props.type"
    :size="props.size"
    :disabled="props.disabled"
  >
    <slot>按钮</slot>
  </el-button>
</template>
