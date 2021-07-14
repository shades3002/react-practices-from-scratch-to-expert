import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('test in useForm', () => {


    const initialForm = {
        name: 'Carlos',
        email: 'carlos@gmail.com'
    };

    test('should return the default form', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current;

        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );

    });

    test('should change the value of the form (name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );
        
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target: { 
                    name: 'name', 
                    value: 'Bella'
                }
            });
        })

        const [ values ] = result.current;

        const { name } = values;
        
        expect( name ).toEqual( 'Bella' );
        expect( values ).toEqual({ ...initialForm, name: 'Bella' });

    });

    test('should set the form with reset', () => {

        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange({target: { name: 'name', value: 'Bella'}});
            reset()
        })

        const [ values ] = result.current;

        const { name } = values;
        
        expect( name ).toEqual( 'Carlos' );
        expect( values ).toEqual( initialForm );
    });
    
});
