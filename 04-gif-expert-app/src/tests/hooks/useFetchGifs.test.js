import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Test hook useFetchGifs', () => {
    
    test('should return init state', () => {

        const { result } = renderHook(() => useFetchGifs( 'Goku' ) );
        const { data, loading } = result.current;

        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
        
    });
    
});
