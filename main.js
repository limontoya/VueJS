var app = new Vue({
	el: '#app',
	data:{
		mybrand: 'Vue Mastery Brand',
		myproduct: 'Socks',
		myselectedVariant: 0,
		details: ["80% cotton", "20% polyester", "Gender-neutral"],
		variants: [
			{variantId: 2234, 
				variantColor: "green", 
				variantImage: 'assets/vmSocks-green-onWhite.jpg',
				variantQuantity: 10
			},
			{variantId: 2235, 
				variantColor: "blue" , 
				variantImage: 'assets/vmSocks-blue-onWhite.jpg' ,
				variantQuantity: 0
			}
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
		},
		mysale: false
	},
	methods:{
		addToCart() {
			this.cart ++
		},
		updateProduct: function (index){
			this.myselectedVariant = index
		},
		removeValCart(){
			this.cart --
		}
	},
	computed: {
		mytitle() {
			return this.mybrand + ' ' + this.myproduct
		},
		myimage() {
			return this.variants[this.myselectedVariant].variantImage
		},
		inStock() {
			return this.variants[this.myselectedVariant].variantQuantity
		},
		onSale() {
			return this.mysale ? this.mytitle + ', is on sale!' : this.mytitle + ' not on sale...'
		}
	}
});