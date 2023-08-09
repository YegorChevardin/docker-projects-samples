import os

def clear_terminal():
    os.system('cls' if os.name == 'nt' else 'clear')

def show_menu():
    print("Welcome to the SUPER PUPER MUPER SHMAPER CLASS To-Do List App!")
    print("1. View To-Do List")
    print("2. Add Task")
    print("3. Mark Task as Done")
    print("4. Delete Task")
    print("5. Exit")

def view_todo_list(todo_list):
    if not todo_list:
        print("Your to-do list is empty.")
    else:
        print("To-Do List:")
        for index, task in enumerate(todo_list, start=1):
            status = "Done" if task['done'] else "Pending"
            print(f"{index}. {task['title']} - Status: {status}")

def add_task(todo_list):
    title = input("Enter the task title: ")
    todo_list.append({"title": title, "done": False})
    print("Task added successfully!")

def mark_task_as_done(todo_list):
    view_todo_list(todo_list)
    try:
        index = int(input("Enter the index of the task to mark as done: ")) - 1
        if 0 <= index < len(todo_list):
            todo_list[index]['done'] = True
            print("Task marked as done!")
        else:
            print("Invalid index.")
    except ValueError:
        print("Invalid input. Please enter a number.")

def delete_task(todo_list):
    view_todo_list(todo_list)
    try:
        index = int(input("Enter the index of the task to delete: ")) - 1
        if 0 <= index < len(todo_list):
            del todo_list[index]
            print("Task deleted successfully!")
        else:
            print("Invalid index.")
    except ValueError:
        print("Invalid input. Please enter a number.")

def main():
    todo_list = []
    while True:
        clear_terminal()
        show_menu()
        choice = input("Enter your choice (1-5): ")
        if choice == '1':
            view_todo_list(todo_list)
        elif choice == '2':
            add_task(todo_list)
        elif choice == '3':
            mark_task_as_done(todo_list)
        elif choice == '4':
            delete_task(todo_list)
        elif choice == '5':
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please select a valid option.")

        input("Press Enter to continue...")

if __name__ == "__main__":
    main()
