/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

var items = ["🍊", "🍇", "🍓", "🌶️", "🫑", "🍟", "🧊", "🍩", "🧁", "🎁", "💎", "🌰", "🪴", "🌳", "🥬", "🥮", "🍪", "🥧", "🍯", "🫖"],
values = [4,5,6,7,8,9,10,11,12,13,14],
easy = true,
missing, ans, full;
window.onload = () => {
    Swal.fire({
    title: 'Select Game Mode',
    showDenyButton: true,
    showCancelButton: false,
    allowOutsideClick: false,
    confirmButtonText: `Easy`,
    denyButtonText: `Hard`,
    }).then((result) => {
        if (result.isConfirmed) {
            easy = true;
            setItems();
        }
        else if (result.isDenied) {
            easy = false;
            setItems();
        }
    });
    $(".nums").html("");
    for (var i = 0; i<=9; i++) {
        $(".nums").append(`<button onclick="ins(${i})">${i}</button>`);
        if (i==4) $(".nums").append('<br/>');
    }
    $("input").attr("placeholder", "?");
}

function setItems() {
    items = shuffle(items);
    values = shuffle(values);
    
    var q1 = `<div>${getItem(0)}+${getItem(0)}+${getItem(0)}=<span class="item">${(values[0]*3)}</span></div>`;
    
    var q2 = `<div>${getItem(0)}+${getItem(0)}+${getItem(1)}=<span class="item">${((values[0]*2) + values[1])}</span></div>`;
    
    var q3 = `<div>${getItem(0)}+${getItem(1)}-${getItem(2)}=<span class="item">${(values[0] + values[1] - values[2])}</span></div>`;
    
    var q4 = `<div>${getItem(1)}+${getItem(2)}-${getItem(3)}=<span class="item">${(values[1] + values[2] - values[3])}</span></div>`;
    
    if (easy) {
        full = q1+"<br/>"+q2+"<br/>"+q3;
        ans = values[2];
        missing = items[2];
    }
    else {
        full = q1+"<br/>"+q2+"<br/>"+q3+"<br/>"+q4;
        ans = values[3];
        missing = items[3];
    }
    $(".answer .missing").html(missing+" = ");
    $(".question").html(full);
    
}

rnd = lim => {
     return Math.floor(Math.random() * lim); 
}

shuffle = array => {
    var tmp, c, p = array.length;
    if(p) while(--p) {
        c = rnd(p+1);
        tmp = array[c];
        array[c] = array[p];
        array[p] = tmp;
    }
    return array;
}

getItem = num => {
    return '<span class="item">'+items[num]+'</span>';
}

ins = n => $("input").val($("input").val()+n);

$(document).ready(function() {
    $(".done").click(function() {
        if($(".answer input").val()==ans) {
            Swal.fire({
            icon: 'success',
            title: 'Correct',
            text: 'Your answer is correct',
            showConfirmButton: false,
            timer: 1200,
            allowOutsideClick: false
            })
            setItems();
            $(".answer input").val("");
        }
        else {
            
        Swal.fire({
            icon: 'error',
            title: 'Wrong',
            text: 'Do you wanna continue ?',
            showDenyButton: true,
            confirmButtonText: `Continue`,
            denyButtonText: `Restart`,
            }).then((result) => {
                if (result.isConfirmed) {}
                else if (result.isDenied) {
                    setItems();
                }
           })
        }
    });
    
    $(".del").click(function() {
        var txt = $("input").val().slice(0, -1);
        $("input").val(txt);
    });
});

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/