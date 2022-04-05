<template>
  <div class="flex w-full flex-col h-screen justify-center">
    <div class="w-full h-screen flex flex-col items-center space-y-8 justify-center">
      <div
        class="flex text-center items-center justify-center flex-col space-y-8 w-11/12 sm:w-7/12"
      >
        <h1 class="filter text-5xl sm:text-6xl font-black drop-shadow-2xl">
          Atur data laporan <span class="text-green-500">Bansos</span>-mu disini
          dimanapun.
        </h1>
        <p class="text-md sm:text-xl font-light">
          Jangan takut catatan hilang, rusak, atau dimanipulasi. E-Bansos ini akan
          menyimpan laporan Bansos secara aman dan terstruktur dan langsung terintegrasi
          dengan penyimpanan pusat.
        </p>
      </div>

      <div class="flex justify-center">
        <input
          type="text"
          class="h-10 text-center font-semibold w-full rounded-xl text-black px-5 ring-2 ring-green-500"
          placeholder="Komplek Panghegar"
        />
      </div>

      <div class="space-x-4">
        <router-link to="/buat"
          ><button
            class="transition box-border bg-green-600 rounded-xl py-2 px-6 hover:bg-green-500 active:ring-2 ring-yellow-300"
          >
            <span class="font-semibold text-white">Buat Laporan</span>
          </button></router-link
        >
      </div>
    </div>

    <div class="flex justify-center w-full">
      <span class="text-center text-xs pb-8"
        >©2022 <a href="http://github.com/amyar32" target="_blank">Amyar</a> @JCC. All
        rights reserved.</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
