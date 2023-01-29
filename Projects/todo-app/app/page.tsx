"use client";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  ChakraProvider,
  HStack,
  Input,
} from "@chakra-ui/react";
import { Heading, Box, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      todoText: "Abc",
      completed: false,
    },
    {
      todoText: "gef",
      completed: true,
    },
  ]);

  const checkedHandler = (currentTodo: any) => {
    let newTodo = todos.map((t) => {
      if (t.todoText == currentTodo.todoText) {
        t.completed = !t.completed;
      }
      return t;
    });
    setTodos(newTodo);
  };

  const InputHandler = () => {
    let newTodo = { todoText: todo, completed: false };
    let newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteHandler = (currTodo: any) => {
    let newTodos = todos.filter((t) => {
      return t.todoText != currTodo.todoText;
    });
    setTodos(newTodos);
  };
  return (
    <>
      <ChakraProvider>
        <Heading as="h1" style={{ textAlign: "center" }} color="red" pt="1em">
          Todo App
        </Heading>
        <Input
          type="text"
          value={todo}
          onChange={(e: any) => {
            setTodo(e.target.value);
          }}
        />
        <Button colorScheme="purple" type="submit" onClick={InputHandler}>
          Add
        </Button>
        <Box maxWidth="500px" bg="gray" m="auto">
          {todos.map((todo: any) => {
            return (
              <>
                <HStack spacing="10px" key={todo.todoText}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => {
                      checkedHandler(todo);
                    }}
                  />
                  <Text>{todo.todoText}</Text>
                  <DeleteIcon
                    onClick={() => {
                      deleteHandler(todo);
                    }}
                  />
                </HStack>
              </>
            );
          })}
        </Box>
      </ChakraProvider>
    </>
  );
}
