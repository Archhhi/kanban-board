import uuid from 'uuid/dist/v4';

const ADD_CONTACT = 'ADD_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';
const EDIT_CONTACT = 'EDIT_CONTACT';
const ADD_ELEMENT_CONTACT = 'ADD_ELEMENT_CONTACT';
const SET_EVENT = 'SET_EVENT';

let initialState = {
    contactsData: [
        {id: uuid(), name: 'Алекс', email: 'Alex@gmail.com', phoneNumber: '+7(800)-555-35-55', sex: 'male', date: '11.07.2020'},
        {id: uuid(), name: 'Максим', email: 'Maxim@gmail.com', phoneNumber: '+7(400)-552-37-59', sex: 'male', date: '11.07.2020'},
        {id: uuid(), name: 'Анна', email: 'Anna@gmail.com', phoneNumber: '+7(300)-553-35-21', sex: 'female', date: '11.07.2020'},
        {id: uuid(), name: 'Иван', email: 'Ivan@gmail.com', phoneNumber: '+7(200)-545-35-33', sex: 'male', date: '11.07.2020'},
        {id: uuid(), name: 'Жанна', email: 'Zhanna@gmail.com', phoneNumber: '+7(100)-155-35-77', sex: 'female', date: '12.07.2020'},
        {id: uuid(), name: 'Олег', email: 'Oleg@gmail.com', phoneNumber: '+7(600)-521-25-33', sex: 'male', date: '12.07.2020'},
    ],
    dieElements: [],
    contactId: [],
    term: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT: {
            let date = Date.now()

            const formatDate = (date) => {
                return Intl.DateTimeFormat('ru').format(date);
            }
            debugger
            let newContact = {
                id: uuid(),
                name: action.payload.name,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
                sex: action.payload.sex,
                date: formatDate(date)
            };
            return {
                ...state,
                contactsData: [...state.contactsData.filter(elem => !state.dieElements.includes(elem.id)), newContact]
            };
        }
        case ADD_ELEMENT_CONTACT: {
            return {
                ...state,
                contactId: action.id
            };
        }
        case EDIT_CONTACT: {
            let newEditContact = {
                id: state.contactId,
                name: action.payload.name,
                email: action.payload.email,
                phoneNumber: action.payload.phoneNumber,
                sex: action.payload.sex
            };
            return Object.assign({}, state, {
                contactsData: state.contactsData.filter(item => {
                    return item.id !== state.contactId && !state.dieElements.includes(item.id)
                }).concat(newEditContact)
            });
        }
        case DELETE_CONTACT: {
            return {
                ...state,
                dieElements: [...state.dieElements, action.date]
            };
        }
        case SET_EVENT: {
            return {
                ...state,
                term: action.data
            };
        }
        default:
            return state;
    }
}

export const addContact = ({name, email, phoneNumber, sex}) => {
    return {
        type: ADD_CONTACT, payload: {name, email, phoneNumber, sex}
    }
}

export const addElementId = (id) => {
    return {
        type: ADD_ELEMENT_CONTACT, id
    }
}

export const onEditContact = ({name, email, phoneNumber, sex}) => {
    return {
        type: EDIT_CONTACT, payload: {name, email, phoneNumber, sex}
    }
}

export const deleteContact = (date) => {
    return {
        type: DELETE_CONTACT, date
    }
}

export const setHandler = (data) => {
    return {
        type: SET_EVENT, data
    }
}

export default profileReducer;