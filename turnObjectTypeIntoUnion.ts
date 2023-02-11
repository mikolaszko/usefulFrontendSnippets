const userCount = {
  user: 120,
  admin: 12,
  superAdmin: 2,
};

type UserCounts = typeof userCount;

type UnionFromType = {
  [K in keyof UserCounts]: {
    [K2 in K]: number;
  };
}[keyof UserCounts];

const singleUserCount: UnionFromType = {
  superAdmin: 10,
};
