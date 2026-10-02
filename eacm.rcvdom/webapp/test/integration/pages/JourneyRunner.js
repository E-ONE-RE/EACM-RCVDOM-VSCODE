sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"eacm/rcvdom/test/integration/pages/ZrcvdomList.gen",
	"eacm/rcvdom/test/integration/pages/ZrcvdomObjectPage.gen"
], function (JourneyRunner, ZrcvdomListGenerated, ZrcvdomObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('eacm/rcvdom') + '/test/flp.html#app-preview',
        pages: {
			onTheZrcvdomListGenerated: ZrcvdomListGenerated,
			onTheZrcvdomObjectPageGenerated: ZrcvdomObjectPageGenerated
        },
        async: true
    });

    return runner;
});

