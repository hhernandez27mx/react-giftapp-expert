import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifts"

export const useFetchGifts = (category) => {
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])
    

    const getImages = async () => {
        const listImages = await getGifts(category)
        setImages(listImages)
        setIsLoading(false)

    }
    useEffect(() => {
        getImages()
    }, [])


    return {
        images,
        isLoading
    }
}

