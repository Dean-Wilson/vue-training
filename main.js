Vue.component('progress-view', {
	data() {
		return {
			completionRate: 0,
			quantA: Math.floor(Math.random() * 11), 
			quantB: Math.floor(Math.random() * 11),
			answer: null,
			failed: null,
			win: false
		}
	},
	computed: {
		correctAnswer: function(){
			return this.quantA + this.quantB;
		},
		failing: function() {
			return !(this.answer == this.correctAnswer);
		}
	},
	methods: {
		increaseCompletionRate() {
			this.completionRate += 1;
			this.win = this.completionRate == 10;
			this.newProblem();
			this.failed = false;
		},
		startAgain() {
			this.win = false;
			this.completionRate = 0;
		},
		newProblem() {
			this.quantA = Math.floor(Math.random() * 11); 
			this.quantB = Math.floor(Math.random() * 11); 
		},
		evaluateAnswer: function(e) {
			if (this.answer == this.correctAnswer) {
				this.increaseCompletionRate();
			} else {
				this.failed = true;
				this.startAgain();
			}
			this.answer = null;
		}
	},
});

new Vue({
	el: '#app',
	// props: {
	// 	answer: ''
	// },
});