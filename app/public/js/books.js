const Books = {
    data () {
      return {
          "books": []
    }
    },

methods: {
    fetchBooks() {
        fetch('/api/books/')
        .then( response => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.books = responseJson
        })
        .catch( err => {
            console.error(err)
        })
    },

},
created(){
    this.fetchBooks();
    }
}

  
Vue.createApp(Books).mount('#books');