<template>
  <nav class="px-6 md:px-12 lg:px-24 py-4 text-lg bg-white shadow">
    <div class="flex items-center">
      <img v-bind:src="require('../assets/logo.png')" class="w-12" />
      <p class="text-indigo-600 text-lg font-semibold">Grades Viewer</p>
    </div>
  </nav>
  <div class="flex items-center justify-center h-screen mx-6 md:mx-12 lg:mx-24">
    <div class="">
      <p
        class="text-indigo-700 text-2xl md:text-4xl lg:text-5xl font-bold text-center"
      >
        How well did you perform this academic year?
      </p>
      <p
        class="text-slate-600 text-sm md:text-lg lg:text-2xl lg:mt-3 text-center"
      >
        Input your Learner’s Reference Number to view your grades.
      </p>
      <div class="relative mt-12 block mx-auto w-3/5 md:w-2/4">
        <input
          id="LRN"
          type="text"
          class="peer border-b py-1 transition-colors focus:border-b-2 border-slate-400 cursor-text focus:border-indigo-700 focus:outline-none text-sm md:text-base peer ease-in-out placeholder-transparent w-full"
          placeholder="s"
          v-model="lrn"
        />
        <label
          for="LRN"
          class="text-xs left-0 -top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-focus:-top-4 peer-focus:text-xs peer-focus:text-indigo-700 peer-placeholder-shown:text-slate-500 text-slate-400 absolute cursor-text"
          >Learner's Reference Number</label
        >
      </div>
      <small
        v-if="this.lrnIsBlank"
        class="text-red-500 block mx-auto w-3/5 md:w-2/4"
        >{{ blankError }}
      </small>
      <small
        v-else-if="this.lrnIsNaN"
        class="text-red-500 block mx-auto w-3/5 md:w-2/4"
        >{{ NaNError }}
      </small>
      <small
        v-else-if="this.noRecord"
        class="text-red-500 block mx-auto w-3/5 md:w-2/4"
        >{{ noRecordError }}
      </small>
      <button
        class="text-xs md:text-base text-white bg-indigo-700 rounded px-6 py-3 block mx-auto mt-3 md:mt-4 cursor-pointer hover:bg-indigo-800"
        @click="validateInput"
      >
        CHECK GRADES
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeScreen",
  props: {
    msg: String,
  },
  data() {
    return {
      lrn: "",
      lrnIsBlank: false,
      lrnIsNaN: false,
      blankError: "Invalid LRN.",
      NaNError: "Please input a valid LRN.",
      data: [],
      studentData: new Object(),
      noRecord: false,
      noRecordError: `No Record Found.`,
    };
  },
  methods: {
    validateInput() {
      this.studentData = [];
      this.lrnIsBlank = false;
      this.lrnIsNaN = false;
      this.noRecord = false;
      if (this.lrn === "") {
        this.lrnIsBlank = true;
        return;
      } else if (isNaN(this.lrn)) {
        this.lrnIsNaN = true;
        return;
      } else {
        //check if LRN input is in the array of data
        var i = 0;
        for (i; i < this.data.length; i++) {
          if (this.lrn == this.data[i].LRN) {
            this.studentData = this.data[i];
            console.log(`MATCH FOUND: ${JSON.stringify(this.studentData)}`);
          }
        }
        console.log(this.studentData);
        if (Object.keys(this.studentData).length === 0) {
          console.log(`does this work`);
          this.noRecord = true;
          return;
        }
        //end of validation
        this.$router.push({
          path: `grades/${this.lrn}`,
          // query: { lrn: this.lrn },
        });
      }
    },
  },
  created() {
    axios
      .get(`https://aljhsrdnl.github.io/gradesAPI.github.io/GRADES.json`)
      .then((response) => (this.data = response.data));
  },
  watch: {},
};
</script>

<style scoped></style>
