import os
from pathlib import Path
import pickle


data_dir = "/Users/jaeha/Desktop/personage/person_data"
path_data = Path(data_dir) 
path_personage_list = Path(path_data, "personage_list.pickle")


def personage_controller(log_file):

    log_file.info("===== 'controller' 접근 =====")
    if not os.path.isfile(path_personage_list):
        log_file.debug("===== 인물 리스트 생성 =====")
        with path_personage_list.open("w")as file:
            file.write("")
    
    
    starter = True
    while starter != False:
        input_menu = str(input("\ncontroller\nadd\nlist\ninput : ")).lower() 
                
        if input_menu == "add":
            log_file.info("===== 'add' 메뉴접근 =====")
            while True:
                personage_name = input("add name you want : ").lower()
                if personage_name == "exit":
                    log_file.info("===== 'add' 메뉴 퇴장 =====")
                    break
                with path_personage_list.open("ab")as list_file_a:
                    log_file.debug(f"===== 인물명 추가 : {personage_name} =====")
                    pickle.dump(personage_name, list_file_a) 
                continue
            continue
        elif input_menu == "list":
            log_file.info("===== 'list' 메뉴접근 =====")
            try:
                with path_personage_list.open("rb")as list_file_r:
                    loaded = list()
                    while True: 
                        try:
                            load_list = pickle.load(list_file_r)
                        except EOFError :
                            break
                        loaded.append(load_list)
                    print(loaded) 
            except FileNotFoundError as err:
                log_file.critical("SxxT.. why no file?")
                print( "no exists file" ,err)
                continue
        elif input_menu == "exit":
            log_file.info("===== 'controller' 퇴장 =====")
            print("Thanks for come!")
            break
