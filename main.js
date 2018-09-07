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
			this.$emit('applied');
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
});