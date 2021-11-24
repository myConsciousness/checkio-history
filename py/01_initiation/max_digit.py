# -*- coding: utf-8 -*-

'''
You have a number and you need to determine which digit in this number is the biggest.

Input: A positive int.
Output: An Int (0-9).
'''


def max_digit(number):
    # your code here
    max = -1
    for strValue in str(number):
        value = int(strValue)
        if max < value:
            max = value

    return max


if __name__ == '__main__':
    print("Example:")
    print(max_digit(0))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert max_digit(0) == 0
    assert max_digit(52) == 5
    assert max_digit(634) == 6
    assert max_digit(1) == 1
    assert max_digit(10000) == 1
    print("Coding complete? Click 'Check' to earn cool rewards!")
