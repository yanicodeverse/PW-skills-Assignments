arr = [11, 12, 7, 2, -3, 15, 6, 5, 4, 1, 8, 3]

target = 9

for i in range(len(arr)):
    j = i + 1
    for j in range(j, len(arr)):
        if target == (arr[i] + arr[j]):
            print(i, j)
