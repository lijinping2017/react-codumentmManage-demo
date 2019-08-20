import { takeEvery, put } from 'redux-saga/effects';

function * watchGg() {
	console.log("watch gg");
	yield takeEvery("gg", doGg);
}

function* doGg() {
	yield put({type: "add"});
}

export default [
    watchGg,
];
