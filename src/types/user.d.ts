interface Person {
  name: string;
  age: number | null;
}

interface User extends Person {
  children?: Person[];
}

type PersonKeys = keyof Person;

interface InputEntity {
  id: keyof Person;
  label: string;
  inputType: string;
}