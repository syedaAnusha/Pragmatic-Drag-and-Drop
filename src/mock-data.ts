//* interface Imports
import { trelloContent } from "@/interface/interfaces";

export const mockData: trelloContent = {
  columns: [
    {
      col_id: "column_1",
      col_title: "Backglog",
      cards: [
        {
          card_id: "1",
          card_title: "Create the cards",
          card_description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          card_id: "2",
          card_title: "Place the cards in the columns",
          card_description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          card_id: "3",
          card_title: "Implement card dragging",
          card_description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          card_id: "4",
          card_title: "Implement drop card",
          card_description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          card_id: "5",
          card_title: "Implement drag & drop column",
          card_description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
      ],
    },
    {
      col_id: "column_2",
      col_title: "Doing",
      cards: [
        {
          card_id: "6",
          card_title: "Delete a card",
          card_description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
      ],
    },
    {
      col_id: "column_3",
      col_title: "Done",
      cards: [
        {
          card_id: "7",
          card_title: "Create boilerplate",
          card_description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          card_id: "8",
          card_title: "Define data model",
          card_description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          card_id: "9",
          card_title: "Create columns",
          card_description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
      ],
    },
  ],
};
