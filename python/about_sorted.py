from operator import itemgetter, attrgetter

score = [
    {"name":"kevin", "math":60, "ko":70, "en":80},
    {"name":"brian", "math":50, "ko":80, "en":30},
    {"name":"nicolas", "math":90, "ko":70, "en":90}
]

avr_score = list()
for i in score:
    name = i["name"]
    score = (i["math"], i["ko"], i["en"])
    per_score = f"{sum(score)/3:.2f}"
    n_s = tuple([name, float(per_score)])
    avr_score.append(n_s)


class Student:
    def __init__(self, name, grade, age) -> None:
        self.name = name
        self.grade = grade
        self.age = age
    
    def __repr__(self) -> str:
        return repr((self.name, self.grade, self.age))

mrk = Student("K", "A", 15)
mrG = Student("G", "B", 15)
mrH = Student("H", "A", 14)
mrI = Student("I", "C", 14)

s_list = [mrk, mrG, mrH, mrI]


rating_sort = sorted(avr_score, key=lambda x:x[1], reverse=True)
rating_sort_gttr = sorted(avr_score, key=itemgetter(1), reverse=True)
age_sort = sorted(s_list, key=attrgetter("age"), reverse= True)

print(rating_sort_gttr)
print(age_sort)