<template>
  <div class="hm-input"
    :class="{
      'hm-input--suffix': showSuffix
    }"
  >
    <input
    class="hm-input__inner"
    :class="{
      'is-disabled': disabled
    }"
    :placeholder="placeholder"
    :type="showPassword ? (passwordVisible ? 'text':'password') : type"
    :name="name"
    :disabled="disabled"
    :value="modelValue"
    @input="handleInput($event)"
    >
    <span class="hm-input__suffix" v-if="showSuffix">
      <!-- close -->
      <i class="hm-input__icon hm-icon-error" v-if="clearable && modelValue" @click="clear"></i>
      <!-- password的eye -->
      <i class="hm-input__icon hm-icon-eye-hide" v-if="showPassword && !passwordVisible && modelValue" @click="passwordVisible = true"></i>
      <i class="hm-input__icon hm-icon-eye" v-else-if="showPassword && modelValue" @click="passwordVisible = false"></i>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [Number, String],
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('update:modelValue', e.target.value)
    },
    clear () {
      this.$emit('update:modelValue', null)
    }
  }
}
</script>

<style lang="scss">
.hm-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .hm-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color:#f5f7fa;
      border-color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.hm-input--suffix {
  .hm-input__inner {
    padding-right:30px;
  }
  .hm-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1)
    }
  }
}
</style>
