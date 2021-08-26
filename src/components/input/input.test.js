import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Input from "./index";

let container = null;

beforeEach(() => {
    container = document.createElement('div');

    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);

    container.remove();
    container = null;
})

describe('input component', () => {
    it('check label when mount input', () => {
        const onChange = jest.fn();

        act(() => {
            render(<Input label="phone number" value="05312321212" onChange={onChange}/>, container);
        });

        expect(document.querySelector('[test-id=input-label]').innerHTML).toBe('phone number');
        expect(document.querySelector('[test-id=input]').value).toBe('05312321212');
    });
});
