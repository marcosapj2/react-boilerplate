import { takeEvery, call, put } from 'redux-saga/effects'
import EnvironmentsProvider from 'core/providers/environments'
import { EnvironmentsActions, EnvironmentsTypes } from './environment-action'
import { showErrorMessage } from '../utils'


export function* animateSave() {
  yield put(EnvironmentsActions.showSaved(true))
  yield new Promise(resolve => setTimeout(resolve, 1000))
  yield put(EnvironmentsActions.showSaved(false))
}

export function* getDefaultEnvironment({ workflowId }) {
  yield put(EnvironmentsActions.setLoadingDefaultEnvironment(true))
  const response = yield call(EnvironmentsProvider.getDefaultEnvironment, workflowId)
  yield put(EnvironmentsActions.setEnvironment(response))
  yield put(EnvironmentsActions.setLoadingDefaultEnvironment(false))
}

export function* getEnvironment({ workflowId, id }) {
  yield put(EnvironmentsActions.setLoadingEnvironment(true))
  const response = yield call(EnvironmentsProvider.get, workflowId, id)
  yield put(EnvironmentsActions.setEnvironment(response))
  yield put(EnvironmentsActions.setLoadingEnvironment(false))
}

export function* listEnvironments({ workflowId }) {
  yield put(EnvironmentsActions.setLoadingList(true))
  const response = yield call(EnvironmentsProvider.list, workflowId)
  yield put(EnvironmentsActions.loadedEnvironments(response))
  yield put(EnvironmentsActions.setLoadingList(false))
}

export function* listAllEnviroments() {
  yield put(EnvironmentsActions.setLoadingList(true))
  const response = yield call(EnvironmentsProvider.listAll)
  yield put(EnvironmentsActions.loadedAllEnvironments(response))
  yield put(EnvironmentsActions.setLoadingList(false))
}

export function* saveEnvironment({ data }) {
  yield put(EnvironmentsActions.setLoadingSaved(true))
  try {
    const { workflowId } = data
    yield call(EnvironmentsProvider.save, data)
    yield put(EnvironmentsActions.listEnvironments(workflowId))
    yield put(EnvironmentsActions.clearAllEnvironments())
    yield put(EnvironmentsActions.setSaved())
  } catch (error) {
    yield put(showErrorMessage(error))
  } finally {
    yield put(EnvironmentsActions.setLoadingSaved(false))
  }
}

export function* updateEnvironment({ workflowId, id, data }) {
  yield put(EnvironmentsActions.setLoadingSaved(true))
  try {
    yield call(EnvironmentsProvider.update, workflowId, id, data)
    yield put(EnvironmentsActions.setSaved())
  } catch (error) {
    yield put(showErrorMessage(error))
  } finally {
    yield put(EnvironmentsActions.listEnvironments(workflowId))
    yield put(EnvironmentsActions.setLoadingSaved(false))
  }
}

export function* deleteEnvironment({ workflowId, id }) {
  yield put(EnvironmentsActions.setLoadingDeleted(true))
  try {
    yield call(EnvironmentsProvider.delete, id)
  } catch (error) {
    yield put(showErrorMessage(error))
    yield put(EnvironmentsActions.setLoadingDeleted(false))
    yield put(EnvironmentsActions.listEnvironments(workflowId))
  } finally {
    yield put(EnvironmentsActions.setLoadingDeleted(false))
    yield put(EnvironmentsActions.listEnvironments(workflowId))
  }
}


export default function* root() {
  yield [
    takeEvery(EnvironmentsTypes.GET_ENVIRONMENT, getEnvironment),
    takeEvery(EnvironmentsTypes.GET_ENVIRONMENT_DEFAULT, getDefaultEnvironment),
    takeEvery(EnvironmentsTypes.ENVIRONMENT_LIST, listEnvironments),
    takeEvery(EnvironmentsTypes.ENVIRONMENT_LIST_ALL, listAllEnviroments),
    takeEvery(EnvironmentsTypes.ENVIRONMENT_SAVE, saveEnvironment),
    takeEvery(EnvironmentsTypes.ENVIRONMENT_UPDATE, updateEnvironment),
    takeEvery(EnvironmentsTypes.ENVIRONMENT_DELETE, deleteEnvironment),
    takeEvery(EnvironmentsTypes.SET_SAVED_ANIMATION, animateSave)
  ]
}
