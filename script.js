

const winsChart = document.getElementById("winsChart");

new Chart(winsChart, {

    type: "bar",

    data: {

        labels: ["GT","SRH","RCB","MI","CSK"],

        datasets: [{

            label: "Wins",

            data: [10,9,8,7,7],

            backgroundColor: [

                "#f4b400",

                "#ff7043",

                "#d32f2f",

                "#1976d2",

                "#fdd835"

            ],

            borderRadius:10

        }]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{

                display:false

            }

        },

        scales:{

            y:{

                beginAtZero:true

            }

        }

    }

});



const tossChart=document.getElementById("tossChart");

new Chart(tossChart,{

    type:"pie",

    data:{

        labels:["Bat First","Field First"],

        datasets:[{

            data:[42,58],

            backgroundColor:[

                "#ff9800",

                "#42a5f5"

            ]

        }]

    },

    options:{

        responsive:true

    }

});

const btn=document.querySelector(".center button");

btn.addEventListener("click",()=>{

    alert("GT 🆚 SRH\n\nNarendra Modi Stadium\n7:30 PM");

});





const cards=document.querySelectorAll(".player-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});