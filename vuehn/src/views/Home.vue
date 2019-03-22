<template>
  <div>
    <div class="content">
      <div v-for="story in stories" :key="story.id">
        <router-link :to="{ path: '/item/' + story.data.id }"
        ><h2>{{ story.data.title }}</h2></router-link>
        <p>Type: {{ story.data.type }}</p>
        <p>Link: {{ story.data.url }}</p>
        <p>Score: {{ story.data.score }}</p>
      </div>
    </div>
   </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: 'home',
  components: {},
  data:function(){
    return {
      err: "",
      stories:this.$store.state.topStories
    };
  },
  created: function() {
    if (this.$store.state.topStories.length === 0) this.$store.dispatch('fetch_top_stories');
  }
}
</script>
