module.exports = {
  components: {
    schemas: {
      id: {
        type: 'string',
        description: 'An id of a todo',
        example: 'ejn24mo11134jn5k33n5',
      },
      Tutorial: {
        type: 'object',
        required: [
          'id', 'title',
        ],
        properties: {
          id: {
            type: 'string',
            description: 'Tutorial\'s id',
            example: 'at325f342s2st4',
          },
          title: {
            type: 'string',
            description: 'Tutorial\'s title',
            example: 'How to bla',
          },
          description: {
            type: 'string',
            description: 'Tutorial\'s description',
            example: 'This is bla bla bla',
          },
          published: {
            type: 'boolean',
            description: 'Tutorial\'s publish status',
            example: false,
          },
        },
      },
      TutorialInput: {
        type: 'object',
        required: [
          'title',
        ],
        properties: {
          title: {
            type: 'string',
            description: 'Tutorial\'s title',
            example: 'How to bla',
          },
          description: {
            type: 'string',
            description: 'Tutorial\'s description',
            example: 'This is bla bla bla',
          },
          published: {
            type: 'boolean',
            description: 'Tutorial\'s publish status',
            example: false,
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Error message',
            example: 'Not found',
          },
          internal_code: {
            type: 'string',
            description: 'Error internal code',
            example: 'Invalid parameters',
          },
        },
      },
    },
    responses: {
      '500ServerError': {
        description: 'Server Error',
      },
    },
  },
};
