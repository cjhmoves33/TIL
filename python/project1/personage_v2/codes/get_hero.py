from bs4 import BeautifulSoup

from pathlib import Path

import get_map

import requests

import json

import time



def finder() -> None:

    while 1 != False:

        selector = str(input("take a menu : ").lower())


        if selector == "exit":

            break

        elif selector == "list":

            anniversary_path = Path("/Users/jaeha/Desktop/personage_v2/datas/hero_list.json")

            with anniversary_path.open("r")as ann:

                anniversary_li = json.load(ann)
                anniversary_list = "\n".join(anniversary_li.keys())
                print(anniversary_list)


            while 1 != False:

                character = str(input("select character : ").lower())


                try:

                    if character == "exit":

                        break

                    elif character not in anniversary_li.keys():

                        raise KeyError("Not Found Anniversary..🙀")

                    else:

                        def get_hr(hero):

                            response = requests.get(f"https://www.google.com/doodles/{hero}")
                            doodles = BeautifulSoup(response.text, "html.parser")

                            card = doodles.find("ul", id="doodle-cards")
                            today = card.find("div", class_="time").string
                            event = card.find("h2").string
                            content = card.find("li", id="blog-card").get_text()

                            return today, event, content


                        hero_ref = anniversary_li[character]["ref"]

                        time.sleep(1)
                        print("Almost FIND!! 🧐")
                        today, event, content = get_hr(hero_ref)

                        hero_loc = anniversary_li[character]["loc"]
                        img_file = anniversary_li[character]["img"]


                        print("Let's GO!! 🚀")
                        time.sleep(1)


                        get_map.mapper(today, event, content, hero_loc, img_file)


                except KeyError as Kerr:

                    print(Kerr)

                    continue
    


    # return today, event, content, hero_loc



if __name__ == "__main__":
    finder()
