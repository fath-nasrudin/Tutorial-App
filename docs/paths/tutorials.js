module.exports = {
  '/tutorials': {
    get: {
      tags: ['Tutorial CRUD operations'],
      description: 'Get tutorials',
      operationId: 'getTutorials',
      parameters: [],
      responses: {
        200: {
          description: 'Tutorial were obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Tutorial',
              },
            },
          },
        },
      },
    },
    post: {
      tags: ['Tutorial CRUD operations'],
      description: 'Create a tutorial',
      operationId: 'createTutorial',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/TutorialInput',
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Tutorial created successfully',
        },
        500: {
          $ref: '#/components/responses/500ServerError',
        },
      },
    },
  },

  '/tutorials/{id}': {
    get: {
      tags: ['Tutorial CRUD operations'],
      description: 'Get a tutorial',
      operationId: 'getTutorial',
      parameters: [
        {
          name: 'id',
          in: 'path',
          schema: {
            $ref: '#/components/schemas/id',
          },
          required: true,
          description: 'a single tutorial id',
        },
      ],
      responses: {
        200: {
          description: 'Tutorial is obtained',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Tutorial',
              },
            },
          },
        },

        404: {
          description: 'Tutorial is not found',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
            },
          },
        },
      },
    },
    put: {
      tags: ['Tutorial CRUD operations'],
      description: 'Update a tutorial',
      operationId: 'updateTutorial',
      parameters: [
        {
          name: 'id',
          in: 'path',
          schema: {
            $ref: '#/components/schemas/id',
          },
          required: true,
          description: 'a single tutorial id',
        },
      ],
      responses: {
        200: {
          description: 'Tutorial updated successfully',
        },
        404: {
          description: 'Todo not found',
        },
        500: {
          $ref: '#/components/responses/500ServerError',
        },
      },
    },
    delete: {
      tags: ['Tutorial CRUD operations'],
      description: 'Delete a tutorial',
      operationId: 'deleteTutorial',
      parameters: [
        {
          name: 'id',
          in: 'path',
          schema: {
            $ref: '#/components/schemas/id',
          },
          required: true,
          description: 'a single tutorial id',
        },
      ],
      responses: {
        200: {
          description: 'Tutorial deleted successfully',
        },
        404: {
          description: 'Todo not found',
        },
        500: {
          $ref: '#/components/responses/500ServerError',
        },
      },
    },
  },

};
