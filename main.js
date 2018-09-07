window.Event = new Vue();

Vue.component('coupon', {
	template: `
		<input placeholder="Enter your coupon code" @blur="onCouponApplied">
	`,
	data() {
		return {
			
		}
	},
	props: {
	
	},
	methods: {
		onCouponApplied: function() {
			Event.$emit('applied');
		}
	},
	computed: {
	
	},
	mounted() {
	
	}
});

new Vue({

	el: "#app",

	props: {
		couponApplied: false
	},

	methods: {
		onApplied: function() {
			this.couponApplied = true;
		}
	},
	created() {
		Event.$on('applied', function(){
			alert('handling it');
		});
	}
});