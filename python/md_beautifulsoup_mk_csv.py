import re
from bs4 import BeautifulSoup
import csv

csv_header = []
csv_content = []
counter = 0

with open("md_beautifulsoup_ex_xml.xml","r",encoding="utf8")as file:
    food_xml = file.read()

soup = BeautifulSoup(food_xml, "lxml")
soup_str = str(soup)

name_all = re.findall(r"(\<)([name]{4})(\>)([\s\S]+?)(\<)(\/)([name]{4})(\>)", soup_str)
price_all = re.findall(r"(\<)([price]{5})(\>)([\s\S]+?)(\<)(\/)([price]{5})(\>)", soup_str)
cal_all = re.findall(r"(\<)([calories]{8})(\>)([\s\S]+?)(\<)(\/)([calories]{8})(\>)", soup_str)


for i,j,k in zip(name_all, price_all, cal_all):
    if counter == 0:
        csv_header = ["kindOf",i[1],j[1],k[1]]
        counter +=1
    content_container = ["food",i[3],j[3],k[3]]
    csv_content.append(content_container)
    
with open("md_beautifulsoup_ex_csv.csv", "w", encoding="utf8")as mkcsv:
    writer = csv.writer(mkcsv, delimiter = ",", quotechar='"')
    writer.writerow(csv_header)
    writer.writerows(csv_content)
