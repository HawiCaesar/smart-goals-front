import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import sinon from 'sinon';
import expect from 'expect';
import axios from "axios"

import {loginUser} from '../../js/actions/authActions';

describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })

    it('Tries to do a successful LOGIN_RESULTS when posting login info', (done) => {

        const resolved = new Promise((resolve, reject) => resolve({"some_value": ""}));
        let sandbox = sinon.sandbox.create()

        sandbox.stub(axios, 'post').returns(resolved)

        let middlewares = [thunk];
        let mockStore = configureMockStore(middlewares);
        let store = mockStore({
            login_error: true,
            error: false,
            user_logged_in: true,
            logging_in: false,
            results: [],
            token:""
        });

        const expectedActions = [
            { type: "TRY_LOGIN" },
            { type: "LOGIN_RESULTS"}
        ];


        store.dispatch(loginUser({"email": "new@gmail.com", "password": "qaz123", "form_error":""}))
            .then(() => {
                const actualActions = store.getActions()
                expect(actualActions[1].type).toEqual(expectedActions[1].type)
                done()
            })


    })
})