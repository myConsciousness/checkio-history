# -*- coding: utf-8 -*-

'''
Your mission here is to create a function that gets a tuple and returns a tuple with 3 elements - the first, third and second element from the last for the given array.

One important thing worth pointing out is that you need to use index in order to extract elements from the array. Pay attention, index counting starts from 0, not from 1. Which means that if you need to get the first element from the array elements , you should do elements[0] , and the second element is elements[1] .

Input: A tuple, at least 3 elements long.
Output: A tuple.
'''


def easy_unpack(elements):
    """
        returns a tuple with 3 elements - first, third and second to the last
    """
    # your code here
    return (elements[0], elements[2], elements[-2])


if __name__ == '__main__':
    print('Examples:')
    print(easy_unpack((1, 2, 3, 4, 5, 6, 7, 9)))

    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert easy_unpack((1, 2, 3, 4, 5, 6, 7, 9)) == (1, 3, 7)
    assert easy_unpack((6, 2, 9, 4, 3, 9)) == (6, 9, 3)
    assert easy_unpack((1, 1, 1, 1)) == (1, 1, 1)
    assert easy_unpack((6, 3, 7)) == (6, 7, 3)
    print('Done! Go Check!')
