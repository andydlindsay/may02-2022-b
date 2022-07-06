interface IContainer<T, C> {
  name: string;
  contents: T;
  friends?: C[];
}

const stringContainer: IContainer<string, string> = {
  name: 'string container',
  contents: 'hello!'
};

const numberContainer: IContainer<number, boolean> = {
  name: 'number container',
  contents: 100
};
