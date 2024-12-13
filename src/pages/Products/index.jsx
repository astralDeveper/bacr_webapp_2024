import React from 'react'
import Container from '../../components/Container'
import ProductCards from './components/ProductCards'

const Product = () => {
    return (
        <Container mainStyle="" image heading="Bac Store" para="Providing high-quality HVACR products, services, and solutions backed by industry-leading partners." >

            <div className='w-[80%] mx-auto mb-20' >
                <ProductCards />
            </div>

        </Container>
    )
}
export default Product