#!/usr/bin/python3
class User:
    def __init__(self, username, password):
        self.username = username
        self.__password = password

    def is_valid_password(self, pwd):
        return pwd == self.__password

if __name__ == "__main__":
    user = User("Test User", "password123")
    print(user.is_valid_password("password123"))  # Should print True
