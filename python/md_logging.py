import logging
import logging.config
import json

flt = 3.1415925
FORMAT = "%(asctime)s  %(name)s %(levelname)s  %(message)s"
FORMAT_dt = "%Y/%m/%d %H:%M:%S"

formatter = logging.Formatter(fmt=FORMAT, datefmt=FORMAT_dt)
hdl_s = logging.StreamHandler()
hdl_f = logging.FileHandler(filename="md_logging1_log.log",mode="w", encoding="utf8")

hdl_s.setFormatter(formatter)
hdl_s.setLevel(level=logging.INFO)
hdl_f.setFormatter(formatter)
hdl_f.setLevel(level=logging.INFO)

lgg = logging.getLogger("main")
lgg.addHandler(hdl_s)
lgg.addHandler(hdl_f)

lgg.critical(f"{flt:.2f} - 크리티컬메세지")

lgg2 = logging.getLogger("main.fst")
lgg2.warning("test")

confg = json.load(open("md_logging_json.json"))
logging.config.dictConfig(confg)
logger = logging.getLogger(__name__)

logger.info("info -- test--")