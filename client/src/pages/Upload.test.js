import { render, screen, fireEvent } from "testing-library/react";
import Upload from "./Upload";

test("renders upload form and submits image URL", async () => {
    render(<Upload />);
    const input = screen.getByPlaceholderText(/image url/i);
    const button = screen.getByText(/submit/i);

    fireEvent.change(input, { target: { value: "https://example.com/test.jpg" } });
    fireEvent.click(button);

    expect(await screen.findByText(/upload room image/i)).toBeInTheDocument();
});