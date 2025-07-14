var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  version: 2,
  routes: {
    alwaysUseHrefs: true, // Update - there now is translations. since the site isn't translated we can use push for now. if true, then we will always use hrefs, if false we will use onClick events and push state to the history. I've added this because I just realize that the language picker doesn't work with pushState as the url of the translated site is not updated with the new url
    enabledRoutes: ['occurrenceSearch', 'literatureSearch'],
    enabledRoutes: ['occurrenceSearch', 'collectionSearch', 'collectionKey', 'institutionSearch', 'institutionKey'],
  },
  occurrence: {
    occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'DATASETS', 'DASHBOARD', 'CLUSTERS'],
    highlightedFilters: ['q', 'country', 'datasetKey', 'taxonKey', 'occurrenceStatus', 'basisOfRecord', 'year'],
    rootPredicate: {
      "type": "and",
      "predicates": [
        {
          "type": "in",
          "key": "country",
          "values": ["BN", "KH", "ID", "LA", "MY", "MM", "PH", "SG", "TH", "VN"]
        },
        {
          "type": "equals",
          "key": "notIssues",
          "value": "COUNTRY_COORDINATE_MISMATCH"
        }
      ]
    }
  }
};
