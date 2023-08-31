sap.ui.define([
	"com/infocus-Travel-Expense-Management-Approver/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.infocus-Travel-Expense-Management-Approver.controller.Home", {
		onInit: function() {
			// JSON data
			var jsonData = {
				items: [{
					"Title": "Subrato Saha",
					"Description": "Java Developer"
				}, {
					"Title": "Piyush Gupta",
					"Description": "Java Developer"
				}]
			};

			// Create JSON model and set data
			var oModel = new JSONModel(jsonData);
			this.getView().setModel(oModel, "model");
		}
	});
});