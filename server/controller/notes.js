const Notes = require("../models/Notes");
const customError = require("../errors/customError");
const { StatusCodes } = require("http-status-codes");


// Get all notes of specific user
const getAllNotes =  async (req, res) => {

    const userId = req.user.id;
      const notes = await Notes.find({ user: userId});
      res.status(StatusCodes.OK).json({  length: notes.length, data:notes });

  }

// get single note
const getSingleNote = async (req,res) =>{
    const noteId = req.params.id;
    const findNote = await Notes.findOne({_id: noteId});
    if(!findNote) {
        throw new customError(`no notes found with id ${noteId}`, StatusCodes.NOT_FOUND)
    }

    
    
    if (findNote.user.toString() !== req.user._id.toString()) {
        throw new customError(`Unauthorized `, StatusCodes.UNAUTHORIZED);
    }

    // res.status(200).json({status: true, findNote})
    res.status(StatusCodes.OK).json({data: findNote})
}




//   createNote
const createNote =  async (req, res) => {


      const { title, description, tag } = req.body;
        if(!title || !description) {
            throw new customError(`Title and description required`, StatusCodes.BAD_REQUEST);
        }

      const note = await Notes.create({
        title,
        description,
        tag,
        user: req.user._id,
      });
    res.status(StatusCodes.CREATED).json({msg: "note created successfully", data: note});

  }


//   update note 
const updateNote = async (req, res) => {
    const noteId = req.params.id;
    const findNote = await Notes.findOne({_id :noteId });
    if(!findNote) {
        // next(customErrorHander(`note not found with id : ${noteId}`, 404));
        throw new customError(`No note found with id - ${noteId}`, StatusCodes.NOT_FOUND);
    }
    if (findNote.user.toString() !== req.user._id.toString()) {
        throw new customError(`Unauthorized `, StatusCodes.UNAUTHORIZED);
    }
    console.log(req.body);
    
      const note = await Notes.findOneAndUpdate({_id: noteId}, req.body,{new: true, runValidators: true})
      console.log(note);
      
      res.status(StatusCodes.OK).json({ msg: "note update successfully", data:note  });
  
    }



// delete note
const deleteNote =  async(req, res) => {
  
    const noteId = req.params.id;
    const userId = req.user.id;
    const findNote = await Notes.findOne({_id :noteId });
    if(!findNote) {
        throw new customError(`No note found with id - ${noteId}`, StatusCodes.NOT_FOUND);
    }
    if (findNote.user.toString() !== req.user._id.toString()) {
        throw new customError(`Unauthorized `, StatusCodes.UNAUTHORIZED);
    }
      // finally delete the note
  
      const note = await Notes.findByIdAndDelete(req.params.id);
      res.status(StatusCodes.OK).json({ msg: "note deleted successfully" });
 
    }


module.exports = {getAllNotes, createNote, updateNote, deleteNote, getSingleNote}