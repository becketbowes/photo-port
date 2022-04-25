import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe('Nav component', () => {
    //primo testo
    it('renders', () => {
        render(<Nav />);
    });

    //paparazzi examo
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    //emoji testito
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('📸 O Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
        expect(getByTestId('contact')).toHaveTextContent('Contact');
    })
})