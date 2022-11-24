/**
 *@jest-environment jsdom
 */

//importerar alla mina funktioner från main.ts till main.test.ts
import * as functions from "./../ts/main";
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";
import { describe, test, expect } from "@jest/globals";
import * as addfunctions from "./../ts/functions";

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

// describe("initTwo", () => {
//   test("should be able to click", () => {
//     //Arrange
//     let spy = jest.spyOn(functions, "createNewTodo").mockReturnValue();
//     document.body.innerHTML = `<form id="newTodoForm"><button>Skapa</button></form>`;
//     let todoText: string = "text";
//     let todos: Todo[] = [];

//     functions.initTwo();
//     // functions.createNewTodo(todoText, todo);
//     //Act
//     //document.getElementById("newTodoForm")?.();

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
