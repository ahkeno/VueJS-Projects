var app = new Vue({
    el: '#weatherApp',
    data: {
      searchTerm: '',
      searchResults: '',
      notFound: Boolean
    },
    methods: {
        search(){
          
          this.searchResults = "";
          this.notFound = false;
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=` + this.searchTerm + `&units=metric&appid=3b2f9129b2ae85f1ff396fe612f776b9`)
          .then(response => {
              this.searchResults = response.data;
              console.log(this.searchResults);
          } )
          .catch( error => {
              console.error(error);
              this.notFound = true
          })
        }
    }
})