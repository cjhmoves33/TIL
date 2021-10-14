import re
from urllib import request

url_sof = "https://stackoverflow.com/jobs?q=python"
SOF = request.urlopen(url_sof)
SOF_content = SOF.read().decode("utf8")


result_findall_t = re.findall(r"(\<[h3]{2} [class]{5}\=\"[fc]{2}\-[black]{5}\-[700]{3} [fs]{2}\-[body1]{5} [mb4]{3}\">)([\s\S]+?)(\/[h3]{2}\>)", SOF_content)
for i in result_findall_t:
    for ii in i:
        co = re.findall(r"(\<[span]{4}\>)([\s\S]+?)(\<\/[span]{4}\>)", ii)
        if co != []:
            COMPANY = re.findall(r"(\w+)",co[0][1])
            print("".join(COMPANY))
  