# Laget av svein, kost kalkulator
# Python 3.13.0

import json

class LoadContent:

    listPeople = []

    def __init__(self):
        try:
            with open('expenses.json', 'r') as f:
                fileContent = f.read()
                f.close()
        except FileNotFoundError:
            print("File not found, creating new file")
            with open('expenses.json', 'x') as f:
                fileContent = []
                f.write(json.dumps(fileContent))
                f.close()
        self.listOfExpenses = fileContent


class person:

    def __init__(self, name, money):
        self.name = name
        self.money = money

    
    def addExpense(self, product, price):
        try:
            with open('expenses.json', 'r') as f:
                fileContent = f.read()
                fileContent = json.loads(fileContent)
                f.close()
            with open('expenses.json', 'w') as f:
                Persondata = next((individual for individual in fileContent if individual["name"] == self.name), None)
                Persondata['expenses'].append({'product': product, 'price': price})
                f.write(json.dumps(fileContent))
                f.close()
        except FileNotFoundError:
            print("File not found, Cannot add expense")
            exit(code=1)
        except json.decoder.JSONDecodeError:
            print("Unable to decode file, Cannot add expense")
            exit(code=1)
    
class ui:

    def __init__(self):
        pass

    @staticmethod
    def clearScreen():
        print(chr(27) + "[2J")

    def pickPerson():
        ui.clearScreen()
        print("Pick a person:")
        for index, person in enumerate(LoadContent.listPeople):
            print(f"{index+1}. {person}")
        print(f"{str(len(LoadContent.listPeople)+1)}. Add new person")
        inputPerson = int(input("Type the number corresponding to your choice> "))
        ui.mainMenu()
    
    def addPerson():
        ui.clearScreen()
        print("Add a new person")
        name = input("Type here> ")
        money = int(input("Type here> "))
        LoadContent.listPeople.append(person(name, money))
        input("Press enter to go back> ")
        ui.mainMenu()

    def mainMenu():
        ui.clearScreen()
        print(f"You have {str(100)}kr")
        print(f"You are expecting to spend {str(500)}kr")
        print()
        print("What do you want to do?")
        print("1. See expenses")
        print("2. Add expense")
        print("3. Remove a expense")
        print("4. Exit")
        inputChoice = int(input("Type the number corresponding to your choice> "))
        if inputChoice == 1:
            ui.expenses()
        elif inputChoice == 2:
            ui.addExpense()
        elif inputChoice == 3:
            ui.removeExpense()
        elif inputChoice == 4:
            exit(code=0)

    def expenses():
        ui.clearScreen()
        print("Expenses:")
        for index, person in enumerate(LoadContent.listPeople):
            print(f"{index+1}. {person.expense[index]["price"]}kr {person.expense[index]["product"]}")
        input("Press enter to go back> ")
        ui.mainMenu()

    def addExpense():
        ui.clearScreen()
        print("Add expense")
        print("what do you want to buy?")
        product = input("Type here> ")
        print("how much does it cost?")
        price = int(input("Type here> "))
        person.addExpense(product, price)
        input("Press enter to go back> ")
        ui.mainMenu()

ui.pickPerson()