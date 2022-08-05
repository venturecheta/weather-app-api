class Fetch {
    async getCurrent(input) {
      const myKey = "0a86a9e404fb3be1e37726c3e3f03fbb";
  
      //making a request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }