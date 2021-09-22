const Offer = {
data (){
  return {
    person: {},

}
},

created() {
        fetch('https://randomuser.me/api')
        .then( response => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.person = responseJson.results[0]
        })
        .catch( err => {
            console.error(err)
        })
  }
  }
  Vue.createApp(Offer).mount('#offerApp');