<script setup>
useHead({
  titleTemplate: title => 'Nuxt3 ColorChange Starter',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Switch to the dark switch, sorry dark theme :)' },
  ],
  bodyAttrs: {
    class: 'test',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/android-chrome-192x192.png' },
  ],
})
</script>

<template>
  <Html lang="en-US">
    <Body
      class="bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-800;
}
.global-text {
  @apply text-gray-900 dark:text-gray-50;
}
.prose {
  @apply dark:prose-invert;
}
rect {
  @apply text-gray-100 dark:text-gray-700;
}
</style>
