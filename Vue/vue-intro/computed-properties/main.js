const app = Vue.createApp({
   data() {
      return {
         selectedVariant: 0,
         cart: 0,
         product: 'Socks',
         brand: 'Vue Mastery',
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, sale: true },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, sale: false },
         ]
      }
   },
   methods: {
      addToCart() {
         this.cart += 1
      },
      updateVariant(index) {
         this.selectedVariant = index
      }
   },
   computed: { // creating new data (properties)
      title() {
         return this.brand + ' ' + this.product
      },
      image() {
         return this.variants[this.selectedVariant].image;
      },
      inStock() { // 0 is considered false
         return this.variants[this.selectedVariant].quantity;
      },
      onSale() {
         return this.variants[this.selectedVariant].sale;
      },
      description() {
         if (this.variants[this.selectedVariant].sale) {
            if (this.variants[this.selectedVariant].quantity) return "In Stock - On Sale"
            else return "Out of Stock - On Sale"
         }
         if (this.variants[this.selectedVariant].quantity) return "In Stock"
         return "Out of Stock"
      }
   }
})