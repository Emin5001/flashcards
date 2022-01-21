import {createSlice} from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const { topicId, name, icon } = action.payload;
            state.topics[topicId] = {
                id: topicId,
                name: name,
                icon: icon,
                quizIds: [],
            };

            console.log(`The id is ${state.topics.id}`);
            console.log(`The name is ${state.topics.name}`);
            console.log(`The icon is ${state.topics.icon}`);
            console.log(`The quizId's are ${state.topics.quizIds}`); //the output for all is undefined.
        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        },
    }
});

//exports
export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;