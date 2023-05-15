import './OurBrand.css';
import DataCard from './DataCard';
import ImgStar from '../../assets/star.png'

const Card = DataCard.map((items)=>{
    return(
        <div className=' col-lg-4 col-md-6'>
            <div className='card'>
            <img src={items.img}/>
            <h3> {items.price} </h3>
            <p>{items.title}</p>
                <ul className='Star' >
                <li> <img src={ImgStar}/> </li>
                <li> <img src={ImgStar}/> </li>
                <li> <img src={ImgStar}/> </li>
                <li> <img src={ImgStar}/> </li>
                </ul>

             {/* <span>{items.icon} </span> */}
        </div>
        </div>
    )
})


const OurBrand = () => {
    return (
        <div className='OurBrand'>
            <div className='container'>
            <div className='row'>
                {Card}
                </div>
                <div id='btn'>
                  <a href=''><button>See More</button></a>  
                </div>
        </div>
        </div>
    );
}

export default OurBrand;
