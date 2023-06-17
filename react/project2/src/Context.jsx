import React, {useContext, useEffect,useState} from "react";
import axios from "axios";

const AppContext = React.createContext();
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealsUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'


const AppProvider = ({children}) => {
    
    const [loading, setLoading] = useState(false);
    const [meals, setMeals] = useState([]);
    const [searchTerm,setSearchTerm] = useState(''); 
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [favourites, setFavourites] = useState([]);

    const fetchMeals = async (url) => {
        setLoading(true)
        try{    
            const {data} =await axios(url)
            if(data.meals){
            setMeals(data.meals)
            }
            else{
                setMeals([])
            }
        }
        catch(error){
            console.log(error.response);
        }
        setLoading(false)
    }
    const selectMeal = (idMeal,favouriteMeal) => {
      
        let meal;
        meal = meals.find((meal) => meal.idMeal === idMeal)
        setSelectedMeal(meal)
        setShowModal(true)
       
    }


    const closeModal = () => {
        setShowModal(false)
    }

    const addToFavorites = (idMeal) => {
        const meal = meals.find((meal) =>meal.idMeal === idMeal) ;
        const alreadyFavourites = favourites.find((meal) => meal.idMeal === idMeal)
        console.log(meal);  
        if(alreadyFavourites)
            return 
            const updatedFavourites = [...favourites, meal]
            setFavourites(updatedFavourites);
            localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    }
    const removeFromFavorites = (idMeal) =>{
        const updatedFavorites  = favourites.filter((meal) => meal.idMeal !== idMeal);
        setFavourites(updatedFavorites);


    }


    useEffect(()=>{
       fetchMeals(allMealsUrl)
    },[])

    useEffect(()=>{ 
        if(!searchTerm) return
        fetchMeals(`${allMealsUrl}${searchTerm}`)   
    },[searchTerm])


    const fetchRandomMeal = () => {
        fetchMeals(randomMealsUrl);
    }

    

    return ( <AppContext.Provider value = {{loading, meals,setSearchTerm, fetchRandomMeal, showModal,selectedMeal, selectMeal,closeModal, favourites,addToFavorites, removeFromFavorites}}>
        {children}
    </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export  { AppContext, AppProvider}