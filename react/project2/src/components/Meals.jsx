import React from "react";
import { BsHandThumbsUp} from 'react-icons/bs';
import { useGlobalContext } from "../Context";

const Meals = () => {
        const {loading ,meals,selectMeal,addToFavorites}  = useGlobalContext();
        if(loading){
            return <section className="section">
            <h2>loading</h2>
            </section>
        }
        if(meals.length < 1){
            return <section className="section">
            <h2>no meals matched your search criteria</h2>
            </section>
        }
        return( <section className="section-center">
            { meals.map((singleMeal)=> {

                const {idMeal, strMeal:title, strMealThumb:image} = singleMeal

                return <article key={idMeal} className="single-meal">
                    <img src={image} className="img" style={{width:'300px'}} onClick={() => selectMeal(idMeal)}/>
                     <footer>
                        <h5>{title}</h5>
                        <button className="like-btn" onClick={() => addToFavorites(idMeal)}><BsHandThumbsUp /></button>
                     </footer>

                </article>

            })}
        </section>);
};


export default Meals;