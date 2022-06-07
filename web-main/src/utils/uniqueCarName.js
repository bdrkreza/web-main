xport default (carList, title) => {
 carList.forEach((item) => {
   item.m_name = item.model_name.model_name.toUpperCase();
 });
 let list = [...new Map(carList.map((item) => [item[title], item])).values()];
 return list.sort((a, b) => (a.m_name > b.m_name ? 1 : -1));
;
