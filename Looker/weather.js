var weatherjson = '{"coord":{"lon":-121.74,"lat":38.55},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":289.48,"pressure":1014,"humidity":47,"temp_min":287.15,"temp_max":292.15},"visibility":16093,"wind":{"speed":2.1,"deg":340},"clouds":{"all":1},"dt":1507391880,"sys":{"type":1,"id":378,"message":0.0038,"country":"US","sunrise":1507385361,"sunset":1507426736},"id":0,"name":"Davis","cod":200}';  
var temp = JSON.parse(weatherjson);  
document.write(temp.temp);  
