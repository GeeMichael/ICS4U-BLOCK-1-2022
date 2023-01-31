const app = Vue.createApp({
   data() {
      return {
         product: 'Socks',
         image: './assets/images/socks_blue.jpg',
         inStock: true,
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [{
            id: 501,
            color: 'green'
         }, {
            id: 601,
            color: 'blue'
         }],
         sizes: ['X-Large', 'Large', 'Medium', 'Small', 'X-Small', 'One size fits all']
      }
   }
})