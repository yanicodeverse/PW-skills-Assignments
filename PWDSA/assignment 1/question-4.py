def q4(arr):
    string = ''
    intForm = 0
    n = len(arr)
    result = []

    for i in range(n):
        string += str(arr[i])

    intForm = int(string)
    intForm += 1
    string = ''

    string = str(intForm)

    for character in string:
        result.append(int(character))

    return result


if __name__ == "__main__":
    arr = [1, 2, 3]
    print(q4(arr))














