
import Container from './Container'
import { FiShoppingCart } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";


const ProductComponents = ({ item }) => {



  return (
    <section>
      <Container >



        <div className="!w-[97%] mx-2">
          <div className="relative group">
            <div className="py-16 relative group overflow-hidden flex justify-center items-center">
              <img src={item.image} alt="" className='w-[200px] h-[200px]' />

              <div className="absolute left-0 top-0 flex py-[10px] px-[15px]">
                <h2 className='pr-[10px] text-[#1DB4E7] hover:text-[#2F1AC4] duration-300 ease-in-out'><FiShoppingCart /></h2>
                <h2 className='px-[10px] text-[#1DB4E7] hover:text-[#2F1AC4] duration-300 ease-in-out'><CiHeart /></h2>
                <h2 className='px-[10px] text-[#1DB4E7] hover:text-[#2F1AC4] duration-300 ease-in-out'><FaSearchPlus /></h2>
              </div>

              <div className="absolute bg-[#08D15F] py-[10px] px-[25px] rounded left-[100px] bottom-[-100px] duration-300 ease-in-out group-hover:bottom-[15px]">
                <h2 className='font-jose text-[12px] text-[#FFFFFF]'>View Details</h2>
              </div>

            </div>

            <div className="text-center bg-white hover:bg-[#2F1AC4] duration-300 ease-in-out ">

              <h2 className='font-lato font-bold text-[18px] text-[#FB2E86] pt-[15px]  '>Cantilever chair</h2>
              <h2 className='text-[14px] text-[#151875] font-jose pt-[12px] '>{item.category}</h2>
              <h3 className='text-[14px] text-[#151875] font-jose pt-[12px] pb-[17px] '>{item.price}</h3>


            </div>

          </div>
        </div>



      </Container>
    </section>
  )
}

export default ProductComponents