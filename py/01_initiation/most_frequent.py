# -*- coding: utf-8 -*-

'''
You have a sequence of strings, and you would like to determine the most frequently occurring string in the sequence.
It can be only one.

Input: non empty list of strings.
Output: a string.
'''


def most_frequent(data):
    """
    determines the most frequently occurring string in the sequence.
    """
    frequency = {}
    for symbol in data:
        if symbol in frequency:
            frequency[symbol] += 1
        else:
            frequency[symbol] = 1

    return max(frequency.items(), key=lambda x: x[1])[0]


if __name__ == "__main__":
    # These "asserts" using only for self-checking and not necessary for auto-testing
    print("Example:")
    print(most_frequent(["a", "b", "c", "a", "b", "a"]))

    assert most_frequent(["a", "b", "c", "a", "b", "a"]) == "a"

    assert most_frequent(["a", "a", "bi", "bi", "bi"]) == "bi"
    print("Done")
