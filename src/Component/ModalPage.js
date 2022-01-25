import React from 'react';
import './ModalPage.css'
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const ModalPage = ({open, handleClose , addCrib , name , setName, location, setLocation, imageUrl, setImageUrl , openEdit, editName, editLocation, editImage , setEditName, setEditLocation, setEditImage , updateCrib , handlCloseEdit}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid lightgray',
        boxShadow: 24,
        p: 4,
        borderRadius: '8px',
      };

  return (
    <div>
        {/* modal for add crib */}
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <div className='modal__form'>
                    <div className='modal__title'>
                        <h2>Add Your Property</h2>
                        <CloseIcon onClick={handleClose} className='modal__icon' />
                    </div>
                <form onSubmit={addCrib} >
                    <TextField 
                        className='modal__input' type='text' value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        label='crib name' variant="outlined" required
                    />

                    <TextField 
                        className='modal__input' type='text' value={location} 
                        onChange={(e) => setLocation(e.target.value)} label='location' variant="outlined" 
                        required
                    />

                    <TextField 
                        className='modal__input' type='text' value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)} 
                        label='image url...' variant="outlined"  required
                    />

                    <Button type='submit' className='modal__button' variant="contained">Add Your Property</Button>

                </form>
                </div>
            </Box>
            </Fade>
        </Modal>

        {/* modal for edit crib */}
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openEdit}
            onClose={handlCloseEdit}
            closeAfterTransition
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openEdit}>
            <Box sx={style}>
                <div className='modal__edit'>

                    <div className='modal__title'>
                        <h2>Edit Your Property</h2>
                        <CloseIcon onClick={handlCloseEdit} className='modal__icon' />
                    </div>

                    <form onSubmit={updateCrib} >

                        <TextField className='modal__editInput' variant='outlined' type='text' label='name' value={editName} onChange={(e) => setEditName(e.target.value)} required />

                        <TextField className='modal__editInput' variant='outlined' type='text' label='location' value={editLocation} onChange={(e) => setEditLocation(e.target.value)} required />

                        <TextField className='modal__editInput' variant='outlined' type='text' label='image url...' value={editImage} onChange={(e) => setEditImage(e.target.value)} required />

                        <Button type='submit' className='modal__button' variant="contained">Save Your Property</Button>

                    </form>

                </div>
            </Box>
            </Fade>
        </Modal>

    </div>
  )
};

export default ModalPage;
