import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

<<<<<<< HEAD
const Gallery = () => {
    const data = useContext(DataContext)
    const myData = data.result.read()
=======
function Gallery(props){
>>>>>>> d25adecd64f1f9bc8b2cf7edaf9f5e5f9250b4bc

    const display = myData.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
