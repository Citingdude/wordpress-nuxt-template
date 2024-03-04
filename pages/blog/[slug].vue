<script setup lang="ts">
import type WpPost from '~/types/wp/wpPost.type';

const { $wpFetch } = useNuxtApp()
const { slug } = useRoute().params

const { data } = await useAsyncData<WpPost[]>(
  `page-${slug}`,
  () => $wpFetch('posts', {
    query: {
      slug
    },
  })
);

if (!data.value || data.value.length < 1) {
  throw createError('Post not found')
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