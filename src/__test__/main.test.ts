/**
 *@jest-environment jsdom
 */

//importerar alla mina funktioner från main.ts till main.test.ts
import * as functions from "./../ts/main";
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";
import { describe, test, expect, jest } from "@jest/globals";
import * as addfunctions from "./../ts/functions";

// describe("initTwo", () => {
//   test("should be able to click", () => {
//     //Arrange
//     let spy = jest.spyOn(functions, "createNewTodo").mockReturnValue();
//     document.body.innerHTML = `<form id="newTodoForm"><button>Skapa</button></form>`;
//     let todoText: string = "text";
//     let todos: Todo[] = [];

//     functions.initTwo();
//     functions.createNewTodo(todoText, todos);
//     //Act
//     document.getElementById("newTodoForm")?.onsubmit;

//     //Assert
//     expect(spy).toHaveBeenCalled();
//     //
//     expect(spy).toBeCalledWith(todoText, todos);
//   });
// });

describe("createNewTodo", () => {
  test("if the result.success==true", () => {
    //Arrange
    let todos: Todo[] = [];
    let aText: string = "hej";
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

    //Act
    functions.createNewTodo(aText, todos);

    //Assert
    expect(spy).toBeCalledTimes(1);
  });

  test("if the result.success==false", () => {
    let todos: Todo[] = [];
    let aText: string = "m";

    let spy = jest.spyOn(functions, "displayError").mockReturnValue();

    //act
    functions.createNewTodo(aText, todos);

    //assert
    expect(spy).toBeCalledTimes(1);
  });
});

describe("createHtml", () => {
  // test("adds in localstorage", () => {
  //   //Arrange
  //   let todos: Todo[] = [new Todo("text", false)];

  //   //act
  //   functions.createHtml(todos);

  //   //assert
  //   expect(localStorage).toBe(todos);
  // });

  test("should loop my list", () => {
    //Arrange
    //Act
    //Assert
  });

  test("should empty the list before loop", () => {
    //Arrange
    let todos: Todo[] = [new Todo("text", false)];
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

    //act
    functions.createHtml(todos);

    //assert
    expect(document.getElementById("todos")?.innerHTML).toBe("");
  });

  //   test("should loop todos-list", () => {
  //     //Arrange
  //     let todos: Todo[] = [new Todo("text", false)];
  //     let aText: string = "";
  //     let newLi = document.createElement("li");
  //     //Act
  //     functions.createHtml(todos);
  //     //Assert
  //     expect((newLi.innerText = aText)).toBe(aText);
  //   });

  // test("should click li-element", () => {
  //   //Arrange
  //   let spy = jest.spyOn(functions, "toggleTodo").mockReturnValue();
  //   document.body.innerHTML = `<li id="myLiTag"></li>`;

  //   let todos: Todo[] = [new Todo("text", false)];

  //   functions.createHtml(todos);
  //   //Act
  //   document.getElementById("myLiTag")?.click();

  //   //Assert
  //   expect(spy).toBeCalledTimes(0);
  // });
});

describe("toggleTodo", () => {
  test("should call function changeTodo", () => {
    //Arrange
    // let todos: Todo[] = [];
    let todosOne: Todo = new Todo("text", false);
    let spy = jest.spyOn(addfunctions, "changeTodo").mockReturnValue();

    functions.toggleTodo(todosOne);
    //Act
    // addfunctions.changeTodo(todosOne);
    //Assert
    expect(spy).toHaveBeenCalled();
    // expect(spy).toBeCalledWith(todos);
  });

  test("should call function createHtml", () => {
    //Arrange
    let todos: Todo = new Todo("text", false);
    //let todosOne: Todo = [new Todo("text", false)];
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
    // functions.toggleTodo(todosOne);
    //Act
    functions.toggleTodo(todos);
    //Assert
    expect(spy).toHaveBeenCalled();
    // expect(spy).toBeCalledWith(todos);
  });
});

describe("clearTodo", () => {
  test("should run functions createHtml", () => {
    //Arrange
    let todos: Todo[] = [new Todo("text", false)];
    let spy = jest.spyOn(functions, "createHtml").mockReturnValue();

    //Act
    functions.clearTodos(todos);

    //Assert
    expect(spy).toHaveBeenCalled();
  });

  test("should run functions removeAllTodos", () => {
    //Arrange
    let todos: Todo[] = [new Todo("text", false)];
    let spy = jest.spyOn(addfunctions, "removeAllTodos").mockReturnValue();

    //Act
    functions.clearTodos(todos);

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});

test("should be able to click", () => {
  //Arrange
  let spy = jest.spyOn(functions, "clearTodos").mockReturnValue();
  document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;

  functions.initOne();
  //Act
  document.getElementById("clearTodos")?.click();

  //Assert
  expect(spy).toHaveBeenCalled();
});
