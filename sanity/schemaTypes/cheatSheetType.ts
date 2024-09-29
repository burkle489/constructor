import { defineField, defineType } from "sanity";

export const cheatSheetType = defineType({
  name: "cheat-sheet",
  title: "Cheat Sheet",
  type: "document",
  fields: [
    defineField({
      title: "Cheat Sheet Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      title: "Summary",
      name: "image",
      type: "image",
    }),
  ],
});
