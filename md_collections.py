import collections

#################### deque ####################
# deq_1 = collections.deque()
# deq_1.append("first")
# deq_1.append(1)
# deq_1.insert(0,"zero")
# deq_1.extend([2,3,4,"five"])
# a = collections.deque({"name":"jaeha", "age":25}.items())
# deq_1.extendleft(a)
# deq_1.insert(0, "onetwo")
# deq_1.insert(0, ["one","two"])
# deq_1.rotate(-3)

#################### defaultdict ####################
dict_z = collections.defaultdict(lambda : 0)
dict_i = collections.defaultdict(int)
dict_l = collections.defaultdict(list)
dict_s = collections.defaultdict(set)

s = "hello, im ironman.thanks"
for i in s:
    dict_i[i] += 1
s = sorted(dict_i.items(), key=lambda x: x[1], reverse=True)

l = [('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
for k, v in l:
    dict_l[k].append(v)

d = [{"nm":"bakk", "kda":3,}, {"nm":"bakk", "kda":3,}, {"nm":"aksi", "kda":7}, {"nm":"jlt", "kda":4}]
for i in d:
    for k, v in i.items():
        dict_s[k].add(v)
print(dict_l)
print(s)
print(dict_s)