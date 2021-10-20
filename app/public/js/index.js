const Offer = {
data (){
  return {
    "students": [],
    "selectedStudent": null,
    "offers": [],
    "booksForm": {},
    "selectedBook": null
    }
},

computed: {
    prettyBirthday() {
        return dayjs(this.person.dob.date)
        .format('D MMMM YYYY')
    }
},

methods: {
    fetchStudentData() {
    fetch('/api/student')
    .then( response => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        this.student = responseJson
    })
    .catch( err => {
        console.error(err)
    })
}
},

methods: {
    selectStudent(s) {
        if (this.selectedStudent ==s){
            return;
        }
        this.selectedStudent=s;
        this.offers= [],
        this.fetchOfferData(s);
    },

    fetchOfferData(s) {
    fetch('/api/offer/?students='+ s.id)
    .then( response => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        this.offers = responseJson
    })
    .catch( err => {
        console.error(err)
    })
}
},
    // postNewBooks(evt) {
    //     this.BooksForm.id = this.selectedBooks.id;        
    //     console.log("Posting:", this.BooksForm);
    //     // alert("Posting!");

    //     fetch('api/offer/create.php', {
    //         method:'POST',
    //         body: JSON.stringify(this.BooksForm),
    //         headers: {
    //           "Content-Type": "application/json; charset=utf-8"
    //         }
    //       })
    //       .then( response => response.json() )
    //       .then( json => {
    //         console.log("Returned from post:", json);
    //         // TODO: test a result was returned!
    //         this.books = json;
            
    //         // reset the form
    //         this.booksForm = {};
    //       });
    //   },
    //   postEditOffer(evt) {
    //     this.offerForm.id = this.selectedOffer.id;
    //     this.offerForm.studentId = this.selectedStudent.id;        
        
    //     console.log("Editing!", this.offerForm);



methods: {
        fetchUserData() {
        fetch('https://randomuser.me/api/')
        .then( response => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.person = responseJson.results[0]
        })
        .catch( err => {
            console.error(err)
        })
  }
  },

// handleEdit(o) {
//     this.selectedBook= o;
//     this.bookForm= this.selectedBook;
  
// },

// resetbookForm() {
//     this.selectedBook= null;
//     this.bookForm= {};
// },

created() {
    this.fetchStudentData();
}
},

Vue.createApp(Books).mount('#books');