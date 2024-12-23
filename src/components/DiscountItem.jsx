import React from 'react'
import Container from './Container'
import DiscountImg from '../assets/discountsofa.png'
const DiscountItem = () => {
  return (
    <section>
        <Container>
            <div className="pt-[150px] pl-10">
                <img src={DiscountImg} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default DiscountItem