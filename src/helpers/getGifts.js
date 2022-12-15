


const api_key = "AJ0WBVgCOQmS0Hr2TDlgakhcQIVgxwL9"
const limit=10

export const getGifts = async (cat) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${cat}&limit=${limit}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifts = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url

  })
  )
  console.log(gifts)
  return gifts

}