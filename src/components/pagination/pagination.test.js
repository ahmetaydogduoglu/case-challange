import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Pagination from "./index";

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

describe('pagination component', () => {
    it('no Data View check when data empty', () => {
        act(() => {
            render(
                <Pagination
                    data={[]}
                    limit={5}
                    noDataView={<span>no data</span>}
                    renderData={item => <div>{item.linkName}{item.link}</div>}
                />, container);
        });

        expect(document.querySelector('[test-id=pagination]').getElementsByTagName('span').item(0).innerHTML)
            .toBe('no data');
    });

    it('check render components with mock data', () => {
        const mockData = [
            { linkName: 'facebook', link: 'http://facebook.com' },
            { linkName: 'twitter', link: 'http://twitter.com' }
        ];

        act(() => {
            render(
                <Pagination
                    data={mockData}
                    limit={5}
                    noDataView={<span>no data</span>}
                    renderData={item => <div key={item.link} id="link-row">{item.linkName}{item.link}</div>}
                />, container);
        });

        expect(document.querySelector('[id=link-row]').innerHTML)
            .toBe(`${mockData[0].linkName}${mockData[0].link}`);
    })
});
