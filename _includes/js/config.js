var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  version: 2,
  routes: {
    alwaysUseHrefs: true, // Update - there now is translations. since the site isn't translated we can use push for now. if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
    //enabledRoutes: ['occurrenceSearch', 'literatureSearch'],
    enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionSearch', 'institutionKey', 'literatureSearch'],
  }, // Highlight Maps : Kit Elloran
  occurrence: { // Start Occurrence function
    occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'DATASETS', 'DASHBOARD', 'CLUSTERS'],
    highlightedFilters: ['q', 'country', 'taxonKey', 'year', 'datasetKey', 'occurrenceStatus', 'basisOfRecord', 'locality', 'pointRadiusSpatialFit', 'footprintWKT', 'footprintSRS'],
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "in",
          "key": "country",
          "values": ["BN", "KH", "ID", "LA", "MY", "MM", "PH", "SG", "TH", "VN", "TL"]
        },
        {
          "type": "equals",
          "key": "notIssues",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        }
      ]
    }, // End Occurrence Function
    mapSettings: { // ASEAN Map configurations and zoom level
      lat: 10.537453, // Latitude of Map
      lng: 114.242062, // Longitude of Map
      zoom: 4 // Level of zoom adjusted to 4
    }
  }
};
