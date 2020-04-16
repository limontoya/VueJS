var app = new Vue({
	el: '#app',
	data:{
		myproduct: 'Socks',
		myimage: 'assets/vmSocks-green-onWhite.jpg',
		inStock: false,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{variantId: 2234, variantColor: "green", variantImage: 'assets/vmSocks-green-onWhite.jpg'},
			{variantId: 2235, variantColor: "blue" , variantImage: 'assets/vmSocks-blue-onWhite.jpg' }
		],
		cart: 0,
		stylePtag: {
			color: 'grey',
			fontSize: '15px'
		},
		stylePtagDeco: {
			color: 'red',
			fontSize: '13px',
			textDecoration: 'line-through'
		}
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