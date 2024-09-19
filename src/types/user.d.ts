interface Person {
  id: string;
  name: string;
  age: number | null;
}

interface Child extends Person{}
interface User extends Person {
  children?: Child[];
}

type PersonKeys = keyof Person;

interface InputEntity {
  type: keyof Person;
  label: string;
  entityType: 'user' | 'child';
  inputType: string;
}