var tabs = [];
i = 0
 let defaultTab = "burger";

fetch('../products/tabs.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    tabs = Object.entries(data)
    tabs.forEach(tab=>{
      i++;
      const tabsElement = document.querySelector("#tabs");

      const tabElement = document.createElement("div")

      tabElement.classList.toggle("tab-id-"+i)

      tabElement.id = tab[1].tab
      const content = `
          <div class="tabIMG">
              <img src="${tab[1].imgSRC}" alt="${tab[1].tab}">
          </div>
          <div class="tabTitle">
                ${tab[1].title}
          </div>
      `

      tabElement.innerHTML = content;
      tabsElement.appendChild(tabElement)

      tabElement.addEventListener("click",()=>{
        const category_img = document.querySelector("#category_img_src");
        const category_text = document.querySelector("#category_text");

        defaultTab = tab[1].tab;
        category_img.src = tab[1].imgSRC;
        category_text.textContent = tab[1].title
      })
    
    })
});

