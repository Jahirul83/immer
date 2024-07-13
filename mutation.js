import {produce} from "immer"



let demonSlayer = ['tanjiro','rengoku','tengen','musuri','shinubu','openai'];

// const hasiras = ['zenetsu','inuske',...demonSlayer];

const nextState = produce(demonSlayer, draft => {
    draft.push('zenetsu');
})
console.log(nextState);
