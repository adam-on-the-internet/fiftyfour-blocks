import {Block} from "./Block.model";

export interface BlockDeck {
  _id: string;
  title: string;
  type: string;
  deckRule: string;
  description: string;
  blocks: Block[];
  tags: string[];
}
