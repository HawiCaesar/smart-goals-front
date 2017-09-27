import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import expect from 'expect';

describe('async actions', () => {

    let sandbox;
    let server;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        server = sandbox.useFakeServer();

        // Mock BucketlistService
        jest.mock("../../js/services/bucketlistsService")

    });

    afterEach(() => {
        server.restore();
        sandbox.restore();
    });

    it('should fetch Bucketlists successfully (GET)', (done) => {

        let middlewares = [thunk];
        let mockStore = configureMockStore(middlewares);
        let store = mockStore();

        const expectedActions = [
            {type: "FETCH_BUCKETLISTS"},
            {type: "loading-bar/SHOW"},
            {type: "BUCKETLISTS_RESULTS"}
        ];

        // Using Mocked Bucketlist Service Run get_bucketlists()
        const {get_bucketlists} = require("../../js/actions/bucketlistsActions");

        store.dispatch(get_bucketlists())
            .then(() => {
                const actualActions = store.getActions();
                expect(actualActions[1].type).toEqual(expectedActions[1].type);
                done()
            });
    });

    it('should Fail Fetching Bucketlists (GET)', (done) => {

        let middlewares = [thunk];
        let mockStore = configureMockStore(middlewares);
        let store = mockStore();

        const expectedActions = [
            {type: "FETCH_BUCKETLISTS"},
            {type: "loading-bar/SHOW"},
            {type: "FAILED_FETCHING_BUCKETLISTS"}
        ];

        // Using Mocked Bucketlist Service Run get_bucketlists()
        const {get_bucketlists} = require("../../js/actions/bucketlistsActions");

        store.dispatch(get_bucketlists())
            .then(() => {
                const actualActions = store.getActions();
                expect(actualActions[1].type).toEqual(expectedActions[1].type);
                done()
            })

    })
});