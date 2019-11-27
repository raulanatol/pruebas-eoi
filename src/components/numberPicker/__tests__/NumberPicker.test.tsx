import { shallow } from "enzyme";
import React from "react";
import { NumberPicker } from "../NumberPicker";

describe("NumberPicker", () => {
  describe("render", () => {
    test("Deberia renderizar un Button", () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.exists('button')).toBeTruthy();
    });
    test("Deberia renderizar un Button con un texto de un +", () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('button').at(0).text()).toBe('+');
    });
    test("Deberia renderizar otro button con un texto de un -", () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('button').at(1).text()).toBe('-');
    });
    test("Deberia renderizar un h1 con el texto 0", () => {
      const wrapper = shallow(<NumberPicker/>);
      expect(wrapper.find('h1').text()).toBe('0');
    });
    test("Deberia renderizar un 1 cuando se haya hecho un click en el boton +", () => {
      const wrapper = shallow(<NumberPicker/>);
      wrapper.find("button").at(0).simulate("click");
      expect(wrapper.find("h1").text()).toBe("1");
    });
    test("Deberia renderizar un -1 cuando se haya hecho un click en el boton -", () => {
      const wrapper = shallow(<NumberPicker/>);
      wrapper.find("button").at(1).simulate("click");
      expect(wrapper.find("h1").text()).toBe("-1");
    });
  });
});
