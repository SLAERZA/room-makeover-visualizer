const { describe } = require("node:test");
const { saveImage } = require("../server/controllers/imageController");

describe("saveImage controller", () => {
    it("should respond with JSON message", () => {
        const req = {
            body: {
                imageUrl: "https://example.com/test.jpg",
                projectId: 1
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        saveImage(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            message: "Image saved",
            imageUrl: req.body.imageUrl,
            projectId: req.body.projectId
        });
    });
});