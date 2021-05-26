<template>
  <button class="hm-button"
   :class="[`hm-button--${type}`, {
     'is-plain': plain,
     'is-round': round,
     'is-circle': circle,
     'is-disabled': disabled
   }]"
   :disabled="disabled"
  @click="handleClick"
   >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何内容 隐藏span -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'HmButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.hm-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.hm-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background-color: #65b1ff;
    border-color: #65b1ff;
    color: #fff;
  }
}
.hm-button--successs {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    background-color: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.hm-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    background-color: #a6a9a6;
    border-color: #a6a9a6;
    color: #fff;
  }
}
.hm-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    background-color: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.hm-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    background-color: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// plain
.hm-button--primary.is-plain {
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;

  &:hover,
  &:focus {
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.hm-button--successs.is-plain {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;

  &:hover,
  &:focus {
    background-color: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.hm-button--info.is-plain {
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;

  &:hover,
  &:focus {
    background-color: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.hm-button--warning.is-plain {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;

  &:hover,
  &:focus {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.hm-button--danger.is-plain {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;

  &:hover,
  &:focus {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round
.hm-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// circle
.hm-button.is-circle{
  border-radius: 50%;
  padding:12px;
}

// icon
.hm-button [class*=hm-icon-]+span {
  margin-left: 5px;
}

// disabled
.hm-button.is-disabled {
  opacity: 1;
}
</style>
