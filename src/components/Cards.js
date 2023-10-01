import React from 'react'
import Card from './Card'
import image1 from "../assest/nazjs.jpg"
import image2 from "../assest/aawwiljs.jpg"
import image3 from "../assest/werewolfjs.jpg"


const Cards = [
  {
    id: 1,
    title: "Nightmare Demon",
    image: image1,
    instructor: "Ale LóGa los Domingos"
  },
  {
    id: 2,
    title: "First Transformation",
    image: image2,
    instructor: "Ale LóGa Crudo"    
  },
  {
    id: 3,
    title: "POGGERS",
    image: image3,
    instructor: "Ale LóGa RAGE"      
  }
]

export default function cards(){
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
          {
            Cards.map(c => (
              <div className='col-md-4' key={Cards.id}>
                <Card
                key={c.id}
                id = {c.id}
                title = {c.title}
                image = {c.image}
                instructor = {c.instructor}
                />
                      </div>                              
            ))
          }
        </div>
      </div>
  );
}
