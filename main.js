var app = new Vue({
	el: '#app',
	data:{
		myproduct: 'Socks',
		myimage: 'assets/vmSocks-green-onWhite.jpg',
		inStock: true,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{variantId: 2234, variantColor: "green", variantImage: 'assets/vmSocks-green-onWhite.jpg'},
			{variantId: 2235, variantColor: "blue" , variantImage: 'assets/vmSocks-blue-onWhite.jpg' }
		],
		cart1: 0,
		cart: 0
	},
	methods:{
		addToCart() {
			this.cart ++
		},
		updateProduct: function (variantImage){
			this.myimage = variantImage
		},
		removeValCart(){
			this.cart --
		}
	}
});