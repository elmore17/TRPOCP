describe('Basic tests', () => {
  test('should pass basic arithmetic', () => {
    expect(1 + 1).toBe(2);
  });
  
  test('should handle string operations', () => {
    expect('hello'.toUpperCase()).toBe('HELLO');
  });
});