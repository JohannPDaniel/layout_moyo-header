'use strict';

const backstop = require('@mate-academy/backstop-config');

const baseUrl =
  'https://JohannPDaniel.github.io/layout_hello-world/moyo-header/';

const basic = {
  url: baseUrl,
  referenceUrl: baseUrl,
  delay: 1000,
};

module.exports = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
  viewports: [
    { name: '1024px', width: 1024, height: 768 },
    { name: '1200px', width: 1200, height: 768 },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Header',
      selectors: ['header'], // 👈 AQUI
    },
    {
      ...basic,
      label: 'Nav',
      selectors: ['nav'], // 👈 AQUI
    },
    {
      ...basic,
      label: 'Hover link',
      selectors: ['[data-qa="hover"]'], // 👈 AQUI
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 500,
    },
    {
      ...basic,
      label: 'Active item',
      selectors: ['.is-active'], // 👈 AQUI
    },
  ],
};
