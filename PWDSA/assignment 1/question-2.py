def q2(arr, val):
    count = arr.count(val)
    print('NO. OF ', val, ' = ', count)

    temp = val

    k = []

    for temp in arr:
        if temp == val:
            arr.remove(val)
    k += arr
    for i in range(count):
        k.append('_')

    return k


if __name__ == "__main__":
    arr = [3, 2, 2, 3]
    val = 3

    print(q2(arr, val))
