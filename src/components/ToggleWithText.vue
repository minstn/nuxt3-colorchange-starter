<!-- This example requires Tailwind CSS v2.0+ -->
<script setup lang="ts">
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const enabled = ref(false)
const colorMode = useColorMode()

onMounted(async (): Promise<any> => {
  if (colorMode.preference === 'dark' || colorMode.preference === 'system')
    enabled.value = true

  console.log(colorMode)
})

watch(enabled, (toggleValue) => {
  if (toggleValue)
    colorMode.preference = 'dark'
  else
    colorMode.preference = 'light'

  console.log('watched', colorMode)
})
</script>

<template>
  <SwitchGroup as="div" class="flex items-center">
    <Switch
      v-model="enabled"
      class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200']"
    >
      <span
        aria-hidden="true"
        class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        :class="[enabled ? 'translate-x-5' : 'translate-x-0']"
      />
    </Switch>
    <SwitchLabel as="span" class="ml-3">
      <span class="text-sm font-medium text-white dark:text-gray-900">Dark mode</span>
      <span>&nbsp;</span>
      <span class="text-sm text-gray-400 dark:text-gray-600">(May save ~7% of energy)</span>
    </SwitchLabel>
  </SwitchGroup>
</template>
