export default {
  widgets: [
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
                  buildHookId: '5ffbc777eb91b7160528de94',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8a7zm8qk',
                  apiId: '21bd7751-9a06-459c-a0d1-33d9ef326388'
                },
                {
                  buildHookId: '5ffbc7772b73fc63089161a5',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-oepbhpjd',
                  apiId: 'fb8fecfc-d2f9-48bb-b072-832d1fde0500'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VincentV89/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-oepbhpjd.netlify.app', category: 'apps'}
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
