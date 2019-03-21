<template>
    <div class="article">
        <h2>{{title}}</h2>
        <p>Score: {{ story.score }}</p>
        <a :href="story.url" target="blank">{{ story.url }}</a>
        <div v-for="comment in comments" :key="comment.id">
            <div class="comment-wrap">
                <div class="comment-block">
                <p class="comment-text">Comment Text:{{ comment.text }}</p>
                <div class="bottom-comment">
                    <div class="comment-author">Comment by: {{ comment.by }}</div>
                    <div class="comment-date">Comment Time:{{ comment.time }}</div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "Article",
    data: function(){
       return{
           title: '',
           story: {},
           comments: []
       } 
    },
    created: function(){
        axios.get(
             "https://hacker-news.firebaseio.com/v0/item/" + this.$route.params.id +".json"
        ).then(res =>{
            
            this.title = res.data.title;
            this.story = res.data;
            this.story.kids.forEach(id => {
                axios.get("https://hacker-news.firebaseio.com/v0/item/"+ id +".json" )
                .then(result =>{

                    this.$nextTick(() => {
                    this.comments.push(result.data);
                });
                }).catch( err =>{
                    console.log("Error of Loading Comments",err);
                })
            });

        }).catch( err =>{
            console.log("Error of Loading Item",err);
        })
    }
}
</script>
<style>

</style>


