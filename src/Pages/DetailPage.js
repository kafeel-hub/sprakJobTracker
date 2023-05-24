import React from 'react'
import '../components/Vacancycard.css'
import Header from '../components/Header'
import { useSelector ,useDispatch} from 'react-redux'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailPage() {

    let { id } = useParams();

    const jobs = useSelector((state) => state.job);

    const[currentJob, setCurrentJob] = useState("")


    const dispatch = useDispatch();
   
    useEffect(() => {
        
      }, [dispatch]);

      useEffect(() => {
        if(id){
            
            let job = jobs.find(item=> item.id == id)
            setCurrentJob(job)
        }
        
      }, [id]);

  return (
    <div>
        <Header/>
        <div className="container">
            <div >
                <h5></h5>
                <p></p>

            </div>
            <div className="title" >
                <h5 >{currentJob.title}</h5>
                <p>{currentJob.companyName}</p>

            </div>
            <div className="title">
                <h5>Description</h5>
                <p>
                {currentJob.discription}
                    </p>
            </div>
            <div className="sal-date">
            <div className="date">
                <h5></h5>
                <p>{currentJob.date}</p>


            </div>
            <div className="Salary">
                <h5></h5>
                <p>{currentJob.salary}</p>
                

            </div>
            </div>
        </div>
      
    </div>
  )
}

export default DetailPage
