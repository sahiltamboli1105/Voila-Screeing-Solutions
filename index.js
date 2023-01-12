function minPlanes(arr) {
    let planes = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < i + 1) {
            planes++;
            arr[i+1] = arr[i+1] + arr[i] - (i + 1);
        } else {
            arr[i+1] = arr[i+1] + arr[i] - 1;
        }
    }
    if (arr[arr.length - 1] < arr.length - 1) return -1;
    return planes;
}