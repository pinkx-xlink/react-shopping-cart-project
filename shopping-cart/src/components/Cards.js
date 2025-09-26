import React, { useEffect, useState } from 'react'
import CardItem from './CardItem'
import './Cards.css'
import axios from 'axios';

// import WaterfallImg from "src/images/waterfall-img.jpg";

const Cards = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);

        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products"
        })
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }, []);
    


    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slideshow-container .slide');

        slides.forEach((cards, i) => {
            cards.style.display = i === index ? 'flex' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % 3;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000);


  return (
    <>


    <div className="slideshow-container">
		<div className="slide fade">
			<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20231126110234/ezgifcom-gif-maker-1.webp"
				alt="Slide 1"/>
		</div>
		<div className="slide fade">
			<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20231217134958/Group-23.png" alt="Slide 2"/>
		</div>
		<div className="slide fade">
			<img src=	 
"https://media.geeksforgeeks.org/wp-content/uploads/20240106180224/Screenshot-2024-01-06-174436.gif"
				alt="Slide 3"/>
		</div>
		<div className="slide fade">
			<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240109190054/Screenshot-2024-01-09-185442.gif"
				alt="Slide 3"/>
		</div>
        <div className="slide fade">
			<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20231123180952/Group-18.png" alt="Slide 3"/>
		</div>
		<div className="slide fade">
			<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20231121180023/Group-17.png" alt="Slide 3"/>
		</div>
	</div>


    <div className='products-container'>
        {loading && (
            <div> 
                {" "}
                <h1> Loading... </h1> 
            </div>
        )}


    </div>
    </>
  )
}

export default Cards;


{/* <div className='product-cards-container'>
{data.slice(0, 3).map((product)=> (
    
    <div key={product.id} className="cards">
        {/* <h2>{product.title}</h2> */}
    //     <div className="cards__container">
    //         <div className="cards__wrapper">
    //             <ul className="cards__items fade">
    //             <CardItem 
    //                 src={product.image}
    //                 text={product.title}
    //                 label="New!"
    //                 path="/shop"
    //                 />
    //             </ul>
    //         </div>
    //     </div>
    // </div>
    
    //))}
    // </div> */}