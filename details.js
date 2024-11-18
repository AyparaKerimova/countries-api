const countryName = new URLSearchParams(window.location.search).get("name");

async function getCountryDetail() {
    let resp = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    let details=resp.data;
    if (details[0]) {
        const wrapper = document.querySelector("#wrapper");
        wrapper.innerHTML=`
            <div class="card" style="width: 60%;">
                    <img src=${details[0]?.flags.png} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${details[0]?.name.common}</h5>
                      <div class="d-flex align-items-center justify-content-between">
                        <p class="card-text"><strong>Capital:</strong></p>
                        <p class="card-text">${details[0]?.capital}</p>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <p class="card-text"><strong>Status:</strong></p>
                        <p class="card-text">${details[0]?.status}</p>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <p class="card-text"><strong>Region:</strong></p>
                        <p class="card-text">${details[0]?.region}</p>
                      </div>
                      <div class="d-flex align-items-center justify-content-between">
                        <p class="card-text"><strong>population</strong></p>
                        <p class="card-text">${details[0]?.population}</p>
                      </div>
                      <a href="#" class="btn btn-primary">go back>></a>
                    </div>
                  </div> 
        `
        document.querySelector("a").addEventListener("click",()=>{
            history.back();
        })
    }
   
}
getCountryDetail()