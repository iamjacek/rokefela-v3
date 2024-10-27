import { defineType, defineArrayMember } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
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
        defineArrayMember({
          type: "string",
          name: "name"
        })
      ]
    }
  ]
});
