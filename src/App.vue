<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>|
    <router-link to="/main">Main</router-link>|
    <router-link to="/join">Join</router-link>|
    <router-link to="/itemlist">ItemList</router-link>
  </nav>
  <router-view/>
</template>

<script>
import store from "@/store";
import axios from "axios";
import { onMounted } from "vue";
export default ({
  setup() {
    const check = () => {
      axios.get("/api/account/check").then(({data})=> {
        console.log(data);
        store.commit("setAccount", data||0);
      })
    };

    onMounted(()=> {
      check();
    })


  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
