interface IPotentialUser {
  username: string;
  password: string;
}

const login = (user: IPotentialUser): boolean => {
  // user.moreStuff;
  return false;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  moreStuff: 'hello'
};

login(myUser);
