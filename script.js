//Progress bar

AnimateCircle("example-animation-container-1", 0.7);
AnimateCircle("example-animation-container-2", 0.9);
AnimateCircle("example-animation-container-3", 0.6);
AnimateCircle("example-animation-container-4", 0.4);

function AnimateCircle(container_id, animatePercentage) {   //beepitett fgv()
    var startColor = '#ec711b'; //kezdo szin
    var endColor = '#ec711b';   //ami a vegen lesz

    var element = document.getElementById(container_id);    //a fgv-ben ezt a [container_id] nevet hasznaljuk FENT
    var circle = new ProgressBar.Circle(element, {          //Circle fgv()
        color: startColor,  //alapertelmezett szin
        trailColor: '#ccc', //kor szine AMIBEN megy a csik , celszeru szurke
        trailWidth: 5,      //milyen vastag legyen a kor
        duration: 3000,     //idotartam, millisecumdum
        easing: 'bounce',   //easeInOut
        strokeWidth: 5,     //milyen vastag legyen a betolto csik
        text: {
            value: (animatePercentage * 100) + " % tapasztalat.",  // elejen megadott ertek, 0.0 es 1.0 kozott + szoveg hozzafuzve
            className: 'progressbar__label'                     // a szoveg szine ami megjelenik
        },
        // Set default step function for all animate calls
        step: function (state, circle) {                        //beepitett fgv() un. lepcsos fuggveny , hogyan 'lepkedjen'
                                                                // a state.color a StartColor
            circle.path.setAttribute('stroke', state.color);   //a 'stroke' az endColor-hoz kell
        }
    });

    circle.animate(animatePercentage, {     //bemeno parameter a fgv() elejen
        from: {
            color: startColor
        },
        to: {
            color: endColor
        }
    });
}