 $(document).ready(function (){
   $("#submit").click(function (){
        alert("hi");
        if($("#email").val()==""||$("#password").val()=="")
            $("div#ack").html("please enter email and pass");
        else
            $.post( $("#myForm").attr("action"), 
                    $("#myForm :input").serializeArray(),
                    function(data){
                        $("div#ack").html(data);
                    });
        $("#myForm").submit( function(){
            return false;
        });
     });
    });