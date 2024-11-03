import { defineType, defineArrayMember } from "sanity";

export default {
  title: "Pricing",
  type: "document",
  name: "pricing",
  fields: [
    {
      title: "Data",
      type: "array",
      name: "data",
      of: [
        {
          type: "object",
          name: "item",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "subtitle" },
            { type: "string", name: "price" },
            {
              title: "Features",
              type: "array",
              name: "features",
              of: [
                {
                  type: "object",
                  name: "item",
                  fields: [{ type: "string", name: "name" }]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
