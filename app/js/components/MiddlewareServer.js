define([
  './Component'
], function(Component) {
  var MiddlewareServer = Component.extend({
    defaults: {
      name: '',
      markup: '<g class="scalable"><path id="server-icon" fill="#333333" d="M-841.8,964h-42.4v41.1H-916v0.5v37H-810v-37v-0.5h-31.8L-841.8,964L-841.8,964zM-714.2,1005.1h-74.6v37.5h74.6V1005.1z M-937.2,1005.1h-74.6v37.5h74.6V1005.1z M-669.9,842.1h-386.2v96.8h386.2V842.1zM-1030.4,911.7l17-42.5h20.5l-17,42.5H-1030.4z M-997.2,911.7l17-42.5h20.5l-17,42.5H-997.2z M-964,911.7l17-42.5h20.5l-17,42.5H-964z M-930.7,911.7l17-42.5h20.5l-17,42.5H-930.7z M-876.9,911.7h-20.5l17-42.5h20.5L-876.9,911.7z M-715.7,904.7c-7.9,0-14.2-6.4-14.2-14.2s6.4-14.2,14.2-14.2c7.9,0,14.2,6.4,14.2,14.2S-707.9,904.7-715.7,904.7z M-691.2,816.7H-1034l67.6-89.2h206.8L-691.2,816.7z"/></g>',
      type: 'client'
    },

    initialize: function() {

    }
  });

  return MiddlewareServer;
});
