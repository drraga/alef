import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', {
  state: () => ({
    user: {
      id: 'qwerty123asd',
      name: "петр",
      age: 33,
      children: [
        {
          id: 'trewq4321fdsa',
          name: 'максим',
          age: 7,
        },
        {
          id: 'qwerty32145fdas',
          name: 'кира',
          age: 3
        }
      ]
    }}),
    getters: {
      getUser: (state) => state.user
    },
})