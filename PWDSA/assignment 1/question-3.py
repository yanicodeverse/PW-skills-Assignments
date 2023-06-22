def q3(arr, size, x):

    low = 0
    high = size-1
    mid = 0

    while (low <= high):
        mid = (low + high) // 2
        if (arr[mid] == x):
            return mid
        elif (arr[mid] > x):
            high = mid - 1
        elif (arr[mid] < x):
            low = mid + 1
        else:
            pass
    return -1


if __name__ == '__main__':
    arr = [2, 3, 4, 5, 6, 7, 8, 9]
    x = 10
    minimum = min(arr)
    n = len(arr)
    result = q3(arr, n, x)
    if result == -1:
        if x < minimum:
            print("Element can be inserted at index: ", 0)
        elif x > minimum:
            index = 0
            for i in range(n):
                if x > arr[i]:
                    index = i
            index += 1
            print("Element can be inserted at index: ", index)
        else:
            pass

    else:
        print('Element found at index: ', result)
