<template>
  <div class="hm-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HmCheckboxGroup',
  props: {
    modelValue: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
