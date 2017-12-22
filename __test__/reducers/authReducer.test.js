
import sinon from 'sinon';
import expect from 'expect';
import localStorage from 'mock-local-storage';
import reducer from '../../js/reducers/authReducer';


describe('Auth reducer', () => {

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

    it('should perform a successful login', () => {

        const {setAuthToken} = require("../../js/utils/tokenUtilities");

        setAuthToken("qaz");

        let expected = {
            login_error: false,
            error: false,
            user_logged_in: true,
            logging_in: false,
            results: {"access_token": 'qaz'},
            token: 'qaz'
        };

        let login_success = {type: "LOGIN_RESULTS", payload: {"access_token": "qaz"} };

        expect(reducer(null, login_success)).toEqual(expected)



    })

});