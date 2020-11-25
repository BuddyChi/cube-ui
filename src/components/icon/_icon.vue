<template>
  <i :class="`cube-icon cube-icon-${name}`" :style="styles"></i>
</template>

<script>
/**
 * @vue
 */
export default {
  name: `${APPNAME}Icon`,
  props: {
    /**
     * @prop 名称
     * @type {string}
     * @default ``
     */
    name: {
      type: String,
      default: "",
    },
    /**
     * @prop 颜色
     * @type {string}
     * @default ``
     */
    color: {
      type: String,
      default: "",
    },
        /**
     * @prop 尺寸
     * @type {string}
     * @default ``
     */
    size: {
      type: Number,
      default: 0,
      validator : val =>{
        return val >=0
      }
    },
  },
  computed: {
    styles() {
      const List = [];
      this.color && List.push(`color: ${this.color};`)
      this.size && List.push(`font-size: ${this.size}px;`)
      return List.join('');
    },
  },
};
</script>
