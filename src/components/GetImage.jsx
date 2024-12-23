import React from 'react'
import Container from './Container'
import getImg from '../assets/getImg.png'
import mestoImg from '../assets/mestoImg.png'
const GetImage = () => {
  return (
    <section>
        <div className="pt-[170px]">
        <img src={getImg} alt="" />
        </div>

        <Container>
            <div className="flex justify-center items-center pt-[96px]">
                <img src={mestoImg} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default GetImage