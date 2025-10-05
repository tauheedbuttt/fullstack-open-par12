import { render, screen } from "@testing-library/react";
import Todo from "./Todo";
import { vi } from "vitest";

describe("Todo.tsx", () => {
  const todo = {
    text: "Test Todo",
    done: false,
    id: 1,
  };

  test("renders todo text and done status", async () => {
    const mockOnClickDelete = vi.fn();
    const mockOnClickComplete = vi.fn();
    render(
      <Todo
        todo={todo}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    const text = screen.getByText(`${todo.text}`);
    const doneStatus = screen.getByText(`This todo is not done`);

    expect(text).toBeVisible();
    expect(doneStatus).toBeVisible();
  });
});
