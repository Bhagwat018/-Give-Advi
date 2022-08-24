import React from 'react'
import { useState, useEffect} from 'react'
import './Main2.css'


const getLocalData=()=> {

  const lists = localStorage.getItem("mytodolist")
  if(lists){
    return  JSON.parse(lists)
  }
  else{
    return [];
  }
}

const Main2 = () => {
  const[inputdata,setinputdata]=useState()
  const[items,setitems]=useState(getLocalData());

  const additem=()=>{
if(!inputdata){
  alert('plz fill the data')
}
else{
  const mynweinputdata= {
    id: new Date().getTime().toString(),
    name:inputdata
  }
  setitems([...items,mynweinputdata])
  setinputdata((""))
}

  }


  const removeAll= () => {
    setitems([]);
  }

  useEffect(()=>{
     localStorage.setItem("mytodolist", JSON.stringify(items))
  },[items])
  return (
    <>
      <div className="main-div">
        <div className='child-div '>
          <figure>
            <img src="" alt="Todo Logo" />
            <figcaption>Add Item</figcaption>
            <div className='addItems'>
               <input type="text"  placeholder='✍️ Add Items' className='form-control' 
                     value={inputdata}
                     onChange={((event)=>setinputdata(event.target.value))
                     }/>
               <button id='rama' onClick={additem}>Add</button>
            </div>
          </figure>
        

                <div className='showItems'>
                  {
                    items.map((curElm,index)=>{

                      return(
                        <div className="eachItem" key={curElm.id}>
                        <h3>{curElm.name}</h3>
                        
                       
                      </div>
    
                      )
                    })
                  }
                 

                </div>


                       

          <div className='showItems'>
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}> <span>CHECK LIST</span></button>


          </div>

        </div>
      </div>




    </>
  )
}

export default Main2
