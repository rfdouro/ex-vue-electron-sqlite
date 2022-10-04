<template>
 <input :type="type" @keydown="$emit('acaochange')" />
</template>

<script>
export default {
 props: {
  type: [String]
 },
 emits: ["acaochange"]
}
</script>

<style>

</style>