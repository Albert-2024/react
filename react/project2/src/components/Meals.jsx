import React from "react";
import { BsHandThumbsUp} from 'react-icons/bs';
import { useGlobalContext } from "../Context";

const Meals = () => {
        const {loading ,meals}  = useGlobalContext();
        if(loading){
            return <section className="section">
            <h2>loading</h2>
            </section>
        }

        return( <section className="section-center">
            { meals.map((singleMeal)=> {

                const {idMeal, strMeal:title, strMealThumb:image} = singleMeal

                return <article key={idMeal} className="single-meal">
                    <img src={image} className="img" style={{width:'300px'}}/>
                     <footer>
                        <h5>{title}</h5>
                        <button className="like-btn"><BsHandThumbsUp /> </button>
                     </footer>

                </article>

            })}
        </section>);
};


export default Meals;