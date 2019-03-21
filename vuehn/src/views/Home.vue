<template>
  <div>
    <NavBar/>
    <div class="content">
      <div v-for="story in stories" :key="story.id">
        <h2>{{ story.data.title }}</h2>
        <p>Type: {{ story.data.type }}</p>
        <p>Link: {{ story.data.url }}</p>
        <p>Score: {{ story.data.score }}</p>
      </div>
    </div>
   </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import axios from "axios";

export default {
  name: 'home',
  components: {
    NavBar
  },
  data:function(){
    return {
      err: "",
      stories:[]
    };
  },
  created: function() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(result => {
        console.log("Http Get servie success");
        this.results = result.data.slice(0, 10);
        this.results.forEach(element => {
          //call the top 10 contents by its own ID
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              this.stories.push(result);
            })
            .catch(err => {
              console.log(err);
            });
        });
        
      })
      .catch(err => {
         console.log("Http Get servie Error",err);
        this.err = err;
      });
  }
}
</script>
