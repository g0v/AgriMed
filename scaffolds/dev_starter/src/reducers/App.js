import Immutable from 'immutable';
import {setIn, deleteIn, mergeIn, pushIn, concatIn, setNewState, funcMapDefault, subProcess, recursivePushChildrenIds, concatRelatedIds, initCore} from './utils'
import util from './util'
import * as actionClasses from '../constants/ActionClasses';
import * as types from '../constants/ActionTypes';

const PROC_MAP = {
  [actionClasses.UTIL]: util,
}

function initApp(state, action) {
  return initCore(state, action)
}

var funcMap = {
  [types.INIT_APP]: initApp,
}


/**
 * default setup
 */

function appCore(state, action) {
  return funcMap[action.type] && funcMap[action.type](state, action) || funcMapDefault(state, action)
}

export default function app (state=Immutable.Map(), action={}) {
  var myId = state.get('myId', '')

  console.log('reducers.App: myId:', myId)

  switch (action.myClass) {
    case actionClasses.APP:
      return appCore(state, action)
    default:
      if(!myId) return state

      if(PROC_MAP[action.myClass]) {
        var proc = PROC_MAP[action.myClass]
        var newSubState = subProcess(state, action, proc)
        var newEntities = newSubState.get('Entities', Immutable.Map())
        return setNewState(state, myId, newEntities)        
      }

      return funcMapDefault(state, action)
  }
}
