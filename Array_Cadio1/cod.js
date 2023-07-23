        'use strict'
        const inventors = [
            { first: 'Albert', last: 'Easther', year: 1979, passed: 1727},
            { first: 'Jacob', last: 'Vincent', year: 1643, passed: 1727},
            { first: 'Paul', last: 'Daniel', year: 1564, passed: 1642},
            { first: 'Caldera', last: 'Marie', year: 1867, passed: 1934},
            { first: 'Johnson', last: 'Skeps', year: 1571, passed: 1630 },
            { first: 'Nicolaus', last: 'Princess', year: 1473, passed: 1543 },
            { first: 'Max', last: 'Alphred', year: 1858, passed: 1947 },
        ];

        const people = ['Danny, Lio', 'Badore, Lague', 'Joseph, Onahi', 'Alagi, Paul', 'Confido, Okpoto', 'Mather, Agana', 'David, Ajom', 'Blessed, Jackson', 'Comfort, Obobe', 'Olivia, Grace', 'Beson, Banabas', 'Victor, Isaac', 'Lilly, Samule', 'Shina, Ayomide', 'Ayo, Dele', 'Agi, Favor', 'Omenka Glee', 'Happiness, Ede'
        ];
        // Array prototype filter
        const Result = inventors.filter(function(inventor){
            if (inventor.year >= 1500 && inventor.year < 1600){
                return true;
            }
        });
        console.table(Result)

        // Array prototype map
        const fullName = inventors.map( inventor => inventor.first + ' ' + inventor.last + ' ' + inventor.year);
        console.log(fullName);

        // Array prototype map
        // const ordred = inventors.sort(function(a, b){
        //     if( a.year > b.year){
        //         return 1;
        //     } else{
        //         return -1;
        //     }
        // });
        // console.table(ordred);

       const align = inventors.sort((a, b) => a.year > b.year ? 1 : -1 )
       console.table(align);

        //Array prototype  Reduce
        // How many years did all the ivestors liv?
        const TootalYears = inventors.reduce((total, inventor) =>{
            return total + (inventor.passed - inventor.year);
        }, 0)
        console.log(TootalYears);

        // Sort thr investors by year live
        // const oldest = inventors.sort(function(a, b){
        //     const firstGuy = a.passed - a.year;
        //     const nextGuy = b.passed - b.year;
        //     if(firstGuy > nextGuy){
        //         return 1;
        //     } else{
        //         return -1;
        //     }
        //     });
        //     console.table(oldest);
        const oldest = inventors.sort(function(a, b){
            const firstGuy = a.passed - a.year;
            const nextGuy = b.passed - b.year;
           return firstGuy > nextGuy ? 1 : -1;
            });
            console.table(oldest);

            // creat a list of burlvads in parish that contain "de" anywhere in the name