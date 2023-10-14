import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { Task } from "./Task";

describe("Task Component", () => {
  const worker = setupServer(
    rest.get(
      "https://jsonplaceholder.typicode.com/todos",
      async (req, res, ctx) => {
        return res(
          ctx.json([
            {
              userId: 1,
              id: 1,
              title: "delectus aut autem",
              completed: false,
            },
          ])
        );
      }
    )
  );

  beforeAll(() => {
    worker.listen();
  });

  beforeEach(() => {
    worker.resetHandlers();
  });

  it("should fetch and show tasks on button click", async () => {
    render(<Task />);

    const button = screen.getByText(/Get Task from API/i);

    fireEvent.click(button);

    await screen.findByText("delectus aut autem");
  });

  it("should show error message on fetch error", async () => {
    worker.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        async (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ message: "error happened" }));
        }
      )
    );

    render(<Task />);

    const button = screen.getByText(/Get Task from API/i);

    fireEvent.click(button);

    await screen.findByText("Request failed with status code 500");
  });
});
