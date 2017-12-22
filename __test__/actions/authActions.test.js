import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import expect from 'expect';
import axios from "axios"

import {loginUser} from '../../js/actions/authActions';

describe('Async AuthActions', () => {

    let sandbox;
    let server;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        server = sandbox.useFakeServer();
    });

    afterEach(() => {
        server.restore();
        sandbox.restore();
    });


    it('should perform a successful login', (done) => {

        const resolved_success = new Promise((resolve, reject) => resolve({"some_value": ""}));

        sandbox.stub(axios, 'post').returns(resolved_success);

        const expectedActions = [
            {type: "TRY_LOGIN"},
            {type: "LOGIN_RESULTS"}
        ];

        let middlewares = [thunk];
        let mockStore = configureMockStore(middlewares);
        let store = mockStore();

        store.dispatch(loginUser({"email": "new@gmail.com", "password": "qaz123"}))
            .then(() => {
                const actualActions = store.getActions()
                expect(actualActions[1].type).toEqual(expectedActions[1].type);
                done()
            })

    });

    it('should perform a failed login', (done) => {

        const resolved_failed = new Promise((resolve, reject) => reject({"some_value2": ""}));

        sandbox.stub(axios, 'post').returns(resolved_failed);

        let middlewares = [thunk];
        let mockStore = configureMockStore(middlewares);
        let store = mockStore();

        const expectedActions = [
            {type: "TRY_LOGIN"},
            {type: "LOGIN_REJECTED"}
        ];

        store.dispatch(loginUser({"email": "new@gmail.com", "password": "qaz123456"}))
            .then(() => {
                const actualActions = store.getActions()
                expect(actualActions[1].type).toEqual(expectedActions[1].type)
                done()
            })

    })
})