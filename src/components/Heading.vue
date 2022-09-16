<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white p-8">
    <div class="md:flex md:items-center md:justify-between">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight dark:text-gray-800">
          Nuxt3 Color Mode starter
        </h2>
      </div>
      <div class="mt-4 flex md:mt-0 md:ml-4">
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Help
        </button>
        <button
          type="button"
          class="primary-button ml-3 inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Switch
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.primary-button {
    @apply bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600;
}
</style>
