import React from "react";
import App from "./App";
import { shallow } from 'enzyme';

describe("<App />", () => {
    it("renders an <App /> component", () => {
        const app = shallow(<App />);
        expect(app).toBeDefined(1);
    });
    it("renders an <App /> component checking for App-header", () => {
        const app = shallow(<App />);
        expect(app.find("App-header")).toBeDefined();
    });
    it("renders an <App /> component checking for App-body", () => {
        const app = shallow(<App />);
        expect(app.find("App-body")).toBeDefined();
    });
    it("renders an <App /> component checking for App-footer", () => {
        const app = shallow(<App />);
        expect(app.find("App-footer")).toBeDefined();
    });
});