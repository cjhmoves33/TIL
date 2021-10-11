import configparser

# user_conf = configparser.ConfigParser()

# user_conf["DEFAULT"] = {
#     "human" : "yes",
#     "reference" : "home"
# }

# user_conf["user_1"] = {
#     "name" : "hrvy",
#     "gender" : "male",
#     "reference" : "school",
#     "age" : "10,10.9",
#     "job" : "singer"
# }


# user_conf["user_2"] = {}
# user_conf["user_2"]["name"] = "harry"
# user_conf["user_2"]["gender"] = "male"
# user_conf["user_2"]["age"] = "20"
# user_conf["user_2"]["job"] = "singer"


# user_conf["user_3"] = {}
# user_3 = user_conf["user_3"]
# user_3["human"] = "no"
# user_3["name"] = "moongchi"
# user_3["gender"] = "female"
# user_3["age"] = "2.9"
# user_3["job"] = "dog"

# with open("md_configparser_conf.conf", mode="w", encoding="utf8")as file:
#     user_conf.write(file)
# user_conf.write(open("md_configparser_conf.conf", mode="w", encoding="utf8"))

conf_r = configparser.ConfigParser()
path = "/Users/jaeha/Desktop/study/EX_codes/md_configparser_conf.conf"
conf_r.read(path)
# print(conf_r.sections())
# print ("user_1" in conf_r)
# print("user_4" in conf_r)
# print(list(conf_r["user_3"].items()))
# print(dict(conf_r["user_3"].items()))
# print(tuple(conf_r["user_3"].items()))
# user_2 = conf_r["user_2"]
# print(user_2["name"])
# print(conf_r["user_3"]["human"])
# print(conf_r["user_3"]["reference"])
# print(conf_r["user_3"]["job"])
# print([{k : v} for k ,v  in conf_r["user_1"].items()])
# print(conf_r["user_1"]["age"])
# print(conf_r["user_1"]["age"].split(",")[0])
# print(conf_r["user_1"]["age"].split(",")[1])
# print(int(conf_r["user_2"]["age"]))
# print(float(conf_r["user_3"]["age"]))
# user_1 = conf_r["user_1"]
# user_2 = conf_r["user_2"]
# print(user_1.getboolean("human"))
# print(user_2.getint("age"))
# print(conf_r.getboolean("user_3","human"))
# print(conf_r.getfloat("user_3","age"))

user_1 = conf_r["user_1"]

# print(user_1.get("job"))
# print(user_1.get("job", "teacher"))
# print(user_1.get("like", "food"))
# print(user_1.get("dream", fallback="president"))

# conf_r.remove_section("user_3")
# print(conf_r["user_3"])

