      import logging

def mk_logger(lg_name):
    FORMAT = "\n%(asctime)s \n%(pathname)s \n%(name)-10s %(levelname)s \n%(message)s\n"
    ref = f"/Users/jaeha/Desktop/personage/codes/log_saver/{lg_name}.log"

    # logging.basicConfig(
    #     level=logging.DEBUG,
    #     )

    logger = logging.getLogger(lg_name)
    logger.setLevel(logging.DEBUG)
    # s_hdl = logging.StreamHandler()
    f_hdl = logging.FileHandler(
        filename=ref, mode="a", encoding="utf8"
    )
    
    formater = logging.Formatter(FORMAT)
    # s_hdl.setFormatter(formater)
    f_hdl.setFormatter(formater)

    # logger.addHandler(s_hdl)
    logger.addHandler(f_hdl)


    return logger



