const Book = require("../models/book");

// Add a new book
exports.addBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json({ message: "Book added", data: book });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all books or filter by genre
exports.getAllBooks = async (req, res) => {
    try {
        let filter = {};
        if (req.query.genre) {
            filter.genre = req.query.genre;
        }

        const books = await Book.find(filter).sort({ publishedYear: 1 });
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update book
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book updated", data: book });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete book
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted", data: book });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};