import { defineType, defineArrayMember } from "sanity";

export default {
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
    },
    {
      name: "isBannerOn",
      title: "Banner Switch",
      type: "boolean"
    },
    {
      name: "bannerText",
      type: "string",
      title: "Banner Text"
    },
    {
      name: "bannerDate",
      type: "datetime",
      title: "Banner End Date"
    },
    {
      name: "endMsg",
      type: "string",
      title: "End Message (if empty banner will disapear)"
    }
  ]
};
