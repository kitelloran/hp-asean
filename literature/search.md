---
# copid from hp-bison (https://github.com/gbif/hp-bison/blob/master/literature.md)
layout: literature
description: Default template for occurrence search
---
<script>
  var siteConfig = {
  literature: {
    rootFilter: {
      predicate: {
        type: 'or', predicates: [
          {
            type: 'in',
            key: 'countriesOfResearcher',
            values: ['BN', 'KH', 'ID', 'LA', 'MY', 'MM', 'PH', 'SG', 'TH', 'VN']
          },
          {
            type: 'in',
            key: 'countriesOfCoverage',
            values: ['BN', 'KH', 'ID', 'LA', 'MY', 'MM', 'PH', 'SG', 'TH', 'VN']
          }
        ]
      }
    },
    highlightedFilters: ['q', 'countriesOfResearcher', 'countriesOfCoverage', 'year']
  }
};
</script>
