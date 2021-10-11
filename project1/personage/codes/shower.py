
import pickle
from pathlib import Path

path_person_data = "/Users/jaeha/Desktop/personage/person_data"
#person_data 경로
path_p = "/Users/jaeha/Desktop/personage/person_data/personage_list.pickle"
#인물명이 입력된 피클파일의 경로 
path_pickle = Path(path_p)
#임포트한 Path함수를 사용하여 경로로서 사용가능하게 만듦."str로 인자를 넣어주면 됨."


def personage_shower(log_file):
    #인물명 이름 입력시 피클을열어서 인물명을 가져온 후 인물명이 있으면 인물에 맞는 txt파일을 열어준다.
    log_file.info("===== 'shower' 접근 =====")

    maybe_name = str(input("Please Enter Personage Name you want show  : ")).lower()
    #인물명이든 피클에 인물명이 전부 소문자로 저장 돼어있다.(보기 편하기때문)
    log_file.info(f"===== '{maybe_name}' 검색 =====")

    with path_pickle.open("rb")as f_p:
        #인물명피클을 읽기모드(rb)로 연다. 피클파일은 'rb'로 읽기모드가 가능하다.
        loaded = list()
        #인물명을 저장할 (아직은) 빈 리스트
        while loaded != None:
            try:
                f_pickle = pickle.load(f_p)
            except EOFError:
                break
            loaded.append(f_pickle)
        log_file.debug("===== 인물정보 가져오기 =====")
            #인물명 피클에서 불러온 이름들을 리스트로 어펜드하는 과정을 반복한다.
    #컨트롤러에서 이름 하나당 한줄씩으로 저장했었다.
    #한번에 한줄씩 읽어오는 피클읽기모드의 특성상 while문으로 읽어오고 그 안에 try문을 넣어서
    #EOFError가 발생하면 자동으로 while 문이 종료되게끔 설계했다.

    if maybe_name in loaded:
        #위 과정이 지나면 'loaded'에는 기존에 등록했던 인물명이 들어가있을 것이다.
        #인풋으로 입력한 이름이 'loaded'안에 있다면 이름에 맞는 txt파일을 가져와서 보여주게된다.
        name = maybe_name.upper()
        data = Path(path_person_data, f"{name}.txt")
        with data.open("r")as p_data:
            #인물에 대한 정보가 든 파일은 txt파일이기 때문에 읽기모드(r)로 읽어온다.
            persn_data = p_data.read()
            #read메서드는 파일의 내용을 한번에 전부 불러온다.
            print(persn_data)
            print("\t \t     👋😄 thanks for watching 👋😄")
            log_file.debug("===== 인물정보 출력 =====")
    log_file.info("===== 'shower' 퇴장 =====")
############################## 여기까지 이상없음 ##############################

if __name__ == "__main__":
    personage_shower()