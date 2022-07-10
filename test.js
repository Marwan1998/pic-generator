const chai = window.chai;
const expect = chai.expect;

describe('getarray', () => {
    it('should return an array size equal to col*row sorted asc', ()=>{

        let row = 5, col = 3;
        const testArray = Array.from({length: (row*col)}, (_, i) => i + 1);
        // testArray.forEach((e, i) => e!=arr[i]? console.log("Failed"):null);
        expect(getarray(row, col)).to.deep.equal(testArray);

    })
})