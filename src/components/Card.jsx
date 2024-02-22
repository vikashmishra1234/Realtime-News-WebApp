import React from 'react'

const Card = (props) => {
  return (
  <>
        <div className="card" style={{width:'18rem'}}>
  <img src={props.imgUrl} className="card-img-top" alt="..."/>
  <div >
    <h5 >{props.title.slice(0,40)}</h5>
    <p >{props.content}</p>
    <a href={props.more} target='_blank'>Read More</a>
  </div>
</div> 
 
      
  </>
    
  )
}

export default Card
