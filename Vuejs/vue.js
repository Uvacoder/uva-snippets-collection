<html>
<div id="app">
    {{message}}
</div>

</html>


//On Javascript//
var myApp= new Vue ({
    el:'#app',
    data: {
        message:'Hello World'
    }
})

==========================================================================
//////////////////////////////////Directives///////////////////////////////
=========================================================================
<html>
<div id="myApp">
   <p v-if="seen">Now you seen me</p>
</div>

</html>

var myApp= new Vue ({
    el:'#myApp',
    data: {
        seen:'Hello World'
    }
})

    ====================================================================
    //////////////////////////V-ON//////////////////////////////////////
    ===================================================================

    <html>
<div id="myApp">
    <button v-on: click="myclickHandler">Click me</button>
</div>

</html>

var myApp = new Vue({
    el:'#app',
    methods: {
        myClickHandler: function(){
            console.log('button clicked');

        }
    }
})

