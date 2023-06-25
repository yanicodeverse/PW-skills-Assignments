def firstUniqueChar(str):
    str_map = {}

    for i in range(0, len(str)):
        if str[i] not in str_map:
            str_map[str[i]] = True
        else:
            str_map[str[i]] = False

    print(str_map)

    for i in range(0, len(str)):
        if str_map[str[i]]:
            return i

    return -1


if __name__ == "__main__":
    s = 'loveleetcode'

    print(firstUniqueChar(s))
