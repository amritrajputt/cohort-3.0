// fetch vs axios


// example of axios:-
  async function sendRequest(){
       const response = await axios.get("http://localhost:3000/sum",{
            a:document.getElementById("first").value,
            b:document.getElementById("second").value
        })
        console.log(response.data);
    }

    //in axios it already know that the data that is coming back so we don't have to explicityy write res.json() line that is in fetch

// example of fetch:-
    async function sendRequest2() {
        const res = fetch("http://localhost:3000/sum",{
             a:document.getElementById("first").value,
            b:document.getElementById("second").value
        })
        const data = await res.json();
        console.log(data);
    }  

    // in fetch if we want a specific method to use then we pass it as like this ... method:"PUT"
    const res = fetch("http://localhost:3000/sum",{
            method:"PUT"
        })


        // but in axios
          const response = await axios.put("http://localhost:3000/sum") 

        //   for sending a header in fetch
        const res1 = fetch("http://localhost:3000/sum",{
            method:"PUT",
            headers:{
                    //pass your header data here
            }
        })

          //   for sending a header in axios
          const response2 = await axios.put("http://localhost:3000/sum",{
            headers:{
                    //pass your header data here
            }
          }) 