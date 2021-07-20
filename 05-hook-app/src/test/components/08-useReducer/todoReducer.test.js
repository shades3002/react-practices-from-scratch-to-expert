import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../fixtures/demoTodos';


describe('test in todoReducer', () => {
    
    test('should return state defauld', () => {
        const state = todoReducer(demoTodos, {});
        expect( state ).toEqual( demoTodos );
    });
    
    test('should add todo', () => {
        const newTodo = {
            id: 3,
            desc: 'test 3',
            done: false
        };

        const action = { 
            type: 'add',  
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, newTodo] );
    });

    test('should the deleted on TODO', () => {
        const action = { 
            type: 'delete',  
            payload: 2
        };
        const state = todoReducer(demoTodos, action);
        expect( state.length ).toBe( 1 );
        expect( state ).toEqual([demoTodos[0]]);
    });
    
    test('should change Toggle todo', () => {
        const action = { 
            type: 'toggle',  
            payload: 2
        };

        const state = todoReducer(demoTodos, action);
        console.log( state );
        expect( state.length ).toBe( 2 );
        expect( state[1].done ).toEqual( true );
        expect( state[0] ).toEqual( demoTodos[0] );
    });

});
