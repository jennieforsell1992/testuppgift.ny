import { addTodo, changeTodo, removeAllTodos } from "../functions";
import { IAddResponse } from "../models/IAddResult";
import { Todo } from "../models/Todo";

// test("should mark my todo's to done", () => {
//     //Arrange

//     //Act

//     //Assert

// });

test("should remove todo from list", () => {
  //Arrange
  let todos: Todo[] = [];
  let todo = new Todo("Handla", true);
  todos.push(todo);
  console.log(todos);
  //Act
  removeAllTodos(todos);
  //Assert
  //jag förväntar att expect: listans längd todo ska vara toBe:0
  console.log(todos);
  expect(todos.length).toBe(0);
});

describe("changeTodoTest", () => {
  //när din todo blir till done
  test("should change to be done", () => {
    //Arrange
    let todo: Todo = new Todo("äta", false);
    console.log(todo);

    //Act
    changeTodo(todo);
    //Assert
    console.log(todo);
    //expektar min todo med min egenskap.done till att vara true
    expect(todo.done).toBe(true);
  });
  //när din todo blir till undone
  test("should change to be undone", () => {
    //Arrange
    let todo: Todo = new Todo("äta", true);
    console.log(todo);

    //Act
    changeTodo(todo);
    //Assert
    console.log(todo);
    expect(todo.done).toBe(false);
  });
});

describe("Should push a todo to my list or get a warning", () => {
  test("add Todo to a list ", () => {
    //Arrange
    let todos: Todo[] = [];
    let todoText: string = "hej på dig!";
    //min todos längd.
    let length: number = todos.length;

    //Act
    addTodo(todoText, todos);
    console.log(todos);

    //Assert
    console.log(todos);
    expect(todos.length).toBe(length + 1);
  });

  test("should give a warning", () => {
    //Arrange
    let todos: Todo[] = [];
    let todoText: string = "he";
    let length: number = todos.length;
    //Act

    let result = addTodo(todoText, todos);
    console.log(todos);
    console.log(result.error);

    //Assert
    expect(todos.length).toBe(length);
  });
});
