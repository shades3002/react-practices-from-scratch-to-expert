import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('test in useFetch', () => {

    test('should return the default information', () => {
        
        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1')) ;
        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );
    });
    
    test('should have the correct information, loading false, error false', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1')) ;
        
        await waitForNextUpdate({ timeout: 1500 });

        const { data, loading, error } = result.current;

        expect( data.length ).toBe( 1 );
        expect( loading ).toBe( false );
        expect( error ).toBe( null );
    });

    test('should show the error', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://regres.in/apid/users?page=1')) ;
        
        await waitForNextUpdate({ timeout: 5000 });

        const { data, loading, error } = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( false );
        expect( error ).toBe( 'Error loading data' );
    });
    
});
