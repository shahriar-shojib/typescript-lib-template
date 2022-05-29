import { hello } from '.';

describe('hello world', () => {
	it('should return hello world', () => {
		expect(hello()).toEqual('hello world');
	});
});
