def q6(arr):
    for i in range(len(arr)):
        temp = i
        for j in range(i+1, len(arr)):
            if arr[j] == arr[temp]:
                return True
            else:
                continue
    return False


if __name__ == '__main__':
    nums = [1, 2, 3, 1]
    print(q6(nums))
