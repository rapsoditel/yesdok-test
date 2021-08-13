<template>
    <nuxt-link :to="`/${slug}`" class="shadow-lg">
        <div class="w-full h-80 bg-center mb-4 rounded-lg" :style="{ backgroundImage: `url(${image})` }"></div>
        <div class="px-4 pb-4">
            <h1 v-text="title"></h1>
            <p v-text="intro"></p>
            <div class="flex space-x-4">
                <div class="px-2 py-1 rounded-lg text-sm font-semibold text-white" :class="categoryColor" v-text="category"></div>
                <div class="px-2 py-1 rounded-lg text-sm bg-gray-200" v-text="date"></div>
            </div>
        </div>
        
    </nuxt-link>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        intro:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        date:{
            type:String,
            required:true
        },
        slug:{
            type:String,
            required:true
        },
    },
    computed:{
        categoryColor(){
            if(this.category === "Terkini"){
                return "bg-yellow-700"
            } else if(this.category === "Gaya Hidup"){
                return "bg-green-600"
            } else{
                return "bg-indigo-900"
            }
        }
    }
}
</script>