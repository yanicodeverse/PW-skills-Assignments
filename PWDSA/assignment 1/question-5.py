nums1 = [1, 2, 3]
nums2 = [2, 5, 6]

nums1 = nums1 + nums2


for i in range(1, len(nums1)):

    j = i - 1
    temp = nums1[i]
    while (j >= 0) and (nums1[j] > temp):
        nums1[j + 1] = nums1[j]
        j -= 1
        nums1[j+1] = temp


print(nums1)
