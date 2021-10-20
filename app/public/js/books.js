const Books = {
    data () {
      return {
          "books": [],
          booksForm: {},
          selectedBook: null
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
    postNewBooks(evt) {
            
        console.log("Posting:", this.booksForm);
    
        fetch('api/books/create.php', {
            method:'POST',
            body: JSON.stringify(this.booksForm),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
            })
            .then( response => response.json() )
            .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;
            
            // reset the form
            this.booksForm = {};
            });
            },
},


    //   postEditOffer(evt) {
    //     this.offerForm.id = this.selectedOffer.id;
    //     this.offerForm.studentId = this.selectedStudent.id;        
        
    //     console.log("Editing!", this.offerForm);

// handleEdit(o) {
//     this.selectedBook= o;
//     this.bookForm= this.selectedBook;
  
// },

// resetbookForm() {
//     this.selectedBook= null;
//     this.bookForm= {};
// },

created(){
    this.fetchBooks();
    }
};
Vue.createApp(Books).mount('#books');