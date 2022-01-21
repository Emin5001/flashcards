import {createSlice, createStore} from '@reduxjs/toolkit';

const topics = createSlice({
    name: 'topics',
    initialState: {
        topics: {

        },
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: [],
            };
        },
        addQuizId: (state, action) => {
            const {quizId, topicId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        },
    }
});

//exports
export const topicsSlice = createSlice(topics);
export const selectTopics = (state) => state.topics.topics;
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;