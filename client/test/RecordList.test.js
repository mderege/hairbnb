import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RecordList from "./RecordList";
import { MemoryRouter } from "react-router-dom";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          _id: "1",
          name: "John Doe",
          personalStatement: "Experienced stylist.",
          level: "Stylist",
          email: "john@example.com",
          stylistHairstylesOffered: "Curly, Straight",
          yearsExperience: 5,
        },
        {
          _id: "2",
          name: "Jane Smith",
          personalStatement: "Master stylist.",
          level: "Senior Stylist",
          email: "jane@example.com",
          stylistHairstylesOffered: "Wavy",
          yearsExperience: 10,
        },
      ]),
  })
);

describe("RecordList Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("should display a list of stylists", async () => {
    render(<RecordList />, { wrapper: MemoryRouter });
    
    // Wait for records to load
    await waitFor(() => screen.getByText("John Doe"));
    
    // Check for stylist records
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Experienced stylist.")).toBeInTheDocument();
    expect(screen.getByText("Curly, Straight")).toBeInTheDocument();
  });

  test("should filter stylist list based on search query", async () => {
    render(<RecordList />, { wrapper: MemoryRouter });
    
    // Wait for records to load
    await waitFor(() => screen.getByText("John Doe"));
    
    // Search for a stylist by name
    fireEvent.change(screen.getByPlaceholderText("Search for stylists..."), {
      target: { value: "Jane" },
    });

    // Wait for filtering to occur
    await waitFor(() => screen.getByText("Jane Smith"));
    
    // Verify that John Doe is not visible after search
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  test("should display error message when missing required fields", async () => {
    render(<Record />, { wrapper: MemoryRouter });
    
    // Simulate form submission with missing name
    fireEvent.change(screen.getByLabelText("Email:"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText("Level:"), { target: { value: "Stylist" } });
    fireEvent.click(screen.getByText("Update Record"));
    
    // Verify error message is shown
    expect(await screen.findByText("Please fill out all required fields.")).toBeInTheDocument();
  });

  test("should delete a stylist record", async () => {
    render(<RecordList />, { wrapper: MemoryRouter });
    
    // Wait for records to load
    await waitFor(() => screen.getByText("John Doe"));
    
    // Click delete button
    const deleteButton = screen.getByText("Delete John Doe");
    fireEvent.click(deleteButton);

    // Confirm deletion
    await waitFor(() => expect(screen.queryByText("John Doe")).not.toBeInTheDocument());
  });
});