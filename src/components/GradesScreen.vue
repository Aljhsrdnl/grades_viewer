<template>
  <div class="mt-8 mx-6 md:mx-12 lg:mx-24 pb-10 h-screen">
    <div class="flex items-center mb-6">
      <div class="flex-grow"></div>
      <div
        class="bg-indigo-700 hover:bg-indigo-800 ease-in-out cursor-pointer text-white px-3 py-2 rounded flex"
      >
        <router-link
          to="/"
          class="flex items-center justify-center text-sm md:text-lg"
          ><span class="material-symbols-rounded pr-1 text-base md:text-2xl">
            home </span
          >Home</router-link
        >
      </div>
    </div>
    <div class="flex-grow">
      <h1 class="text-indigo-700 font-bold text-2xl">
        &#128075; Hi, {{ firstName }}!
      </h1>
      <p class="text-sm lg:text-base text-slate-500">
        Here are your grades in the S.Y. 2022-2023.
      </p>
    </div>
    <div class="overflow-auto">
      <table
        class="md:text-base text-sm table-auto overflow-scroll mt-8 border border-slate-200 border-collapse w-full"
      >
        <thead class="bg-indigo-50">
          <tr>
            <th
              class="border border-slate-200 text-left text-slate-800 px-2 py-3"
            >
              Subjects
            </th>
            <th class="text-slate-800 border border-slate-200 px-2">
              1st Quarter
            </th>
            <th class="text-slate-800 border border-slate-200 px-2">
              2nd Quarter
            </th>
            <th class="text-slate-800 border border-slate-200 px-2">
              3rd Quarter
            </th>
            <th class="text-slate-800 border border-slate-200 px-2">
              4th Quarter
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-slate-500 border border-slate-200 px-2 py-1">
              Filipino
            </td>
            <td class="text-center text-slate-600 border border-slate-200">
              {{ studentData.FIL }}
            </td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
          </tr>
          <tr>
            <td class="text-slate-500 border border-slate-200 px-2 py-1">
              English
            </td>
            <td class="text-center text-slate-600 border border-slate-200">
              {{ studentData.ENG }}
            </td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
          </tr>
          <tr>
            <td class="text-slate-500 border border-slate-200 px-2 py-1">
              Science
            </td>
            <td class="text-center text-slate-600 border border-slate-200">
              {{ studentData.SCI }}
            </td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
          </tr>
          <tr>
            <td class="text-slate-500 border border-slate-200 px-2 py-1">
              Mathematics
            </td>
            <td class="text-center text-slate-600 border border-slate-200">
              {{ studentData.MATH }}
            </td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
          </tr>
          <tr>
            <td class="text-slate-500 border border-slate-200 px-2 py-1">
              Araling Panlipunan
            </td>
            <td class="text-center text-slate-600 border border-slate-200">
              {{ studentData.AP }}
            </td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
          </tr>
          <tr>
            <td class="text-slate-500 border border-slate-200 px-2 py-1">
              ESP
            </td>
            <td class="text-center text-slate-600 border border-slate-200">
              {{ studentData.ESP }}
            </td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
          </tr>
          <tr>
            <td class="text-slate-500 border border-slate-200 px-2 py-1">
              TLE
            </td>
            <td class="text-center text-slate-600 border border-slate-200">
              {{ studentData.TLE }}
            </td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
          </tr>
          <tr>
            <td class="text-slate-500 border border-slate-200 px-2 py-1">
              MAPEH
            </td>
            <td class="text-center text-slate-600 border border-slate-200">
              {{ studentData.MAPEH }}
            </td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
            <td class="text-center text-slate-600 border border-slate-200"></td>
          </tr>
          <tr>
            <td class="text-slate-500 border border-slate-200 px-2 py-1">
              AVERAGE
            </td>
            <td class="text-center text-indigo-600 font-bold">
              {{ studentData.GENERAL_AVG }}
            </td>
            <td
              class="text-center text-indigo-600 font-bold border border-slate-200"
            ></td>
            <td
              class="text-center text-indigo-600 font-bold border border-slate-200"
            ></td>
            <td
              class="text-center text-indigo-600 font-bold border border-slate-200"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="this.studentData.Rank !== 0" class="mt-12">
      <p class="text-lg">
        <small class="text-4xl">&#127881;</small>
        <small class="text-indigo-600 text-xl font-bold"
          >Congratulations, {{ firstName }}!</small
        >
      </p>
      <p class="text-slate-600 text-base md:text-lg ml-12">
        You are the top {{ studentData.Rank }} of your class! Keep working
        diligently.
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "GradesScreen",
  props: {
    lrn: String,
  },
  data() {
    return {
      students: [],
      studentData: new Object(),
    };
  },
  created() {
    axios
      .get(`https://aljhsrdnl.github.io/gradesAPI.github.io/GRADES.json`)
      .then((response) => (this.students = response.data))
      .then(() => {
        var i = 0;
        for (i; i < this.students.length; i++) {
          if (this.lrn == this.students[i].LRN) {
            this.studentData = this.students[i];
            console.log(`MATCH FOUND: ${JSON.stringify(this.studentData)}`);
          }
        }
      });
  },
  computed: {
    firstName() {
      return this.studentData.NAME.split(",")[1];
    },
  },
};
</script>
