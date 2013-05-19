(function(E, $) {
    E.models = E.models || {};

    E.models.DisplayTextModel = Backbone.Model.extend({
	    urlRoot: function() { return "http://localhost/~matt/service.php"; }
    });
})(EX, $);
