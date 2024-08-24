
setTimeout(()=>{

            const productsElem = document.querySelector(".products")
        productsElem.innerHTML = ""
     // Fetch To Get Products 
     fetch('../products/products.json')
     .then(response => {
         return response.json();
     }).then(data=>{
         let products = Object.entries(data);

         products.forEach(product=>{
             if (product[1].tab == defaultTab) {
                 const productElement = document.createElement('div');
                 productElement.classList.toggle("product");

                                         // Background Random Image
                                         let r = Math.floor(Math.random() * 255)
                                         let g = Math.floor(Math.random() * 255)
                                         let b = Math.floor(Math.random() * 255)

                                         
                 const content = `
                  <div class="imgBox" style="background-color:rgb(${r},${g},${b});">
                         <img src="${product[1].imgSRC}" alt="${product[1].imgSRC}">
                     </div>
                     <div class="title">
                         <h1>${product[1].title}</h1>
                     </div>
                     <div class="description">
                         <h5>${product[1].description}</h5>
                     </div>
                     <div class="price">
                         <h4>قیمت : ${product[1].price} تومان</h4>
                     </div>
                     <div class="AddingToShoppingCart">
                        <button>اضافه به سبد خرید</button>
                     </div>
                 `;

                 productElement.innerHTML = content;
                 productsElem.appendChild(productElement)
             }
         })

     })

    for (let i = 1; i < tabs.length + 1; i ++) {

        const element = document.querySelector(".tab-id-"+i)
        element.addEventListener("click",()=>{
            const productsElem = document.querySelector(".products")
            productsElem.innerHTML = ""
            
            fetch('../products/products.json')
            .then(response => {
                return response.json();
            }).then(data=>{
                let products = Object.entries(data);

                products.forEach(product=>{
                    if (product[1].tab == defaultTab) {
                        const productElement = document.createElement('div');
                        productElement.classList.toggle("product");

                        // Background Random Image
                        let r = Math.floor(Math.random() * 255)
                        let g = Math.floor(Math.random() * 255)
                        let b = Math.floor(Math.random() * 255)

                        const content = `
                            <div class="imgBox" style="background-color:rgb(${r},${g},${b});">
                                <img src="${product[1].imgSRC}" alt="${product[1].imgSRC}">
                            </div>
                            <div class="title">
                                <h1>${product[1].title}</h1>
                            </div>
                            <div class="description">
                                <h5>${product[1].description}</h5>
                            </div>
                            <div class="price">
                                <h4>قیمت : ${product[1].price} تومان</h4>
                            </div>
                            <div class="AddingToShoppingCart">
                                <button>اضافه به سبد خرید</button>
                            </div>
                        `;

                        productElement.innerHTML = content;
                        productsElem.appendChild(productElement)
                    }
                })

            })
        })

    }
},200)