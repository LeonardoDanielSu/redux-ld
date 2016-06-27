
// step 1.2
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3
function render() {
    const state = store.getState();
    $('#value').text(state.count.result);
    $('#value2').text(state.sum);

    if(state.count.loading){
        $('#status').text("is loading...");
    }else{
         $('#status').text("loaded");
    }
    // image
    $('#imagesStatus').text(state.images.loading);
    if(state.images.loading =="loading…"){
         $('#imagesList').text("");
    }
     else if(state.images.loading =="loaded"){
         for(let i=0; i< state.images.data.length; i++){
             $('#imagesList').append("<img src='"  + state.images.data[i].link + "' style='height:200px'>");
         }
     }

};
store.subscribe(render);
// ~end step 1.3
render();
