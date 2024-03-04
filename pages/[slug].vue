<script setup lang="ts">
import type WpPage from '~/types/wp/wpPage.type';

const { $wpFetch } = useNuxtApp()
const { slug } = useRoute().params

const { data } = await useAsyncData<WpPage[]>(
  `page-${slug}`,
  () => $wpFetch('pages', {
    query: {
      slug
    },
  })
);

if (!data.value || data.value.length < 1) {
  throw createError('Page not found')
}

const pageData = data.value[0]
</script>

<template>
  <main>
    <div class="container">
      <div class="prose">
        <h1>{{ pageData.title.rendered }}</h1>

        <div v-html="pageData.content.rendered">
        </div>
      </div>
    </div>
  </main>
</template>