const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
    };
  },
  computed: {
    fullname() {
      console.log('Running...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Yalcin';
    }
  },
  methods: {
    resetInput() {
      this.name = '';
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('test');
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
  },
});

app.mount('#events');
