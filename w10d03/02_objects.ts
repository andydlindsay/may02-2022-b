interface IUser {
  name: string,
  password: string,
  age: number,
  id?: number
};

const myObj: IUser = {
  name: 'Alice',
  password: '1234',
  age: 42,
  // id: 1
};

const users: IUser[] = [];
users.push(myObj);
// users.push({});
