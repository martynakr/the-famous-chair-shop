import RegHeading from "../../components/RegHeading"
import { CarouselItem } from "../../components/CarouselItem/CarouselItem"
import { useState, useEffect } from "react"
import { getProducts } from "../../services/products"
import Button from "../../components/Button"
import styles from "./Carousel.module.scss"

const Carousel = () => {

    const[slides, setSlides] = useState([0])
    const [current, setCurrent] = useState(0)

    const length = slides.length


    useEffect(()=> {
        const populateProducts = async () => {
        const data = await getProducts()
        const carouselData = data.filter((n) => n.carousel_img !== undefined)
        console.log(carouselData)
        setSlides(carouselData)
        }

    populateProducts()

}, [])


        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        const prevSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
        };


    return (
        <>
            <RegHeading title="Top Picks"/>
            <div className={styles.Carousel}>
            <div className={styles.SlidebtnRight} >
                <Button onClick={prevSlide} fontSize="40px" colour="transparent">&#60;</Button>
                </div>
                
               
                {slides.map((slide, index) => {
                    return (
                    <div className={index === current ? styles.Active : styles.Slide}>
                    {index === current && (<CarouselItem key={index} index={index} designer={slide.designer} name={slide.name} year_designed={slide.year_designed} carousel_img={slide.carousel_img}/>)}
                    </div>
                    )}
                )}
                <div className={styles.SlidebtnLeft} >
                <Button onClick={nextSlide} fontSize="40px" colour="white">&#62;</Button>
                </div>

            </div>
            </>
    )
}

export default Carousel
