const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(1, 2);

    expect(result).toBe(3);
    // if(result != 3) {
    //     throw new Error('Expected result 3');
    // }
});

test('Should greet name variable', () => {
    const result = generateGreeting('Aritra');
    expect(result).toBe('Hello Aritra');
})

test('Should greet if no name variable', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
})