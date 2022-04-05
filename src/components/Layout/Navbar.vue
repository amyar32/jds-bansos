<template>
  <!-- kontainer -->
  <div
    class="transition-all flex flex-row items-center justify-between top-0 w-full h-16 px-6 bg-white shadow-xl fixed dark:bg-gray-800"
  >
    <!-- child pertama -->
    <div class="flex flex-row space-x-2 items-center">
      <img src="/logo.png" class="h-10" alt="E-Bansos Jabar Digital Service" />
      <router-link to="/">
        <h1 class="font-medium text-md cursor-pointer">
          E-Bansos Jabar Digital Service
        </h1></router-link
      >
    </div>

    <!-- child kedua -->
    <div class="hidden sm:block">
      <li class="flex flex-row space-x-5 list-none font-medium">
        <ul v-for="(list, index) in navigationList" :key="index">
          <router-link :to="list.route">
            <span>{{ list.name }}</span>
          </router-link>
        </ul>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutNavbar",

  data() {
    return {
      navigationList: [{ name: "Buat Laporan", route: "/buat" }],
    };
  },
};
</script>

<style scoped>
.router-link-exact-active > span {
  @apply transition text-green-600;
}
</style>
