export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a8ad237055ebf037b540a9',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-fth82kbe',
                  apiId: '8aa405fe-a425-4785-9f08-7afb5634f505'
                },
                {
                  buildHookId: '61a8ad230556e8f3829f1968',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-imyzob44',
                  apiId: 'eb7c540f-1eca-4b37-beba-b85171e0f14f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sjuniorbrown/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-imyzob44.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
