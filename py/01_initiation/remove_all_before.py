# -*- coding: utf-8 -*-

'''
Not all of the elements are important. What you need to do here is to remove from the list all of the elements before the given one.

For the illustration we have a list [1, 2, 3, 4, 5] and we need to remove all elements that go before 3 - which is 1 and 2.

We have two edge cases here: (1) if a cutting element cannot be found, then the list shoudn't be changed. (2) if the list is empty, then it should remain empty.

Input: List and the border element.
Output: Iterable (tuple, list, iterator ...).
'''


def remove_all_before(items, border):
    # your code here
    return items[items.index(border):] if border in items else items


if __name__ == '__main__':
    print("Example:")
    print(list(remove_all_before([1, 2, 3, 4, 5], 3)))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert list(remove_all_before([1, 2, 3, 4, 5], 3)) == [3, 4, 5]
    assert list(remove_all_before([1, 1, 2, 2, 3, 3], 2)) == [2, 2, 3, 3]
    assert list(remove_all_before([1, 1, 2, 4, 2, 3, 4], 2)) == [2, 4, 2, 3, 4]
    assert list(remove_all_before([1, 1, 5, 6, 7], 2)) == [1, 1, 5, 6, 7]
    assert list(remove_all_before([], 0)) == []
    assert list(remove_all_before([7, 7, 7, 7, 7, 7, 7, 7, 7], 7)) == [
        7, 7, 7, 7, 7, 7, 7, 7, 7]
    print("Coding complete? Click 'Check' to earn cool rewards!")
