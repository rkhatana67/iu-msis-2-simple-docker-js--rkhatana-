
const Offer = {
  data() {
    return {
      foo: 0,
      msg: "D&S is my fav",
      list: ["red", "green", "blues"]
    }
  }
}

Vue.createApp(Offer).mount('#offerApp');