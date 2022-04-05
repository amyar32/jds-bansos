<template>
  <div class="flex w-full h-full items-center justify-center pt-20">
    <div
      class="flex flex-col items-center justify-center sm:w-6/12 transition rounded-xl shadow-2xl py-10 w-11/12 bg-gray-100 dark:bg-gray-800"
    >
      <form class="w-full flex flex-col items-center space-y-4" @submit="handleSubmit">
        <div class="flex flex-col w-9/12 space-y-2">
          <label for="name" class="font-semibold text-sm">Nama Penerima</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nama"
            class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 px-5"
            v-model="payload.name"
            required
          />
        </div>

        <div class="flex flex-col w-9/12 space-y-2">
          <label for="nik" class="font-semibold text-sm">Nomor Induk Kependudukan</label>
          <input
            type="number"
            name="nik"
            id="nik"
            placeholder="Nomor Induk Kependudukan"
            class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 px-5"
            v-model.number="payload.nik"
            required
          />
        </div>

        <div class="flex flex-col w-9/12 space-y-2">
          <label for="kk" class="font-semibold text-sm">Nomor Kartu Keluarga</label>
          <input
            type="number"
            name="kk"
            id="kk"
            placeholder="Nomor Kartu Keluarga"
            class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 px-5"
            v-model.number="payload.kk"
            required
          />
        </div>

        <div class="flex flex-row w-9/12 space-x-4">
          <div class="w-full space-y-2">
            <label for="age" class="font-semibold text-sm">Umur</label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Umur"
              class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 px-5"
              v-model.number="payload.age"
              required
            />
          </div>
          <div class="w-full space-y-2">
            <label for="gender" class="font-semibold text-sm">Kelamin</label>
            <select
              name="gender"
              id="gender"
              v-model="payload.gender"
              class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 p-2"
              required
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
        </div>

        <div class="flex flex-col space-y-2 w-9/12">
          <label for="address" class="font-semibold text-sm">Alamat</label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="5"
            class="rounded-md py-3 px-5 text-black ring-2 ring-gray-200"
            placeholder="Alamat lengkap"
            v-model="payload.address"
            required
          ></textarea>
        </div>

        <div class="flex flex-row w-9/12 space-x-4">
          <div class="w-full space-y-2">
            <label for="rt" class="font-semibold text-sm">Nomor RT</label>
            <input
              type="number"
              name="rt"
              id="rt"
              placeholder="RT"
              class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 px-5"
              v-model="payload.rt"
              required
            />
          </div>
          <div class="w-full space-y-2">
            <label for="rw" class="font-semibold text-sm">Nomor RW</label>
            <input
              type="number"
              name="rw"
              id="rw"
              placeholder="RW"
              class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 px-5"
              v-model="payload.rw"
              required
            />
          </div>
        </div>

        <div class="flex flex-row w-9/12 space-x-4">
          <div class="w-full space-y-2">
            <label for="beforesalary" class="font-semibold text-sm"
              >Penghasilan Sebelum Pandemi</label
            >
            <input
              type="number"
              name="beforesalary"
              id="beforesalary"
              placeholder="Gajih..."
              class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 px-5"
              v-model.number="payload.beforeSalary"
              required
            />
          </div>
          <div class="w-full space-y-2">
            <label for="aftersalary" class="font-semibold text-sm"
              >Penghasilan Setelah Pandemi</label
            >
            <input
              type="number"
              name="aftersalary"
              id="aftersalary"
              placeholder="Gajih..."
              class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 px-5"
              v-model.number="payload.afterSalary"
              required
            />
          </div>
        </div>

        <div class="flex flex-col w-9/12 space-y-4">
          <label for="reason" class="font-semibold text-sm">Alasan Mendaftar</label>
          <select
            name="reason"
            id="reason"
            v-model="payload.reason"
            class="w-full h-10 text-black rounded-md ring-2 ring-gray-200 p-2"
            @change="handleReasonChange"
          >
            <option v-for="(reason, id) in reasonList" :value="reason" :key="id">
              {{ reason }}
            </option>
          </select>

          <textarea
            v-if="customReasonMode"
            name="reason"
            id="reason"
            cols="30"
            rows="5"
            class="rounded-md py-3 px-5 text-black ring-2 ring-gray-200"
            placeholder="Alasan lain"
            v-model="payload.reason"
            required
          ></textarea>
        </div>

        <div class="flex flex-row w-9/12 pt-2 space-x-4">
          <div class="w-full space-y-2">
            <label
              for="photoKtp"
              :class="payload.attachments.ktp ? 'bg-green-500' : 'bg-yellow-600'"
              class="w-full flex flex-row items-center py-3 px-7 space-x-6 text-white text-blue rounded-lg shadow-md tracking-wide uppercase cursor-pointer hover:bg-yellow-500 hover:text-white"
            >
              <span class="text-base leading-normal lg:text-xs"
                ><p v-if="!payload.attachments.ktp">Photo KTP</p>
                <p v-else>Photo Terpilih</p></span
              >
              <input
                class="hidden"
                id="photoKtp"
                type="file"
                name="photoKtp"
                accept="image/*"
                ref="photoKtp"
                @change="handlePhotoChange"
              />
            </label>
          </div>
          <div class="w-full space-y-2">
            <label
              for="photoKk"
              :class="payload.attachments.kk ? 'bg-green-500' : 'bg-yellow-600'"
              class="w-full flex flex-row items-center py-3 px-7 space-x-6 text-white bg-green-500 text-blue rounded-lg shadow-md tracking-wide uppercase cursor-pointer hover:bg-yellow-500 hover:text-white"
            >
              <span class="text-base leading-normal lg:text-xs"
                ><p v-if="!payload.attachments.kk">Photo KK</p>
                <p v-else>Photo Terpilih</p>
              </span>
              <input
                class="hidden"
                id="photoKk"
                type="file"
                name="photoKk"
                accept="image/*"
                ref="photoKk"
                @change="handlePhotoChange"
              />
            </label>
          </div>
        </div>

        <div class="flex flex-row items-center w-9/12 pt-2 space-x-6">
          <div>
            <input
              type="checkbox"
              name="agree"
              id="agree"
              class="form-checkbox h-5 w-5 text-green-600"
              v-model="isValid"
            />
          </div>

          <label for="agree" class="text-xs"
            >Saya menyatakan bahwa data yang diisikan adalah benar dan siap
            mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data
            tersebut.</label
          >
        </div>

        <div
          v-if="errors.length"
          class="flex text-xs text-black flex-col w-9/12 pt-2 space-y-2 ring-2 ring-red-500 bg-red-200 px-4 py-4 rounded-xl"
        >
          <b>Terdapat kesalahan dalam data :</b>
          <ul class="list-disc list-inside pl-4">
            <li v-for="(error, id) in errors" :key="id">{{ error }}</li>
          </ul>
        </div>

        <div class="flex flex-row items-center w-9/12 pt-2 space-x-6">
          <button
            v-if="!isLoading"
            class="w-full h-12 bg-green-500 rounded-xl text-white font-semibold hover:bg-green-400"
            :class="{ 'bg-red-500': isSent === 'fail' }"
          >
            {{ message }}
          </button>

          <button
            v-else
            class="w-full h-12 bg-gray-500 rounded-xl text-white font-semibold"
          >
            Mengirim
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePage",

  metaInfo: {
    title: "Buat Laporan",
  },

  data() {
    return {
      errors: [],

      payload: {
        name: "",
        nik: "",
        kk: "",
        age: null,
        gender: "",
        address: "",
        reason: "modol",
        beforeSalary: "",
        afterSalary: "",
        rt: null,
        rw: null,
        attachments: {
          kk: null,
          ktp: null,
        },
      },

      customReasonMode: false,
      isValid: false,
      isSent: null,
      isLoading: false,

      reasonList: [
        "Kehilangan pekerjaan",
        "Kepala keluarga terdampak atau korban Covid",
        "Tergolong fakir/miskin semenjak sebelum Covid",
        "Lainnya",
      ],
    };
  },

  computed: {
    message() {
      if (!this.isLoading && this.isSent === "sent") {
        return "Berhasil Dikirim";
      }
      if (!this.isLoading && this.isSent === "fail") {
        return "Terjadi Kesalahan";
      }
      return "Kirim Data";
    },
  },

  methods: {
    delay(t, v) {
      return new Promise(function (resolve) {
        setTimeout(resolve.bind(null, v), t);
      });
    },

    handleReasonChange(e) {
      if (e.target.value === "Lainnya") {
        this.customReasonMode = true;
        this.payload.reason = "Tulis alasan lain di sini...";
      } else {
        this.customReasonMode = false;
      }
    },

    handlePhotoChange() {
      this.payload.attachments.ktp = this.$refs.photoKtp.files[0];
      this.payload.attachments.kk = this.$refs.photoKk.files[0];
    },

    handleSubmit(e) {
      e.preventDefault();
      this.errors = [];

      if (this.payload.nik.toString().length != 16) {
        this.errors.push("Masukan data NIK yang benar.");
      }
      if (this.payload.kk.toString().length != 16) {
        this.errors.push("Masukan data KK yang benar.");
      }
      if (this.payload.address.length >= 255) {
        this.errors.push("Alamat tidak lebih dari 255 huruf");
      }
      if (!this.isValid) {
        this.errors.push("Mohon centang persetujuan kevalidan data");
      }
      if (!this.payload.attachments.ktp || !this.payload.attachments.kk) {
        this.errors.push("Mohon masukan foto yang dibutuhkan");
      }
      if (this.payload.age < 25) {
        this.errors.push("Umur minimal 25 tahun");
      }
      if (
        this.payload.attachments.kk.size >= 2097152 &&
        this.payload.attachments.ktp.size >= 2097152
      ) {
        this.errors.push("Photo maksimal berukuran 2 MB");
      }

      if (!this.errors.length) {
        this.isLoading = true;
        this.delay(1500).then(() => {
          this.isLoading = false;
          if (Math.floor(Math.random() * 2) === 0) {
            this.isSent = "sent";
          } else {
            this.isSent = "fail";
          }
        });

        console.log(this.payload);
      }
    },
  },
};
</script>
