

import { Car } from "../../types/dataTypes";
import { Typography } from "antd";
import Card from "../card/Card";
import Nav from "../navigation/Navigation";
import Footer from "../footer/Footer";

const {Title} = Typography

type Props = {
    title: string,
    data: Car[] | undefined,
    isLoading: boolean
}

const Cars = ({data, title, isLoading} : Props) => {
  return (
    <div className="bg-[#F6F7F9]">
        <Nav/>
        <Title className="container" level={2}>{title}</Title>

        {
            isLoading ? <div>Loading</div> 
                : 
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                data?.map(car => 
                    <Card key={car._id} car={car}/>
                )
            }
            </div>
        }
        <Footer />
    </div>
  )
}

export default Cars