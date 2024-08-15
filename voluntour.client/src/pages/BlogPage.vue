<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h2 class="title">Projects</h2>
      </div>
      <div class="col-12">
        <p class="sm-text">
          Voluntour currently has
          <strong>{{ projects.length }}</strong> projects available:
        </p>
      </div>
    </div>
    <div class="row" v-for="project in projects" :key="project.id">
      <div class="col-12 d-flex justify-content-center">
        <img src="https://placehold.co/1000x300" />
      </div>
      <div class="col-12 text-center pt-3">
        <h3>{{ project.location }}</h3>
        <h5>{{ project.startDate }}</h5>
        <router-link :to="`/projects/${project.slug.current}`">
          <button class="btn btn-primary">View</button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import sanity from '../sanity.js'

import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "project"]{
  location,
    startDate,
    endDate,
    aboutImage,
    slug
}[0...50]`;

export default {
  name: "Blog",
  data() {
    return {
      loading: true,
      projects: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      // this.error = this.personalDetail = null;
      this.loading = true;
      sanity.fetch(query).then(
        (projects) => {
          projects.forEach(project => {
            project.startDate = this.formatDate(project.startDate)
            project.endDate = this.formatDate(project.endDate)
          })
          this.loading = false;
          this.projects = projects;
          console.log(projects)
        },
        (error) => {
          // this.error = error;
        }
      );
    },
    formatDate(projectDate) {
      let date = new Date(projectDate)
      let newDate = (date.getMonth() + 1) + '-' + (date.getDate() + 1) + '-' + (date.getFullYear().toString().substring(2, 4))
      return newDate
    }
  },
};
</script>