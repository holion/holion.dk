// go to https://github.com/ModiiMedia/contentful-hugo#configuration for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    

    locales: [], // uses default locale if left empty
    
    contentful: {
        // defaults to CONTENTFUL_SPACE env variable
        space: 'X',
        // defaults to CONTENTFUL_TOKEN env variable
        token: 'X',
        // defaults to CONTENTFUL_PREVIEW_TOKEN env variable
        previewToken: 'X',
        // defaults to "master"
        environment: 'master',
    },

  singleTypes: [
    {
      id: "pageContent",
      directory: "content",
      fileName: "test",
      fileExtension: "md",
      mainContent: "content",
    },
  ],
  repeatableTypes: [
    {
      id: "case",
      directory: "content/cases",
      mainContent: "content",
    },
    {
      id: "standardSection",
      directory: "data/standardSection",
      mainContent: "data",
      fileExtension: "yaml",
    },
    {
      id: "standardHeaderSection",
      directory: "data/standardHeaderSection",
      mainContent: "data",
      fileExtension: "yaml",
    },
  ],
};