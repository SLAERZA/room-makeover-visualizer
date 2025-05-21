const request = require("supertest");
const express = require("express");
const imageRoutes = require("../server/routes/images");
const { describe } = require("node:test");

const app = express();
app.use(express.json());
app.use("/api/images", imageRoutes);

describe("POST /api/images", () => {
    it("should return success message", async () => {
        const res = (await request(app).post("/api/images")).setEncoding({
            imageURL: "https//example.com/test.jpg",
            projectID: 1,
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("message", "Image saved"); 
    });
});