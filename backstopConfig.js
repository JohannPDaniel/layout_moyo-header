'use strict';

const backstop = require('@mate-academy/backstop-config');

const baseUrl =
  'https://johannpdaniel.github.io/layout_hello-world/moyo-header/';

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
      misMatchThreshold: 2,
    },
    {
      ...basic,
      label: 'Nav',
      selectors: ['nav'], // 👈 AQUI
      misMatchThreshold: 2,
    },
    {
      ...basic,
      label: 'Hover link laptops',
      selectors: ['[data-qa="hover"]'],
      hoverSelector: '[data-qa="hover"]',
      postInteractionWait: 500,
      misMatchThreshold: 5,
    },
    {
      ...basic,
      label: 'Active item',
      selectors: ['.is-active'], // 👈 AQUI
      misMatchThreshold: 3,
    },
  ],
};
