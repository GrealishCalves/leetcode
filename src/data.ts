export const properties = {
  id: {
    type: "integer",
    format: "int64",
  },
  name: {
    type: "string",
  },
  address: {
    type: "object",
    properties: {
      street: {
        type: "string",
      },
      city: {
        type: "string",
      },
      country: {
        type: "string",
      },
      coordinates: {
        type: "object",
        properties: {
          lat: {
            type: "number",
          },
          lng: {
            type: "number",
          },
        },
      },
    },
  },
  contacts: {
    type: "array",
    items: {
      type: "object",
      properties: {
        type: {
          type: "string",
        },
        value: {
          type: "string",
        },
      },
    },
  },
};
