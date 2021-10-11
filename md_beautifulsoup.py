from bs4 import BeautifulSoup

with open("md_beautifulsoup_ex_xml.xml", "r", encoding="utf8")as ex:
    ex_xml = ex.read()

soup = BeautifulSoup(ex_xml,"lxml")



food = soup.find_all("food")
food_name = food[0].find("name")
food_sep = soup.find("food")
Food_name = food_sep.find("name")
Food_Name = Food_name.get_text()
print(food)
print(food_name)
print(food_sep)
print(Food_name)
print(Food_Name)