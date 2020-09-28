var promise = fetch("http://www.example.com/api/get/1", {
    credentials: "include"
  });
promise.then(res=>console.log(res)).catch(err=>console.log(err));