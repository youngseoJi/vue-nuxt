<template>
  <q-page padding>
    <div class="q-mt-xl text-center">
      <div class="text-h4">All Courses</div>
      <p class="q-mt-sm text-grey-8">vue & nuxt mastery class 학습하기</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="{ courseSlug, title, subtitle, thumbnail, path } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <!-- <RouterLink v-slot="{ navigate }" custom :to="`/course/${courseSlug}`"> -->
        <!-- <NuxtLink v-slot="{ navigate }" custom :to="`/course/${courseSlug}`">-->
        <NuxtLink v-slot="{ navigate }" custom :to="path">
          <CourseCard
            :title="title"
            :subtitle="subtitle"
            :thumbnail="thumbnail"
            @click="navigate"
          />
        </NuxtLink>
        <!-- </RouterLink> -->
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = useCourses();
</script>

<style scoped></style>
