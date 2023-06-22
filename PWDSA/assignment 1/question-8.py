def q8(arr, n):
    stack = []

    for i in range(n):
        temp = arr[i]
        j = i + 1

        for j in range(j, n):
            if temp == arr[j]:
                stack.append(arr[j])
                increment = arr[j] + 1
                stack.append(increment)
    return stack


if __name__ == "__main__":
    s = [1, 2, 2,  4]
    n = len(s)

    print(q8(s, n))
