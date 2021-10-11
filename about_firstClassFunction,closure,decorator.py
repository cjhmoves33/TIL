# def plus(a ,b):
#     return a + b
# pl = plus
# plus(1,2)
# print(plus)
# print(pl)
# pl(1,2)

# def map_plus(method, arr):
#     result = [method(i, i) for i in arr]
#     return result

# def logger(msg: str):
#     def log_msg():
#         print("DEBUG : ", msg)
#     return log_msg
# deb_log = logger("starting")

# del logger
# try:
#     print(logger)
# except NameError as ne:
#     deb_log()
#     print(ne)

# def tagging(tag : str):
#     def txt(content : str):
#         print(f"<{tag}>{content}<{tag}>")
#     return txt
# tag_h1 = tagging("h1")
# tag_div = tagging("div")
# tag_h1("im ironMan")
# tag_div("be flexible area")

# def freevar(low):
#     header = "Same"
#     def upp(up):
#         result = [{header: word}for word in zip(low, up)]
#         print(result)
#     return upp
# lw = ["life","is","short"]
# upp = ["LIFE","IS","SHORT"]
# samesame = freevar(lw)
# samesame(upp)


# def deco(display):
#     def wrapper(*args, **kwargs):
#         print(f"function'{display.__name__}' not call yet")
#         return display(*args, **kwargs)
#     return wrapper

# @deco
# def info_display(name, age):
#     print(f"{__name__} called successfully")
#     print(f"{name}, {age}")

# info_display("kevin", 20)



import logging
import time
import datetime
from functools import wraps

def log_deco(info):
    logging.basicConfig(
        level=logging.DEBUG, filename=f"{info.__name__}.log", filemode="a",
        format="%(asctime)s %(levelname)s %(message)s" ,datefmt= "%H:%M:%S"
        )
    logger = logging.getLogger("$$ debugger $$")

    @wraps(info)
    def wrapper(*args, **kwargs):
        logger.debug(f"'{info.__name__}' starting")
        return info(*args, **kwargs)
    return wrapper

def log_timer(info):
    t1 = datetime.datetime.now().strftime("%H:%M:%S")
    @wraps(info)
    def timer(*args, **kwargs):
        t2 = time.time()
        time.sleep(0.05)
        t3 = time.time()-t2
        print(f"'{info.__name__}'함수 실행에 걸리는 시간: {t3:.10f} 초", f"함수 생성시간- {t1}")
        return info(*args, **kwargs)
    return timer

# @log_deco
# def info_streamer(user, name):
#     inf_st = logging.getLogger("$$ information $$")
#     inf_st.info(f"{name} get nickname -> '{user}'")    

# info_streamer(name="TONY", user="ironman")


@log_timer
@log_deco
def time_tester(name, age):
    """[tester]
    Args:
        name ([str]): [user name]
        age ([int]): [user age]
    """
    print(f"display {name}--{age} working!")

time_tester("stark", 40)
print(time_tester.__name__)
print(time_tester.__doc__)

