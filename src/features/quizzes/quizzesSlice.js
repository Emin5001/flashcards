import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[topicId] = {
                id: id,
                name: name,
                topicId: topicId,
                cardId: cardIds,
            }
            return state;
        },
    }
});

export const addQuizIdAfterQuiz = (quiz) => {
    const { quizId, topicId } = quiz;
    return (dispatch) => {
        dispatch(quizSlice.actions.addQuiz(quiz));
        dispatch(addQuizId({quizId: quizId, topicId: topicId}));
    };
};
export const { addQuiz } = quizSlice.actions;
export const selectQuizzes = state => state.quizzes.quizzes;
export default quizSlice.reducer; 
