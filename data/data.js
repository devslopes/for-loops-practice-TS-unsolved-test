export const bankAccounts = [
  {
    id: 1,
    name: "Susan",
    balance: 100.32,
    deposits: [150, 30, 221],
    withdrawals: [110, 70.68, 120],
  },
  { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] },
  {
    id: 3,
    name: "Joshua",
    balance: 18456.57,
    deposits: [4000, 5000, 6000, 9200, 256.57],
    withdrawals: [1500, 1400, 1500, 1500],
  },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] },
];

export const bankAccountsNoPositiveBalance = [
  { id: 1, name: "Susan", balance: -100.32 },
  { id: 2, name: "Morgan", balance: -1100.0 },
  { id: 3, name: "Joshua", balance: -18456.57 },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: -18 },
];

export const classSeatsFlattened = [
  "Ben",
  "Emma",
  "Sophia",
  "William",
  "Elijah",
  "James",
  "Lucas",
  "Mason",
  "Mia",
  "Liam",
  "Noah",
  "Oliver",
  "Ethan",
  "Harper",
  "Evelyn",
];

export const flatArraysData = [
  ["Yay", "!", "this"],
  ["works", "as", "expected", "!"],
];
