# -*- coding: utf-8 -*-

'''
Split the string into pairs of two characters.
If the string contains an odd number of characters, then the missing second character of the final pair should be replaced with an underscore ('_').

Input: A string.
Output: An iterable of strings.
'''


def split_pairs(text):
    # your code here
    if not even(len(text)):
        text += '_'

    pair = ''
    pairs = []

    count = 1
    for word in text:
        pair += word

        if even(count):
            pairs.append(pair)
            pair = ''

        count += 1

    return pairs


def even(number):
    return number != 0 and number % 2 == 0


if __name__ == '__main__':
    print("Example:")
    print(list(split_pairs('abcd')))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert list(split_pairs('abcd')) == ['ab', 'cd']
    assert list(split_pairs('abc')) == ['ab', 'c_']
    assert list(split_pairs('abcdf')) == ['ab', 'cd', 'f_']
    assert list(split_pairs('a')) == ['a_']
    assert list(split_pairs('')) == []
    print("Coding complete? Click 'Check' to earn cool rewards!")
