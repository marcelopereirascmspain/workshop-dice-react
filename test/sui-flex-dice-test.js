import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {createComponent} from './utilities';
import expect from 'expect';
import FlexDice from '../src/sui-flex-dice';

describe('sui-flex-dice component test suite', function () {

  describe('loading', function() {
    it('component is loaded properly', function () {
      expect(FlexDice).toNotBe(undefined);
    });
  });

  describe('sui-flex-dice renders properly', function () {
    let component;

    beforeEach(() => {
      component = createComponent(FlexDice);
    });

    afterEach(() => {
      component = null;
    });

    it('renders correctly', function() {
      expect(component).toExist();
    });
  });
});
