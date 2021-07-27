import axios from "axios";
const search = async (keyword) => {
    const response = axios.get(`https://www.googleapis.com/books/v1/volumes?country=US&projection=lite&printType=books&key=AIzaSyD6SlU9JUr7Z-3SOOy0TfZTJtqv_EEqfZY&q=intitle:${keyword}&startIndex=0&maxResults=5`)
    console.log("DD")
    return (await response).data
}
export {search}