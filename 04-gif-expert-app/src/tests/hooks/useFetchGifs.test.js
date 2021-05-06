import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Test hook useFetchGifs', () => {
    
    test('should return init state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Goku' ) );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
        
    });
    
    test('should return a array the images and loading in false', async () => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Goku' ) );

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    });
    
});
