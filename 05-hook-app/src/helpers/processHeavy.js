export const processHeavy = ( iterations ) => {

    for (let index = 0; index < iterations; index++) {
        console.log('process....');
    }

    return `${ iterations } iterations performed `;
}