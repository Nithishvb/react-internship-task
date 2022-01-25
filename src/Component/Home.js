import React, { useState } from 'react';
import './Home.css'
import ModalPage from './ModalPage'
import Button from '@mui/material/Button';

const Home = () => {

  //states for add crib
    const [search, setSearch] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    //states for edit crib
    const [editName, setEditName] = useState('')
    const [editLocation, setEditLocation] = useState('')
    const [editImage, setEditImage] = useState('')
    const [editId, setEditId] = useState(null)

    //states for modal
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenEdit = (getVal) => {
      setOpenEdit(true)
      setEditName(getVal.name)
      setEditLocation(getVal.location)
      setEditImage(getVal.image)
      setEditId(getVal.id)
    }
    const handlCloseEdit = () => setOpenEdit(false)

    const [crib, setCrib] = useState(
        [
          {
            id: 1,
            name: 'amygdala homes',
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&w=1000&q=80',
            location: 'chennai'
    
          },
          {
            id: 2,
            name: 'fairbanks ltd',
            image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&w=1000&q=80',
            location: 'chennai'
    
          },
          {
            id: 3,
            name: 'dale homes',
            image: 'https://i.pinimg.com/736x/2f/82/39/2f823993ba069d0aa966144e6f20d459.jpg',
            location: 'chennai'
    
          },
          {
            id: 4,
            name: 'triptico properties',
            image: 'https://media.gettyimages.com/photos/idyllic-home-with-covered-porchpicture-id479767332?s=612x612',
            location: 'chennai'
    
          },
          {
            id: 5,
            name: 'mc homes',
            image: 'https://images.livemint.com/img/2019/04/16/600x338/Kerala_1555430371601.jpg',
            location: 'chennai'
    
          },
          {
            id: 6,
            name: 'abc ltd',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EHRg2tOBeVUS6VbolhKHz5dW7EYASemixg&usqp=CAU',
            location: 'chennai'
    
          },
        ]
      )

      //add crib
      const addCrib = (e) => {
        e.preventDefault();
        let data = {
          id: crib.length+1,
          name: name,
          location: location,
          image: imageUrl,
        }
        setCrib((prevData) => {
          return [...prevData,data]
        })
        setOpen(false)
        setName('')
        setLocation('')
        setImageUrl('')
      }

      //delete crib
      const deleteCrib = (getData) => {
        const deleteItem = crib.filter((e) => e.id !== getData.id);
        setCrib(deleteItem)
      }

      //update crib
      const updateCrib = (e) => {
        e.preventDefault();
        let value = {
          name: editName,
          location: editLocation,
          image: editImage
        }
    
        const updateItem = crib.map((data,index) => {
          if(data.id === editId){
            return value
          }
          return data
        })
        setCrib(updateItem)
        handlCloseEdit(false)
      }

  return (
    <div className='home'>

      {/* modal Component */}
      <ModalPage open={open} handleClose={handleClose} addCrib={addCrib} name={name} location={location} imageUrl={imageUrl} setName={setName} setLocation={setLocation} setImageUrl={setImageUrl} openEdit={openEdit} editName={editName} editLocation={editLocation} editImage={editImage} setEditName={setEditName} setEditImage={setEditImage} setEditLocation={setEditLocation} updateCrib={updateCrib} handlCloseEdit={handlCloseEdit} />
      

        <div className='home__container'>

            <input 
              type='text' className='home__search' value={search} 
              onChange={(e) => setSearch(e.target.value)} placeholder='search...' 
              autoComplete='off' 
            />

            <div className='home__containerData'>
            {
                crib.filter((e) => e.name.includes(search)).map((data,index) => (
                    <div key={index} className='home__data'>
                      <h2>{data.name}</h2>
                      <img onClick={() => handleOpenEdit(data)} src={data.image} alt='' />
                      <button onClick={() => deleteCrib(data)} >Remove</button>
                    </div>
                ))
            }
            </div>
          
            <div className='home__button'>
              <Button onClick={handleOpen} variant="contained" >Add Property</Button>
            </div>

        </div>
    </div>
  )
};

export default Home;
