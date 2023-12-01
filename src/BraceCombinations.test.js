/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import BraceCombinations from './BraceCombinations';

describe('BraceCombinations', () => {
    it('renders without crashing', () => {
        shallow(<BraceCombinations />);
    });

    it('generates combinations correctly', () => {
        const wrapper = shallow(<BraceCombinations />);
        const instance = wrapper.instance();

        // Mock setState to avoid rendering the component
        jest.spyOn(instance, 'setState');

        // Set the number of pairs
        instance.setState({ n: 2 });

        // Trigger the generation
        instance.handleGenerate();

        // Retrieve the state
        const state = instance.state;

        // Assert that braceCombinations state is generated correctly
        expect(state.braceCombinations).toEqual(['(())', '()()']);
    });
});
