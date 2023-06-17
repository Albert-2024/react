import {useState, useEffect} from 'react';
import finnHub from '../apis/finnHub';

export const StockList = () => {
    const [watchList, setWatchList] = useState(['GOOGLE', 'APPLE', 'MICROSOFT'])

    useEffect(() => {
        const fetchData = async() => {
            try{
               const response = await finnHub.get('/quote?symbol=GOOGLE&token=ci6uabhr01quivobsvsgci6uabhr01quivobsvt0')
                console.log(response)
            }catch(error){

            }
        }
        fetchData()
    },[])
    return <div>stockList</div>
}