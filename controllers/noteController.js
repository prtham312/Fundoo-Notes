import Note from '../models/noteModel.js';

// Create a new note
export const createNote = async (req, res) => {
  try {
    const { title, content, color } = req.body;
    const userId = req.user.userId; 

    const newNote = new Note({
      title,
      content,
      color,
      userId,
    });

    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error });
  }
};

// Get all notes of logged-in user
export const getNotes = async (req, res) => {
  try {
    const userId = req.user.userId;
    const notes = await Note.find({ userId });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error });
  }
};

// Get single note by id
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const note = await Note.findOne({ _id: id, userId });

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note', error });
  }
};

// Update note by id
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;
    const { title, content, color } = req.body;

    const updatedNote = await Note.findOneAndUpdate(
      { _id: id, userId },
      { title, content, color },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found or not authorized' });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error });
  }
};

// Delete note by id
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const deletedNote = await Note.findOneAndDelete({ _id: id, userId });

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found or not authorized' });
    }

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error });
  }
};
