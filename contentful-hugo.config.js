// go to https://github.com/ModiiMedia/contentful-hugo#configuration for configuration instructions

require("dotenv").config();

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
  locales: [], // uses default locale if left empty
  contentful: {
    // defaults to CONTENTFUL_SPACE env variable
    space: process.env.CONTENTFUL_SPACE_ID,
    // defaults to CONTENTFUL_TOKEN env variable
    token: process.env.CONTENTFUL_TOKEN,
    // defaults to CONTENTFUL_PREVIEW_TOKEN env variable
    previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    // defaults to "master"
    environment: "master",
  },

  singleTypes: [
    // {
    //   id: "pageContent",
    //   directory: "content",
    //   fileName: "test",
    //   fileExtension: "md",
    //   mainContent: "content",
    // },
  ],
  repeatableTypes: [
    {
      id: "testimonial",
      directory: "content/testimonials",
      mainContent: "content",
    },
    {
      id: "case",
      directory: "content/cases",
      mainContent: "content",
      customFields: {
        // these fields will be added to the frontmatter
        standardPage: true,
        contentUrl: (entry) => {
          return "cases/" + entry.fields.slug;
        },
        link: (entry) => {
          return entry.fields.slug;
        },
      },
    },
    {
      id: "standardSection",
      directory: "data/standardSection",
      mainContent: "data",
      fileExtension: "yaml",
    },
    {
      id: "specialSection",
      directory: "data/specialSection",
      mainContent: "data",
      fileExtension: "yaml",
    },
    {
      id: "standardHeaderSection",
      directory: "data/standardHeaderSection",
      mainContent: "data",
      fileExtension: "yaml",
    },
    {
      id: "contactSection",
      directory: "data/contactSection",
      mainContent: "data",
      fileExtension: "yaml",
    },
    {
      id: "employees",
      directory: "data/employees",
      mainContent: "data",
      fileExtension: "yaml",
    },
    {
      id: "features",
      directory: "data/features",
      mainContent: "data",
      fileExtension: "yaml",
    },
  ],
};