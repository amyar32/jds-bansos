<template>
  <div id="app" :class="darkMode ? 'dark' : ''">
    <div
      class="transition w-screen min-h-screen bg-white text-gray-800 dark:text-white dark:bg-gray-800"
    >
      <LayoutNavbar />
      <ToggleDarkMode :handleClick="toggleDarkMode" />

      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import LayoutNavbar from "@/components/Layout/Navbar";
import ToggleDarkMode from "@/components/Layout/ToggleDarkMode";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    LayoutNavbar,
    ToggleDarkMode,
  },

  metaInfo: {
    title: "Beranda",
    titleTemplate: "%s | E-Bansos Jabar Digital Service",
  },

  computed: {
    ...mapGetters({
      darkMode: "config/darkMode",
    }),
  },

  methods: {
    ...mapActions({
      toggleDarkMode: "config/toggleDarkMode",
    }),
  },
};
</script>

<style>
.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
