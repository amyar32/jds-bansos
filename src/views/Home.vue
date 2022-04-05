<template>
  <div class="w-full h-screen flex flex-col items-center space-y-8 justify-center">
    <div
      class="flex text-center items-center justify-center flex-col space-y-8 w-11/12 sm:w-7/12"
    >
      <h1 class="filter text-5xl sm:text-6xl font-black drop-shadow-2xl">
        Atur data laporan <span class="text-green-500">Bansos</span>-mu disini dimanapun.
      </h1>
      <p class="text-md sm:text-xl font-light">
        Jangan takut catatan hilang atau rusak, E-Bansos ini akan menyimpan laporan Bansos
        secara aman dan terstruktur dan langsung terintegrasi dengan penyimpanan pusat.
      </p>
    </div>

    <div class="space-x-4">
      <router-link to="/buat"
        ><button
          class="transition box-border bg-green-600 rounded-md py-2 px-6 hover:bg-green-500 active:ring-2 ring-yellow-300"
        >
          <span class="font-semibold text-white">Buat Laporan</span>
        </button></router-link
      >
      <router-link to="/bantuan"
        ><button
          class="transition box-border bg-gray-500 rounded-md py-2 px-6 hover:bg-gray-400 active:ring-2 ring-yellow-300"
        >
          <span class="font-semibold text-white">Bantuan</span>
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
