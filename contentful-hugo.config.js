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
        // {
        //     id: 'user',
        //     directory: 'content',
        //     fileName: '_index',
        //     fileExtension: 'md',
        // },
    ],
    repeatableTypes: [
        {
            id: 'case',
            directory: 'content/cases',
            mainContent: 'content',
            resolveEntries: {
                categories: 'fields.slug',
                author: 'fields.name',
                relatedPosts: 'sys.id',
            },
        },
        // {
        //     id: 'user',
        //     directory: 'content/users',
        //     mainContent: 'content',
        //     resolveEntries: {
        //         categories: 'fields.slug',
        //         author: 'fields.name',
        //         relatedPosts: 'sys.id',
        //     },
        // },
    ],
};