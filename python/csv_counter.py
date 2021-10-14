from pathlib import Path
import csv
from collections import defaultdict, Counter
from operator import itemgetter
import re

csv_path = Path("md_csv_example.csv")

with csv_path.open("r", encoding="utf8")as csv_ex:
    csvfile = csv.reader(csv_ex)
    country_counter = defaultdict(int)
    counter = 0
    for row in csvfile:
        if counter == 0:
            counter += 1
            pass
        else:
            country_counter[row[2]] += 1
    country_counter = dict(country_counter)

sorting_csv = sorted(country_counter.items(), key=itemgetter(1), reverse=True)
print(sorting_csv[:10])



#Counter

li_hable = [('one'),"a","b","c","d","a"]
li_nhable = [['one'],"a","b","c","d","a"]

print(Counter(li_hable))
C = Counter(li_hable)
print(C["Two"])

p = Path("./md_csv_example_w.csv")
r = csv.reader(p.open("r",encoding="utf8"), delimiter=",", quotechar='"')
word_li = []
for i in r:
    word = re.findall(r"\w+",str(i))
    for ii in word:
        word_li.append(ii)
Counter(word_li).most_common(10)
