<template>

  <div class="p-4 py-8 flex items-center " :class="bgColor">
  <div class="flex flex-col sm:flex-row relative items-stretch bg-white rounded-lg overflow-hidden">
    <div class="relative min-h-full w-full sm:max-w-xs">
      <img class="w-full h-full object-cover" :src="image" alt="photo" />
    </div>
    <div class="text-left w-full p-4 flex flex-col gap-4 justify-center">
      <h2 class="text-blueGray-400 font-bold">
        {{ title }}
      </h2>
      <div class="flex flex-col gap-4">
        <p>
          {{ description }}
        </p>
        <h5 class="text-blueGray-400 font-bold">Cursos</h5>
        <ul class="list-disc list-inside">
            <li v-for="(course, index) in courses" :key="index">
            {{ course }}
            </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
    name: 'Card',
        props: {
            title: {
                type: String,
                default: 'Card'
            },
            description: {
                type: String,
                default: 'This is a card'
            },
            image: {
                type: String,
                default: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29uJTIwaWNvbnxlbnwwfHwwfHw%3D&w=1000&q=80'
            },
            courses: {
                type: Array,
                default: () => [
                ]
            },
            bgColor: {
                type: String,
                default: 'bg-blue-50'
            }
        }
    }
</script>