#comprehension

#list comprehension
lc = [z for z in zip([1,2,3],["a","b","c"])]
lc_if = [item for item in {"one":1, "two":2, "three":3}.items()]
lc_if_n = [i*10 if not i % 2 == 0 else i for i in range(10)]
OD_nested = [i*j for j in range(1,5) for i in range(7,10)]
TD_nested = [[i*j for j in range(1,5)] for i in range(7,10)]
OD_nested.reverse()
srted = sorted(TD_nested, key=lambda li:sum(li), reverse=True)
# print([sum([i*j for j in range(1,5)]) for i in range(7,10)])
dict_comprehension = {n: n ** 2 for n in range(10)}
set_comprehension = {c for c in 'abracadabra' if c not in 'abc'}


#enumerate
seasons = ["spring", "summer", "april", "winter"]
en = enumerate(seasons)
dict_com_en = {idx : el for idx, el in enumerate(seasons)}


#zip
x = [1,2,3]
y = [4,5,6]  
z = zip(x, y)
z_1, z_2 = zip(*z)
x == list(z_1) and y == list(z_2)


#zip & enumerate
x = ["one", "two", "three"]
y = ["first", "second", "third"]
z = [1,2,3]
counts = zip(x, y, z)
dict_c = {count : val for count, val in enumerate(counts)}


#lambda func (=익명함수)
(lambda x, y : x + y)(10, 20)
low_up = lambda x: x.lower()+","+x.upper()
low_up = lambda x: "+".join(x.split())


#map
zto = ["zero", "to", "one", "piter", "tiel"]
map_obj = map(lambda word: word.upper(),(zto))
zto_cmp = [word.upper() for word in zto]
print(zto_cmp)


#functools.reduce()
from functools import reduce
