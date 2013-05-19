(function(E, $globalScope) {
	E.views = E.views || {};
	
	E.views.MainView = Backbone.View.extend({
		initialize: function() {
		    this.model.on('change', this.render, this);
		},

		render: function() {
            		var template = _.template( $("#template-display-text").html(), {
		    		message: this.model.get('theText')
			} );

            		this.$el.html(template);
		}
	});
})(EX, $)
