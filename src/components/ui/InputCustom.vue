<template>
  <div class="input-custom">
    <label
      v-if="props.label"
      :for="generateUniqueId"
      class="custom-input__label"
    >
      {{ props.label }}
    </label>
    <input
      :id="generateUniqueId"
      :value="props.modelValue"
      :type="props.inputType"
      :class="['custom-input__field', { 'is-invalid': isValid === false }]"
      @input="emitData"
    >
    <span
      v-if="isValid === false"
      class="custom-input__message"
    >
      {{ warning }}
    </span>
  </div>
</template>

<style lang="scss">

</style>