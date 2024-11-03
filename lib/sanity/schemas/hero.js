import { defineType, defineArrayMember } from "sanity";

export const hero = {
  title: "Hero",
  type: "document",
  name: "hero",
  fields: [
    {
      name: "mainTitle",
      title: "Main-Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "names",
      title: "Names",
      type: "array",
      of: [
        {
          type: "string",
          name: "name"
        }
      ]
    }
  ]
};
