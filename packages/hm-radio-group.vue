<template>
  <div class="hm-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HmRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // group接收到 modelValue值
    // provide 与 inject 上下文组件工具
    modelValue: null
  }
}
</script>

<style lang="scss">

</style>
