Vue.component('task-list', {

	template: '<ul><task v-for="task in tasks">{{task.description}}</task></ul>',

	data: function() {
		return {
			tasks: [
				{description: 'Go to the shop', completed: true},
				{description: 'Go to the store', completed: true},
				{description: 'Go to the closet', completed: false},
				{description: 'Do Shopping', completed: true},
				{description: 'Clean Room', completed: true}
			]
		}
	}

});

Vue.component('task', {

	template: '<li><slot></slot></li>'

});


new Vue({
	el: "#app",
	data: {
	},
	methods: {
		makeItDone: function() {
			return "hello";
		}
	}
});