<template>
  <div
    @click="handleClick"
    class="transition flex justify-center items-center bottom-5 right-5 h-12 w-12 shadow-xl rounded-full bg-gray-800 cursor-pointer dark:bg-yellow-400 fixed"
  >
    <IconSun />
  </div>
</template>

<script>
import IconSun from "@/components/Icon/Sun";

export default {
  name: "LayoutToggleDarkmode",
  props: { handleClick: Function },
  components: { IconSun },
};
</script>
