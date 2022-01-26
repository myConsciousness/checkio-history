# -*- coding: utf-8 -*-

'''
Almost everyone in the world knows about the ancient game Chess and has at least a basic understanding of its rules. It has various units with a wide range of movement patterns allowing for a huge number of possible different game positions (for example Number of possible chess games at the end of the n-th plies. ) For this mission, we will examine the movements and behavior of chess pawns.

Chess is a two-player strategy game played on a checkered game board laid out in eight rows (called ranks and denoted with numbers 1 to 8) and eight columns (called files and denoted with letters a to h) of squares. Each square of the chessboard is identified by a unique coordinate pair — a letter and a number (ex, "a1", "h8", "d6"). For this mission we only need to concern ourselves with pawns. A pawn may capture an opponent's piece on a square diagonally in front of it on an adjacent file, by moving to that square. For white pawns the front squares are squares with greater row number than the square they currently occupy.

A pawn is generally a weak unit, but we have 8 of them which we can use to build a pawn defense wall. With this strategy, one pawn defends the others. A pawn is safe if another pawn can capture a unit on that square. We have several white pawns on the chess board and only white pawns. You should design your code to find how many pawns are safe.
'''


# 「安全」に関する定義メモ
# 左下方向 -> (x-1, y-1)
# 右下方向 => (x+1, y-1)

_columnsFromSymbol = {'a': 1, 'b': 2, 'c': 3,
                      'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8}
_columnsFromNumber = {0: '_', 1: 'a', 2: 'b', 3: 'c',
                      4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: '_'}


def safe_pawns(pawns):
    safe = 0
    for pawn in pawns:
        x, y = pawn[0], pawn[1]

        lowerLeftPosition = str(
            _columnsFromNumber[_columnsFromSymbol[x] - 1]) + str(int(y) - 1)
        lowerRightPosition = str(
            _columnsFromNumber[_columnsFromSymbol[x] + 1]) + str(int(y) - 1)

        if lowerLeftPosition in pawns or lowerRightPosition in pawns:
            safe += 1

    return safe


if __name__ == '__main__':
    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert safe_pawns({"b4", "d4", "f4", "c3", "e3", "g5", "d2"}) == 6
    assert safe_pawns({"b4", "c4", "d4", "e4", "f4", "g4", "e5"}) == 1
    print("Coding complete? Click 'Check' to review your tests and earn cool rewards!")
