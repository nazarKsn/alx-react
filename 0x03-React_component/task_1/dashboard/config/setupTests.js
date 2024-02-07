import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextDecoder, TextEncoder } from 'util';

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

Enzyme.configure({ adapter: new Adapter() });