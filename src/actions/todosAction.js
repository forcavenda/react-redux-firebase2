import React from 'react';

import { TODO_SEARCHED, 
         TODO_CLEAR,
         CHANGE_DESCRIPTION, 
         MARK_AS_DONE, 
         MARK_AS_PENDING, 
         REMOVE } from '../constants/actionTypes';         
         
      

import axios from 'axios'

const URL = 'https://api-project-247816085092.firebaseio.com/todo';


export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}.json`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const changeDescription = event => {
    return {
        type: CHANGE_DESCRIPTION,
        payload: event.target.value
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}.json`, {...todo, done: false})
        .then(resp => dispatch(search()))
    }
}

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `.json?task=${description}` : '.json';
        const request = axios.get(`${URL}${search}`)
            .then(resp => dispatch({type: TODO_SEARCHED, payload: resp.data}))
    }
}

export const remove = (todo) => {
    return dispatch => {
      axios.delete(`${URL}/${todo._id}.json`)
      .then(resp => dispatch(search()))
    }
}



export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}


export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}


