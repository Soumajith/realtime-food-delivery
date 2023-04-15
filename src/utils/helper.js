export const getMenu = (resturantMenu) => {

    const menu = [];
    if(resturantMenu != null){
        resturantMenu.map((cardItem) => { 
        cardItem?.card?.card?.itemCards?.map((item) => {
           menu.push(item?.card?.info?.name);
       })
   })
}

   return menu;
}

export function filterData(searchText, restraunts) {

    const filterData = restraunts.filter(
     (restraunt) => restraunt?.data?.name?.toLowerCase().includes(searchText.toLowerCase()));
    
     return filterData;
 }