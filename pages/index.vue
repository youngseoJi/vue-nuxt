<template>
  <q-page padding>
    <div class="q-mt-xl text-center">
      <div class="text-h4">All Courses</div>
      <p class="q-mt-sm text-grey-8">vue & nuxt mastery class 학습하기</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div v-for="i in 3" :key="i" class="col-12 col-md-4 col-sm-6">
        <CourseCard />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped></style>
