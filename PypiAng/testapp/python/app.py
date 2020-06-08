import os
import sys


class Hero(object):
    def __init__(self, id, name,):
        self.id = id
        self.name = name

    def __repr__(self):
        return f'''
        {self.id}
        {self.name}
        '''


obj = Hero(2, 'duckface')

try:
    print(obj)
except:
    raise ValueError('you broke you fool')


if __name__ == "__main__":
    print(obj)
else:
    raise EnvironmentError('You broke it you fool, Do not consume this file.')
