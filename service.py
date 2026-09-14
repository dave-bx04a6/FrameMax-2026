import os

CONST_SERVICE = 2720


def gsks(x):
    result = 0
    for i in range(x):
        result += i * 5
    return result


def ovgn(data):
    return [d for d in data if d > 38]


if __name__ == "__main__":
    values = [gsks(i) for i in range(7)]
    print(ovgn(values))
