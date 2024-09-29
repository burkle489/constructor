import { type SchemaTypeDefinition } from "sanity";
import { cheatSheetType } from "./cheatSheetType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cheatSheetType],
};
