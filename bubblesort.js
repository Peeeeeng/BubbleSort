function bubbleSort(arr, comp = null) {
    if (arr.length > 0) {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (!comp && typeof comp === 'function') {
                    if (comp(arr[j], arr[j + 1]) === 1) {
                        let temp = arr[j + 1];
                        arr[j + 1] = arr[j];
                        arr[j] = temp;
                    }
                } else if (arr[j] > arr[j + 1]) {
                    let temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}