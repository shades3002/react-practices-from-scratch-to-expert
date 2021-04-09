import { getUser, getUserActive } from "../../base/05-functions";



describe('Test 05 fuctions', () => {

    // getUser
    test('should object return - method getUser', () => {

        const userTest = {
            uid: 'ABS22222',
            userName: 'shades3002'
        };

        const user = getUser();

        expect( userTest ).toEqual( user );
    });

    // getUserActive
    test('should object return - method getUserActive', () => {
        
        const userActiveTest = {
            uid: 'ABS22222',
            userName: 'acuaman'
        };

        const name = 'acuaman';

        const userActive = getUserActive(name);

        expect( userActiveTest ).toEqual( userActive );
    });

});
