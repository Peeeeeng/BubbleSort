describe('Bubble Sort', function() {
    it('handles an empty array', function() {
        expect(bubbleSort([])).toEqual([]);
    });

    it('handles an array with only one item', function() {
        let array = [10];
        spyOn(array, "sort");
        expect(array.sort.callCount).toEqual(0);

        expect(bubbleSort(array).toEqual([10]));
    });

    it('handles an array which is already sorted', function() {
        let array = [1, 2, 3, 5, 6, 9, 10];
        spyOn(array, 'sort');
        expect(array.sort.callCount).toEqual(0);

        expect(bubbleSort(array).toEqual([1, 2, 3, 5, 6, 9, 10]));
    });

    it('handles an array which is not sorted yet', function() {
        let array = [5, 1, 2, 7, 3, 9, 11, 60, 3, 4, 1000, 0];
        spyOn(array, 'sort');
        expect(array.sort.callCount).toEqual(0);

        expect(bubbleSort(array).toEqual([0, 1, 2, 3, 3, 4, 5, 7, 9, 11, 60, 1000]));
    });

    it('A case of trying to sort a String array', function() {
        let array = [5, 1, 2, 7, 3, 9, 11, 60, 3, 4, 1000, 0];
        spyOn(array, 'sort');
        expect(array.sort.callCount).toEqual(0);

        expect(bubbleSort(array).toEquals(['a', 'a', 'c', 'd', 'h']));
    });

    /*it('', function(){
      let array = randomArray();
      spyOn(array, 'sort');
      expect(array.sort).toHaveBeenCalledTimes(0);

      for(let i = 0; i < array.length -2; i++){
        // test a[i] <= a[i+1];
      }
    });

    function randomArray(n){
      //returns a random
    }*/
});