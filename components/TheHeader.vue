<template>
  <header
    class="w-full h-20 sticky top-0 flex bg-yd-blue text-white font-semibold z-50"
  >
    <div class="w-full flex justify-between items-center px-4 lg:px-8">
      <div @click="changeCategory('')" class="cursor-pointer">
        <img
          src="~/assets/images/logo-yesdok.png"
          alt="Logo Yesdok"
          class="w-28 md:w-36"
        />
      </div>
      <div class="lg:hidden">
        <button @click="menuOpen = !menuOpen">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 22.5H26.25V20H3.75V22.5ZM3.75 16.25H26.25V13.75H3.75V16.25ZM3.75 7.5V10H26.25V7.5H3.75Z"
              fill="#fff"
            />
          </svg>
        </button>
        <nav class="absolute left-0 top-20 w-full bg-yd-blue animate-slide-down rounded-b-xl" v-if="menuOpen">
          <ul class="grid p-4">
            <li
              v-for="(menu, index) in category"
              :key="index"
              @click="changeCategory(menu)"
              class="cursor-pointer py-2 border-b last:border-b-0 border-opacity-80 hover:text-opacity-80"
            >
              {{ menu }}
            </li>
          </ul>
        </nav>
      </div>
      <nav class="hidden lg:block">
        <ul class="flex space-x-4 items-center">
          <li
            v-for="(menu, index) in category"
            :key="index"
            @click="changeCategory(menu)"
            class="cursor-pointer hover:bg-white hover:bg-opacity-20 py-1 px-2 rounded-lg"
            :class="{'bg-opacity-30 bg-white':selectedCategory === menu}"
          >
            {{ menu }}
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import data from "~/static/data.json";
export default {
  data() {
    return {
      menuOpen: false,
      category: [],
    };
  },
  computed: {
    selectedCategory() {
      return this.$store.state.category;
    },
  },
  methods: {
    changeCategory(val) {
      this.$store.commit("handleCategory", val);
      this.$router.push("/");

      this.menuOpen = false;
    },
  },
  created() {
    this.category = data.category;
  },
};
</script>