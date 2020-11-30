<template>
  <button :class="classes">
    <cube-icon v-if="icon" :name="icon"></cube-icon>
    <slot></slot>
  </button>
</template>

<script>
/**
 * @vue
 */
import CubeIcon from '@/components/icon'
export default {
  name: `${APPNAME}Button`,
  props: {
    /**
     * @prop 类型
     * @type {string}
     * @default `default`
     */
    type: {
      type: String,
      default: "default",
      validator: (val) => {
        return (
          [
            "default",
            "primary",
            "info",
            "success",
            "warning",
            "danger",
          ].indexOf(val) !== -1
        );
      },
    },
    /**
     * @prop 尺寸
     * @type {string}
     * @default `default`
     */
    size: {
      type: String,
      default: "default",
      validator: (val) => {
        return (
          ["default", "mini", "small", "medium", "large", "fit"].indexOf(
            val
          ) !== -1
        );
      },
    },
    /**
     * @prop 是否为描边类型
     * @type {Boolean}
     * @default false
     */
    outline: {
      type: Boolean,
      default: false,
    },
    /**
     * @prop 图标
     * @type {String}
     * @default ''
     */
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      const List = [
        "cube-button",
        `cube-button-${this.type}`,
        `cube-button_size_${this.size}`,
      ];

      this.outline && List.push("cube-button_outline");
      return List.join(" ");
    },
    styles() {
      const List = [];
    },
  },
};
</script>
