<template>
 <button @click="$emit('acao')">
  <slot />
 </button>
</template>

<script>
export default {
 name: 'MeuBotao',
 emits: ['acao']
}
</script>

<style>

</style>