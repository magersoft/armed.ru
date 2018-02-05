$('.chart').easyPieChart({
    animate: 3000,
    lineWidth: 10,
    onStep: function(value) {
        this.$el.find('span').text(Math.round(value));
    },
    onStop: function(value, to) {
        this.$el.find('span').text(Math.round(to));
    }
});