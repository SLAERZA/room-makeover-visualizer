exports.saveImage = (req, res) => {
    const { imageUrl, projectId } = req.body;
    res.status(201).json({ message: "Image saved", imageUrl, projectId });
};