import React ,{useState,useEffect} from 'react'

function App() {
    const [user,setUser] = useState([]);

    const fetchData =()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            setUser(data)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
         <>
           <div className='container my-5'>
              <div className='row'>
                <div className='col-4'>
                {
                 user.map((value,id) => {
                  return (
                 <div key={id} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.body}</p>
      
                    </div>
                  </div>
                </div>
              );
            })
          }

                </div>

              </div>

           </div>

         </>
    )
}

export default App