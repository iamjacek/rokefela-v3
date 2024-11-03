import { defineType, defineArrayMember } from "sanity";

export default {
  title: "About",
  type: "document",
  name: "about",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
};
