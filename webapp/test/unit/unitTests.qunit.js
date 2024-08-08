/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zovism/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
