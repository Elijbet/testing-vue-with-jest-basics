import Vue from 'vue';
import FancyHeading from '@/components/FancyHeading.vue';

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();

  return vm.$el;
}

// We use describe to encapsulate numerous unit tests surrounding our
// FancyHeading component.

describe('FancyHeading.vue', () => {

	// Each unit test is created with the it function, firstly providing
	// a description of exactly what we’re testing, followed by a
	// function.

	// In our first assertion, It must have the correct color, we’re
	// mounting our component to a new Vue instance with
	// mountComponentWithProps.

  it('should be the correct color', () => {
    const headingData = mountComponentWithProps(FancyHeading, { color: 'red' });

    // We’re then able to create a variable, styleData which contains
    // what we expect to receive from our test.

    const styleData = headingData.style.getPropertyValue('color');

    console.log(styleData)

    // Finally, we assert that this is true by using expect. If we
    // check our terminal with $ npm run test:unit --watch, we’ll see
    // a PASS for this unit test.

  expect(styleData).toEqual({ color: 'blue' });
  });

  it('should have the correct title', () => {
    const headingData = mountComponentWithProps(FancyHeading, { title: 'Hello, Vue!' });
    const titleData = headingData.textContent;

    expect(titleData).toEqual('Hello, Vue!');
  });
});