<template>
  <div id="app" :class="darkMode ? 'dark' : ''">
    <div
      class="transition w-screen min-h-screen bg-white text-gray-800 pt-20 dark:text-white dark:bg-gray-800"
    >
      <LayoutNavbar />
      <ToggleDarkMode :handleClick="toggleDarkMode" />
      <router-view />
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
