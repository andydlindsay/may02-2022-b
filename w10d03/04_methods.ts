interface IDog {
  name: string;
  dinodog: boolean;
  updog: boolean;
  attackMailPerson: (nameOfMailPerson: string) => boolean;
}

const myDog: IDog = {
  name: 'Rufus the Dawg',
  dinodog: true,
  updog: false,
  attackMailPerson: (nameOfMailPerson) => false
};
