import { useState,useEffect } from 'react';
import './ProgressBar.css'

function ProgressBar(){
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('Loading');

    useEffect(()=>{
        ProgressStatus();

        return () => clearInterval(interval);
    },[progress]);

    var interval='';
    function ProgressStatus(){
         interval = setInterval(()=>{
            if(progress < 100) {
                setProgress(progress+1);
            }
            else{
                // clearInterval(interval)
                setStatus('Complete');
            }
        }, 250);
    }


    return (
        <>
        <div className='progressBar'>
            <h1>Progress Bar</h1>
            <div className='progress'>
                <div style={{width: `100%`, border:"none", borderRadius:"20px", backgroundColor:"grey", textAlign:"center"}}>
                    <div style={{width:`${progress}%`,backgroundColor:"green", border:"none" , borderRadius:"20px", textAlign:"center",  transition: "width 0.3s ease-in-out"}}>
                    <h2 style={{width:"50vw"}}>{progress}%</h2>
                    </div>
                </div>
                <h3>{status === 'Loading' ? 'Loading...' : 'Complete!!!'}</h3>
            </div>
        </div>
        </>
    )
}

export default ProgressBar;