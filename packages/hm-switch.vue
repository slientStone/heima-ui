<template>
  <div class="hm-switch"
  :class="{
    'is-checked': modelValue
  }"
  @click="handleClick">
    <input
    class="hm-switch__input"
    type="checkbox"
    :name="name"
    ref="input"
    />
    <span class="hm-switch__core" ref="core">
      <span class="hm-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HmSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor()
    // 控制checkbox的值
    this.$refs.input.checked = this.modelValue
  },
  methods: {
    // 修改开关颜色
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.modelValue ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
    async handleClick () {
      this.$emit('update:modelValue', !this.modelValue)
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.modelValue
    }
  }
}
</script>

<style lang="scss">
.hm-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .hm-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .hm-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    vertical-align: middle;
    .hm-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.hm-switch.is-checked {
  .hm-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .hm-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
