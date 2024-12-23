import React from 'react'
import Container from './Container'
import Flex from './Flex'
import sofaImg from '../assets/sofa.png'
const DiscountProduct = () => {
  return (
    <section>
      <Container>
      <div className="text-center pt-[120px] pb-[33px]">
                <h2 className='text-[42px] font-jose text-[#1A0B5B] font-bold'>Discount Item</h2>
            </div>
            <div className="flex justify-center items-center px-3">
              <h2 className='text-[18px] font-jose text-[#151875] px-[14px] hover:text-[#FB2E86] hover:underline duration-300 ease-in-out cursor-pointer'>Wood Chair</h2>
              <h2 className='text-[18px] font-jose text-[#151875] px-[14px] hover:text-[#FB2E86] hover:underline duration-300 ease-in-out cursor-pointer'>Plastic Chair</h2>
              <h2 className='text-[18px] font-jose text-[#151875] px-[14px] hover:text-[#FB2E86] hover:underline duration-300 ease-in-out cursor-pointer'>Sofa Colletion</h2>
            </div>
      <Flex>
        <div className="pt-[20px] pl-[100px]">
          <img src={sofaImg} alt="" />
        </div>

      </Flex>
      </Container>
    </section>
  )
}

export default DiscountProduct