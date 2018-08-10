function minNumberInRotateArray(rotateArray)
{
    if (rotateArray.length == 0) {
        return 0;
    }
    var i = 0,
        j = rotateArray.length - 1,
        mid = 0;
    while (rotateArray[i] >= rotateArray[j]) {
        if (j - i == 1) {
            mid = j;
            break;
        }
        
        mid = parseInt((i + j)/2);
        
        if(rotateArray[i] == rotateArray[j] && rotateArray[j] == rotateArray[mid]) {
            return findInOrder(rotateArray, i, j);
        }
        
        if (rotateArray[i] <= rotateArray[mid]) {
            i = mid;
        } else {
            j = mid;
        }
    }
    return rotateArray[mid];
    
}

function findInOrder(a, in1, in2) {
    var k = a[in1];
    for (var i = in1 + 1; i < in2; i ++) {
        if (a[i] < k) {
            k = a[i];
        }
    }
    return k;
}