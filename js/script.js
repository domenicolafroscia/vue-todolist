const { createApp } = Vue;

createApp({
    data() {
        return {
            items: [],
            newItems: []
        };
    },
    created() {

    },
    methods: {
        addItem: function() {
            this.newItems.push(this.items);
            this.items = "";
        },
        removeItem: function(index) {
            this.newItems.splice(index, 1);
            
        }
    },

}).mount("#app");