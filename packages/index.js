// 整个包的入口
// 导入组件资源
import Button from './hm-button'
import Dialog from './hm-dialog'
import Input from './hm-input'
import Checkbox from './hm-checkbox'
import CheckboxGroup from './hm-checkbox-group'
import Radio from './hm-radio'
import RadioGroup from './hm-radio-group'
import Switch from './hm-switch'
import Form from './hm-form'
import FormItem from './hm-form-item'
import './font/iconfont.css'

// 存储组件列表
const components = [
  Button,
  Dialog,
  Input,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Switch,
  Form,
  FormItem
]
const install = function (Vue) {
  // 全局注册所有组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件，如果是，就不用调用 Vue.user()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
