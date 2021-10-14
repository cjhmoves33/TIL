class NoteBook():
    """Urth.CO -- New Generation Note Book"""

    __company = "Urth"
    __how_many_making = 0
    __os_version = f"OS_version : {1.0}"


    def __init__(self, name, size, color="black", product_ver=0):
        self.__name = name
        self.__product_ver = product_ver
        self.__size = size
        self.__color = color
        NoteBook.__how_many_making += 1


    @classmethod
    def os(cls):
        """ get os_version """
        print(cls.__os_version)


    @classmethod
    def os_set(cls, setting:float):
        """version update"""
        cls.__os_version = f"OS_version : {setting}"


    @classmethod
    def many(cls):
        print(cls.__how_many_making)


    @property
    def information(self):
        self.__info = {
            "COMPANY":self.__company, "PRODUCT NAME":self.__name, "SIZE":self.__size,
             "PRODUCT_VERSION":self.__product_ver, "COLOR":self.__color
            }
        return self.__info



class Urth1(NoteBook):

    __number = 0


    def __init__(self, name, size, color, product_ver):
        super().__init__(name, size, color, product_ver)
        Urth1.__number += 1
        self.__number = Urth1.__number
        self._user_name = None


    def __greeting(self):
        print(f"hi,{self._user_name} 👋👋")


    @property
    def user(self):
        print(f"USER : '{self._user_name}'")
    @user.setter
    def user(self, new_name):
        # print(f"before - {self._user_name}")
        self._user_name = new_name
        # print(f"after - {self._user_name}")

    @property
    def information(self):
        inform = super().information
        inform["NUMBER"] = self.__number
        inform["USER"] = self._user_name
        return inform


ONE = NoteBook("tester", 16)

urth_note1 = Urth1("urth_note1", 16, "blue", 1)
urth_note1.user = "master choi"

# print(urth_note1.information)
# print(urth_note1.__dict__)