
describe('Test demo.test.js', () => {
    
    test('should is true', () => {
    
        const isActive = true;
    
        if(!isActive) {
            throw new Error("it's not active");
        }
    
    });
    
    test('the strings must be the same', () => {
        
        const message = 'Hello';
    
        const messageTwo = `Hello`;
    
        expect( message ).toBe( messageTwo );
    });
});
