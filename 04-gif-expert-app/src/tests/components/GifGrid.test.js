import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');


describe('Test <GifGrid />', () => {

    const category = '';
    
    test('should show correctly', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
    });

    test('should show item when images are loaded from useFetchGifs', () => {
        const gifs = [{
            id: 'Ans',
            url: 'https://localhost/ans.jpg',
            title: 'ans'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'p' ).exists() ).toBe( false );
        expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );
        
    });
        
});
