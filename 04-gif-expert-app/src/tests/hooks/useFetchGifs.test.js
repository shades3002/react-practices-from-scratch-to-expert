import { useFetchGifs } from "../../hooks/useFetchGifs";



describe('Test hook useFetchGifs', () => {
    
    test('should return init state', () => {

        const { data, loading } = useFetchGifs( 'Goku' );

        console.log(data, loading);
        
    });
    
});
