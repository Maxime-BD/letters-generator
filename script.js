const app = Vue.createApp({
  data() {
    return {
      randomLetter: "D",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    };
  },
  methods: {
    generateLetter() {
      this.randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
  },
  mounted() {
    window.addEventListener("keyup", event => {
      if (event.keyCode === 32) {
        this.generateLetter();
      }
    });
    // Add touch event listener
    document.addEventListener("touchstart", event => {
      this.generateLetter();
    });
  }
});
app.mount("#random-letter");
