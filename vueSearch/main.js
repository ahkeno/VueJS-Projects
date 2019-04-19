var app = new Vue({
  el: '#app',
  data: {
    searchTerm: '',
    searchResults: 's'
  },
  methods: {
      search(){
          console.log("come here for search",this.searchTerm);
          axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + this.searchTerm)
          .then(response => {
              this.searchResults = response.data;
              console.log(this.searchResults);
          } )
          .catch( error => {
              console.error(error);
          })
      },
      bookAuthor(book){
          let authors = book.volumeInfo.authors;
          if(authors.length < 3){
            authors = authors.join(' and ')
          }  
          else if (authors.length > 2) {
            let lastAuthor = ' and ' + authors.slice(-1);
            
            authors.pop()
            
            authors = authors.join(', ')
    
            authors += lastAuthor
          }
          return authors
    }
  }
})