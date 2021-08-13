<template >
<div>
  <div v-if="postsData.length > 0" class="px-4 lg:px-8">
    <h1 v-text="selectedCategory?`Semua Artikel ${selectedCategory}`:'Artikel'" class="text-center text-3xl"></h1>
    <div  class="grid gap-8 md:gap-x-4 lg:gap-x-8 md:grid-cols-2 lg:grid-cols-3">
      <LazyPostPreview
        v-for="data in showData"
        :key="data.id"
        :title="data.title"
        :image="data.imageUrl"
        :intro="data.intro"
        :category="data.category"
        :date="data.createdDate"
        :slug="data.slug"
      />
    </div>
  </div>
  
  <div v-else class="text-center">
    <h1>Tidak ada Data</h1>
  </div>
</div>
  
</template>

<script>
import data from "~/static/data.json";
export default {
  asyncData() {
    return { postsData: data.posts };
  },
  computed:{
    selectedCategory(){
      return this.$store.state.category
    },
    showData(){
      if(this.selectedCategory){
        return this.postsData.filter(e=>e.category === this.selectedCategory)
      }else{
        return this.postsData
      }
    }
  },
};
</script>
