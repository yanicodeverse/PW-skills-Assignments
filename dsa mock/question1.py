def moveZeros(arr):
    n = len(arr)
    count = arr.count(0)
    temp = 0

    for temp in arr:
        if temp == 0:
            arr.remove(temp)

    for i in range(count):
        arr.append(0)

    return arr


if __name__ == "__main__":
    nums = [0, 1, 0, 3, 12]
    print(moveZeros(nums))
