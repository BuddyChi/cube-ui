<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>

<script>
/**
 * @vue
 */
export default {
  name: `${APPNAME}Button`,
  props: {
    /**
     * @prop 类型
     * @type {string}
     * @default ``
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
     * @default ``
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
  },
  computed: {
    classes() {
      const List = [
        "cube-button",
        `cube-button-${this.type}`,
        `cube-button_size_${this.size}`,
      ];
      return List.join(" ");
    },
    styles(){
      const List = [];
      
    }
  },
};
</script>
