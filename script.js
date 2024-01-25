//your JS code here. If required.
document.getElementById("btn").addEventListener("click",async()=>{
	let txt=document.getElementById("text").value;
	let delay=document.getElementById("delay").value;
	if(txt&&delay){
		let myPromise=new Promise((resolve)=>{
			setTimeout(()=>{
				resolve(txt);
			},delay);
		});
		let txt2=await myPromise;
		if(txt2){
			document.getElementById("output").textContent=txt2;
		}
	}
});