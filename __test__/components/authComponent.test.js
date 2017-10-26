import React from 'react';
import {expect} from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import AuthComponent from "../../js/components/authComponent"

describe('AuthComponent component tests', () => {

    it('renders 5 major elements', () => {
        const wrapper = shallow((
            <AuthComponent onClick={() => {}}
                           onChange={() => {}}
                           password=""
                           form_errors=""
                           email=""
                           auth_details={ {login_error: false}}>

            </AuthComponent>
        ));

        expect(wrapper.find('.loginform').children()).to.have.length(5);
    });

    it('renders 2 input tags & 1 button', () => {
        const wrapper = shallow((
            <AuthComponent onClick={() => {}}
                           onChange={() => {}}
                           password=""
                           form_errors=""
                           email=""
                           auth_details={ {login_error: false}}>

            </AuthComponent>
        ));

        expect(wrapper.find('input')).to.have.length(2);
        expect(wrapper.find('button')).to.have.length(1);
    })
});
