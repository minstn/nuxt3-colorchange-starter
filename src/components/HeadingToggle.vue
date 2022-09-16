<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="dark:bg-white bg-gray-800 p-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-white dark:text-gray-800">
          Nuxt3 Color Mode starter
        </h2>
      </div>
      <div class="mt-4 flex md:mt-0 md:ml-4">
        <ToggleWithText />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.primary-button {
    @apply bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600;
}
</style>
