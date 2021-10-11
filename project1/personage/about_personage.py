import time
from codes import controller, logging_func, shower

log_starter = logging_func.mk_logger("starter")

def starter():
    print("\t \t \t hello USER !!")
    time.sleep(1)
    print("\t \t     😄thanks for coming😄")
    time.sleep(1)
    #임포트한 time모듈의 sleep메서드를 이용해서 1초씩 딜레이를 발생.(프로그램 실행시 보여주기용)

    log_starter.info("===== 'starter' 접근 =====")
    
    a = False
    while a == False:
        selection = input("Select Menu\ncontroller or shower\nEnter ---->> : ").lower()
        log_starter.info(f"===== '{selection}'(으)로 접근시도 =====")
        if selection == "exit":
            print("\t \t     😄thanks for watching😄")
            log_starter.info("===== 시스템종료 =====")
            break
        elif selection == "controller":
            log_controller = logging_func.mk_logger("controller")
            controller.personage_controller(log_controller)
        elif selection == "shower":
            log_shower = logging_func.mk_logger("shower")
            shower.personage_shower(log_shower)
        
        log_starter.info("===== 'starter'로 재접근 =====")
        continue

if __name__ == "__main__":
    starter()