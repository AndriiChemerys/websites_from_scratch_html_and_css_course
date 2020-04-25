let app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './img/socks_green.jpg',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inventory: 23,
        inStock: false,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './img/socks_green.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: './img/vmSocks-blue-onWhite.jpg'
            }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        removeFromCart: function() {
            this.cart -= 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})