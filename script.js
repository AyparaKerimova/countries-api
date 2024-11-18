async function getCountries() {
    let resp = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital");
    let countries=resp.data;

    const wrapper = document.querySelector("#wrapper");
    wrapper.innerHTML="";
    countries.forEach(element => {
        wrapper.innerHTML+=`
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card" style="width: 18rem;">
                    <img src=${element?.flags.png} class="card-img-top" style="height: 12rem;"">
                    <div class="card-body">
                      <h5 class="card-title">${element?.name.common}</h5>
                      <p class="card-text"><strong>Capital:</strong> ${element?.capital}</p>
                      <a href="#" class="btn btn-primary" name="${element?.name.common}">Get more info>></a>
                    </div>
                  </div>
            </div>
        `
        const btn = document.querySelectorAll(".btn")
       btn.forEach((button)=>{
            button.addEventListener("click", (e) => {
                let name = e.target.getAttribute("name");
                if (name) {
                    window.location.href = `details.html?name=${name}`;
                }
            });
        })
    });
    
}

getCountries()