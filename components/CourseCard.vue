<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="thumbnail" />
    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
// 런타임 기반
// defineProps({
//   thumbnail: {
//     type: String,
//     default: '',
//   },
//   title: String,
//   subtitle: String,
// });

// 타입 기반
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
}

defineProps<Props>();
// 런타임 기반
// defineEmits(['click']);

// 타입 기반
defineEmits<{
  click: [];
}>();
</script>
