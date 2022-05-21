import { createStore } from 'vuex';
import { v4 as createId } from 'uuid';

const store = createStore({
  state: {
    tasks: [
      {
        id: 'edb73b8a-146f-4723-85bf-6cb73cabe37c',
        title: 'Fazer alguma tarefa',
        createdAt: '20/05/2022',
        hours: '14:46',
        isComplete: false,
      }
    ],
    cities: [],
  },
  getters: {
    // Para fazer computed com os dados do state

    getTasks (state) {
      return state.tasks;
    }
  },
  mutations: {
    //Único meio de fazer alterações no state
    //ADD_TASK(state, payload) {};
    // para puxar store.commit('ADD_TASK', is);

    ADD_TASK(state, payload) {
      if (payload != '') {
        const randomId = createId();
  
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        const dateFormatted = day+"/"+month+"/"+year;

        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        const timeFormatted = hours+":"+minutes+":"+seconds;

        state.tasks.push({ 
          id: randomId,
          title: payload,
          createdAt: dateFormatted,
          hours: timeFormatted,
          isComplete: false
        })
      }
    },
    DELETE_TASK(state, payload) {
      const findTask = state.tasks.filter((task) => task.id !== payload);
      console.log(findTask);

      state.tasks = [...findTask]; //Dúvida
    },
    COMPLETE_TASK(state, payload) {
      const updateTask = state.tasks.map(task => {
        if (task.id === payload) {
          task.isComplete = !task.isComplete;
        }
        return task;
      });

      state.tasks = updateTask;
    }
  },
  actions: {
    //Operações async
    //Principalmente para alterar as mutations
  },
});

export default store;