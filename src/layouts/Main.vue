<!--
 * @Author: Arthur
 * @Date: 2021-01-17 20:07:41
 * @LastEditors: Arthur
 * @LastEditTime: 2021-01-17 21:07:52
 * @Description: file content
-->
<template>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/foo">Under Construction</a></li>
  </ul>

  <slot></slot>
</template>

<script>
// import VLink from '../components/VLink.vue'
export default {
  components: {
    // VLink
  }
}
</script>
