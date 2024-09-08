//* interface Imports
import { trelloContent } from "@/interface/interfaces";

export const mockData: trelloContent = {
  columns: [
    {
      id: 1,
      name: "Backglog",
      content: [
        {
          id: 1,
          title: "Create the cards",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          id: 2,
          title: "Place the cards in the columns",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          id: 3,
          title: "Implement card dragging",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          id: 4,
          title: "Implement drop card",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          id: 5,
          title: "Implement drag & drop column",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
      ],
    },
    {
      id: 2,
      name: "Doing",
      content: [
        {
          id: 6,
          title: "Delete a card",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
      ],
    },
    {
      id: 3,
      name: "Done",
      content: [
        {
          id: 7,
          title: "Create boilerplate",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          id: 8,
          title: "Define data model",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
        {
          id: 9,
          title: "Create columns",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi veritatis id perspiciatis, neque saepe",
        },
      ],
    },
  ],
};
