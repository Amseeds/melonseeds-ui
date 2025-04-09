<script setup lang="ts">
import "./button.css";
import type { ButtonProps } from "element-plus";
import { useAttrs, computed, useSlots, ref } from "vue";

// 定义按钮组件可以接收的所有属性,其来自element-plus的button组件的props类型
const props = defineProps<ButtonProps>();
// 获取未被显式定义但接收到的props
const attrs = useAttrs();

const slots = useSlots();

const allProps = computed(() => ({
  ...attrs,
  ...props,
}));

// 用来获取内部 el-button 的实例
const elButtonRef = ref();

// 将 el-button 暴露给父组件
defineExpose({
  el: elButtonRef,
});
// 外层使用ref:
// // 真正的 el-button 实例
//   console.log(myBtnRef.value.el);

//   // 调用 el-button 原生方法（比如 focus）
//   myBtnRef.value.el.focus?.();
</script>

<template>
  <el-button ref="elButtonRef" v-bind="allProps" v-on="$attrs">
    <template v-for="(value, name) in slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </el-button>
</template>
<style lang="scss" scoped></style>
