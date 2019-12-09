var app = new Vue ({
	//options
  el: '#app',
  	data: {
    	message: 'hello world',
      url: 'https://js.vuejs.org/',
      toggle: true,
      languages: ['JavaScript', 'Ruby', 'Python'],
    },
    methods: {
    	clickHandler: function() {
      this.message = 'clicked!'
      }
    }
})