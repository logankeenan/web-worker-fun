# Web Worker Fun
Messing around with web workers.  

What if a web worker was used to offload client side apps to another thread. The web worker would act like a server 
where it would receive requests and return response. The main thread would just be responsible for updating the DOM.
 
# Run Locally
Requires rust because I have not found a basic http server that will send the correct mime types for js modules.
* run `cargo build`
* run `basic-http-server -a 0.0.0.0:3000`
* visit [http://localhost:3000/#hello-world](http://localhost:3000/#hello-world) in Chrome because module workers only works in Chrome right now.
