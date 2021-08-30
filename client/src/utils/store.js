// need to add user data. I believe best bet is to have each card have user: userID

// card = task

const cards = [
  {
    id: "card-1",
    content: "Learning how to cook",
  },
  {
    id: "card-2",
    content: "making a sandwich",
  },
  {
    id: "card-3",
    content: "taking out the trash",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Todo",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "Complete",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2"],
};

export default data;
