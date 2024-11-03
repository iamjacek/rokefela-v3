import { defineType, defineArrayMember } from "sanity";

export default {
  title: "Testimonials",
  type: "document",
  name: "testimonials",
  fields: [
    {
      title: "Data",
      type: "array",
      name: "data",
      of: [
        {
          type: "string",
          name: "item",
          title: "name"
        }
      ]
    }
  ]
};
