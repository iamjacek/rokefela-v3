import { defineType, defineArrayMember } from "sanity";

export default {
  title: "Faq",
  type: "document",
  name: "faq",
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
            {
              title: "Content",
              name: "content",
              type: "array",
              of: [{ type: "block" }]
            }
          ]
        }
      ]
    }
  ]
};
