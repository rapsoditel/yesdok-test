<template>
  <div class="max-w-6xl mx-auto px-4">
    <h1 v-text="dataDetail.title" class="text-4xl text-blue-900"></h1>
    <div class="flex space-x-4">
            <div class="px-2 py-1 rounded-lg text-sm font-semibold text-white" :class="categoryColor" v-text="dataDetail.category"></div>
            <div class="px-2 py-1 rounded-lg text-sm bg-gray-200" v-text="dataDetail.createdDate"></div>
        </div>
    <img
      :src="dataDetail.imageUrl"
      :alt="dataDetail.title"
      class="max-w-3xl mx-auto w-full rounded-xl my-4"
    />

    <div v-html="dataDetail.content" class="w-full"></div>
  </div>
</template>
<script>
import data from "~/static/data.json";
export default {
  head() {
    return {
      title: 'YesDok | '+this.dataDetail.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.dataDetail.title
        }
      ]
    }
  },
  asyncData() {
    return { postsData: data.posts };
  },
  computed: {
    dataDetail() {
      return this.postsData.find(
        (data) => data.slug === this.$route.params.slug
      );
    },
    categoryColor(){
        if(this.dataDetail.category === "Terkini"){
            return "bg-yellow-700"
        } else if(this.dataDetail.category === "Gaya Hidup"){
            return "bg-green-600"
        } else{
            return "bg-indigo-900"
        }
    }
  },
};
</script>