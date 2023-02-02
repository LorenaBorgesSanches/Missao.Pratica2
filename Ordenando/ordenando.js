let swap = (array, origin, destiny) => {
    let temp = array[origin]
    array[origin] = array[destiny]
    array[destiny] = temp
}

let shuffle = (array, count) => {
    for (let i = 0; i < count; i++) {
        let pos1 = getRandomInt(array.length)
        let pos2 = getRandomInt(array.length)
        swap(array, pos1, pos2)
    }

}

let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

let bubbleSort = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
            }
        }
    }
};

let selectionSort = (array) => {
    let n = array.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min != i) {
            swap(array, i, min)
        }
    }
}

let partition = (array, start, end) => {
    const pivotValue = array[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
};

let quickSortSubArray = (array, start, end) => {
    if (start >= end)
        return;

    let index = partition(array, start, end);

    quickSortSubArray(array, start, index - 1);
    quickSortSubArray(array, index + 1, end);
}

let quickSort = (array) => {
    quickSortSubArray(array, 0, array.length - 1)
}