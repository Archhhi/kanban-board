import uuid from 'uuid/dist/v4';

const ADD_CARD_1 = 'ADD_CARD_1';
const ADD_CARD_2 = 'ADD_CARD_2';
const ADD_CARD_3 = 'ADD_CARD_3';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_ELEMENT_ID = 'ADD_ELEMENT_ID';
const ADD_DESCRIPTION = 'ADD_DESCRIPTION';
const EDIT_HEADER = 'EDIT_HEADER';

let initialState = {
    boardData_1: [
        {
            id: uuid(),
            text: 'Пример текста карточки',
            description: ''
        },
        {
            id: uuid(),
            text: 'Пример длинного текста карточки, до такого чтобы он вообще не поместился',
            description: ''
        }
    ],
    boardData_2: [],
    boardData_3: [],

    newText: '',
    elementId: []
}

const boardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD_1: {
            if (action.textCard.length === 0) {
                return state;
            } else {
                let newCard = {
                    id: uuid(),
                    text: action.textCard
                }
                return {
                    ...state,
                    boardData_1: [...state.boardData_1, newCard],
                    newText: ''
                };
            }
        }
        case ADD_CARD_2: {
            if (action.textCard.length === 0) {
                return state;
            } else {
                let newCard = {
                    id: uuid(),
                    text: action.textCard
                }
                return {
                    ...state,
                    boardData_2: [...state.boardData_2, newCard],
                    newText: ''
                };
            }
        }
        case ADD_CARD_3: {
            if (action.textCard.length === 0) {
                return state;
            } else {
                let newCard = {
                    id: uuid(),
                    text: action.textCard
                }
                return {
                    ...state,
                    boardData_3: [...state.boardData_3, newCard],
                    newText: ''
                };
            }
        }
        case ADD_DESCRIPTION: {
            const {payload: newItem} = action;

            if (state.boardData_1.find(item => item.id === newItem.id)) {
                return {
                    ...state,
                    boardData_1: state.boardData_1.map(item => {
                        if (item.id === newItem.id) {
                            return {
                                ...item,
                                description: newItem.newDescription
                            }
                        }
                        return item;
                    }),
                    newDescription: ''
                };
            } else if (state.boardData_2.find(item => item.id === newItem.id)) {
                return {
                    ...state,
                    boardData_2: state.boardData_2.map(item => {
                        if (item.id === newItem.id) {
                            return {
                                ...item,
                                description: newItem.newDescription
                            }
                        }
                        return item;
                    }),
                    newDescription: ''
                };
            } else {
                return {
                    ...state,
                    boardData_3: state.boardData_3.map(item => {
                        if (item.id === newItem.id) {
                            return {
                                ...item,
                                description: newItem.newDescription
                            }
                        }
                        return item;
                    }),
                    newDescription: ''
                };
            }
        }
        case CHANGE_TEXT: {
            return {
                ...state,
                newText: action.text,
            };
        }
        case EDIT_HEADER: {
            const {payload: newItem} = action;
            if (state.boardData_1.find(item => item.id === newItem.id)) {
                return {
                    ...state,
                    boardData_1: state.boardData_1.map(item => {
                        if (item.id === newItem.id) {
                            return {
                                ...item,
                                text: newItem.text
                            }
                        }
                        return item;
                    }),
                };
            } else if (state.boardData_2.find(item => item.id === newItem.id)) {
                return {
                    ...state,
                    boardData_2: state.boardData_2.map(item => {
                        if (item.id === newItem.id) {
                            return {
                                ...item,
                                text: newItem.text
                            }
                        }
                        return item;
                    }),
                };
            } else {
                return {
                    ...state,
                    boardData_3: state.boardData_3.map(item => {
                        if (item.id === newItem.id) {
                            return {
                                ...item,
                                text: newItem.text
                            }
                        }
                        return item;
                    }),
                };
            }
        }
        case ADD_ELEMENT_ID: {
            return {
                ...state,
                elementId: action.id,
            };
        }
        default:
            return state;
    }
}

export const changeText = (text) => {
    return {
        type: CHANGE_TEXT, text
    }
}

export const editHeader = (editData) => {
    return {
        type: EDIT_HEADER, payload: editData
    }
}

export const addCard_1 = (textCard) => {
    return {
        type: ADD_CARD_1, textCard
    }
}
export const addCard_2 = (textCard) => {
    return {
        type: ADD_CARD_2, textCard
    }
}
export const addCard_3 = (textCard) => {
    return {
        type: ADD_CARD_3, textCard
    }
}

export const addDescription = (descriptionData) => {
    return {
        type: ADD_DESCRIPTION, payload: descriptionData
    }
}

export const addElementId = (id) => {
    return {
        type: ADD_ELEMENT_ID, id
    }
}

export default boardReducer;