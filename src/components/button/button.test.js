import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "./index";

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

describe('button component', () => {
    it('detect child when button mount', () => {
        act(() => {
            render(<Button>click</Button>, container);
        });

        const button = document.querySelector('[test-id=button]');

        expect(button.innerHTML).toBe('click');
    });

    it('detect correct className when set size props', () => {
        const baseClassName = 'appButton';

        //medium 

        act(() => {
            render(<Button>click</Button>, container);
        });

        expect(document.querySelector('[test-id=button]').className)
            .toBe(`${baseClassName} ${baseClassName}--medium`);

        //small 

        act(() => {
            render(<Button size="small">click</Button>, container);
        });

        expect(document.querySelector('[test-id=button]').className)
            .toBe(`${baseClassName} ${baseClassName}--small`);

        //large

        act(() => {
            render(<Button size="large">click</Button>, container);
        });

        expect(document.querySelector('[test-id=button]').className)
            .toBe(`${baseClassName} ${baseClassName}--large`);
    });
});
