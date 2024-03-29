# -*- coding: utf-8 -*-

'''
You have a positive integer.
Try to find out how many digits it has?

Input: A positive Int
Output: An Int.
'''


def number_length(number):
    # your code here
    return len(str(number))


if __name__ == '__main__':
    print("Example:")
    print(number_length(10))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert number_length(10) == 2
    assert number_length(0) == 1
    assert number_length(4) == 1
    assert number_length(44) == 2
    print("Coding complete? Click 'Check' to earn cool rewards!")
