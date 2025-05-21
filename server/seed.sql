-- Seed users
INSERT INTO users (email, password_hash) VALUES
('demo@roomviz.com', 'hashedpassword123');

-- Seed project
INSERT INTO projects (user_id, name) VALUES
(1, 'Demo Room Project');

-- Seed image
INSERT INTO images (project_id, image_url) VALUES
(1, 'https://example.com/room.jpg');

-- Seed design elements
INSERT INTO design_elements (image_id, element_type, color, position_data) VALUES
(1, 'wall', 'blue', '{"x":100,"y":200}');